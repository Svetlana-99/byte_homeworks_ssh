
const containerAll = document.getElementById('container-all');
const postDiv = document.getElementById('post');
const commentElem = document.getElementById('comment');

const BASE_URL ="https://jsonplaceholder.typicode.com";

const get = (url)=>{
  return new Promise((resolve, reject)=>{
    xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = () =>{
      const {status, response} = xhr;
      if (status === 200) {
        resolve (response);
      } else {
        reject({
          status,
        });
      }
    };

      xhr.onerror = () => {
        reject();
      };
    });
  }

  const getPosts = () => {
    return get(`${ BASE_URL}/posts`);
  };
  

  getPosts()
   .then((post) => {post.forEach(element => {
     renderPost(element)})})
   .catch((err) => {
      if (err.status === 404) {
        alert("Post not found!");
      }
   });
  
   const getComments = () => {
    return get(`${ BASE_URL}/comments`);
  };

  
const hideComments = (div)=>{
let commentsDel = div.lastElementChild;
commentsDel.remove();
};

const renderComments = (comments, div)=>{
const divComment = document.createElement('div');

comments.forEach((comments)=>{
  let {body} = comments;
  divComment.className='comment-elem'
  const bodyCommentElem = document.createElement("p");
  bodyCommentElem.innerText = body;
  const lineElem = document.createElement("hr");
  
  divComment.append(bodyCommentElem, lineElem)
})
div.append(divComment);
}

const getPostComments =(postId, event)=>{


  const button = event.currentTarget;
  const parent = event.currentTarget.parentNode;

  getComments()
      .then((comments) =>{
        let comment = comments.filter((result) => {
          if (result.postId === postId){
          return result}
        } 
        );
          if (button.innerText === 'Show comments'){
              button.innerText = 'Hidden comments';
              renderComments(comment, parent)
            } else {
            if (button.innerText === 'Hidden comments'){
              button.innerText = 'Show comments';
              hideComments( parent)
            }       
          };
})
.catch((err) => {
  if (err.status === 404) {
    alert("Comments not found!");
  }
});
};


  const renderPost = (post) => {
    
    const { title, body, id: postId } = post;

    const postContainer = document.createElement("div");
    const titlePostElem = document.createElement("h2");
    const bodyPostElem = document.createElement("p");
    const btnComments = document.createElement("button");
    const postNumber = document.createElement("h2");
    postNumber.innerText = postId;
    
    postContainer.className = 'container-post';
    btnComments.className = 'btn-comments';

    titlePostElem.innerText = title;
    bodyPostElem.innerText = body;
    btnComments.innerText = 'Show comments';

    
    postContainer.append(postNumber, titlePostElem, bodyPostElem, btnComments);
    postDiv.append(postContainer); 
    
    btnComments.addEventListener('click',
    (event)=>{
     getPostComments(postId, event)
    });
  };
    
  
    
 