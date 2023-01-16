const formConfig = [
    {
      element: "text",
      name: "login",
      label: "Логин",
    },
    {
      element: "text",
      name: "age",
      label: "Возраст",
    },
    {
      element: "select",
      name: "language",
      label: "Выберите язык программирования",
      options: [
        {
          text: "JavaScript",
          value: "js",
        },
        {
          text: "Java",
          value: "java",
        },
        {
          text: "Python",
          value: "python",
        },
      ],
    },
  ];

const createLabelElement = (labelText, name)=>{
    const label = document.createElement("label");
    label.innerText = labelText;
    label.classList.add("label")
    label.htmlFor = `${name}`;
  
    return label;
}

const createInputBlockElement = (placeholderText, name, element)=>{
    const input = document.createElement("input");
    input.placeholder = `Введите ${placeholderText.toLowerCase()}...`;
    input.name = `${name}`;
    input.type = `${element}`;
  
    return input;
}

const createSelectBlockElement = (name, label, element, options) =>{
  const select = document.createElement("select");
  select.name = `${name}`;       
  select.type = `${element}`;
  options
  .forEach((item) =>{
    const selectOptions = select.add(new Option(`${item.text}`, `${item.value}`));
    select.append(selectOptions);
  })
  return select;
}

var button = document.createElement('button');
button.innerText = 'Подтвердить';
button.type = "submit";
button.classList.add("buttonSubmit");



const greateAllElements = (arr) =>{

  const conteinerBlock = document.createElement('div');
  let form = document.createElement('form');
  form.id = "formData"
        for (key in arr){
        if (arr[key].element === 'text') {
            const inputBlock = document.createElement('div');
            inputBlock.classList.add("inputBlock");
            const label = createLabelElement(arr[key].label, arr[key].name);
            const input = createInputBlockElement(arr[key].label, arr[key].name, arr[key].element );
            
            inputBlock.append( label, input);
            form.append(inputBlock);
        };
        if (arr[key].element === 'select'){
          const selectBlock = document.createElement('div');
          const label = createLabelElement(arr[key].label);
          const select = createSelectBlockElement(arr[key].name, arr[key].label, arr[key].element, arr[key].options );
        
          selectBlock.append( label, select);
          form.append(selectBlock, button);
        };
        
        conteinerBlock.append(form);
    }
       document.body.append(conteinerBlock)
       return
    }

 
greateAllElements(formConfig );

const form = document.getElementById("formData");

const convertFormDataToObject=(formData)=> {
 
  const formValues = {}
  for (let pair of formData.entries()){
   
    formValues[pair[0]]=pair[1];
  }
  return formValues
}
const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const dataSubmit = convertFormDataToObject(formData);
  
  console.log('dataSubmit', dataSubmit);
}

formData.addEventListener('submit', handleSubmit)
