let showButton = false;

const containerAll = document.getElementById('container-all');
const postDiv = document.getElementById('post');
const commentDiv = document.getElementById('comments');
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


  const  clearBox = (elementID) =>
  {
      document.getElementById(elementID).innerHTML = "";
  }

  const handleRenderComment = (event, btnComments, numberPostId, postContainer)=>{
    
    showButton = !showButton;
    btnComments.innerText = showButton? 'Hidden comments':'Show comments';
   
    if (showButton) {
      getComments(numberPostId, postContainer)
    .then((postId) => {
      postId.forEach(item =>{
        if(item.postId === numberPostId){
          renderComments(item, postContainer)
        }
    })
  })
    .catch((err) => {
        if (err.status === 404) {
          alert("Comments not found!");
        }
    });
    } else {
      clearBox("comment");
    }
}

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
      ()=>{
        handleRenderComment(event, btnComments, postId, postContainer)
      });
     
  };
    
   
  const renderComments =(comment, postContainer) =>{
    const {body} = comment;
    
    const bodyCommentElem = document.createElement("p");
    commentElem.className = 'comment-elem';
      
    bodyCommentElem.innerText = body;
    const lineElem = document.createElement("hr");
    
    commentElem.append(bodyCommentElem, lineElem);
    postContainer.append(commentElem, commentDiv);
  }
    
 