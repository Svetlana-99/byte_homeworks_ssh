export const loginFormData = [
  {
    name: "email",
    placeholder: "Enter email",
    label: "Email",
  },
  {
    name: "password",
    placeholder: "Enter password",
    label: "Password",
    type: "password",
  },
];

export const registerFormData = [
  {
    name: "email",
    placeholder: "Enter email",
    label: "Email",
  },
  {
    name: "name",
    placeholder: "Your name",
    label: "Name",
  },
  {
    name: "password",
    placeholder: "Enter password",
    label: "Password",
    type: "password",
  },
];


export const taskFormData = [
  {
    name: "name",
    placeholder: "Task name",
    label: "Name",
  },
  {
    name: "description",
    placeholder: "Task description",
    label: "Description",
  },
];


export class Input {
  constructor(options) {
    const {
      name,
      placeholder,
      label,
      type = "text",
      onInput,
      onChange,
    } = options;

    this.containerInput = document.createElement("div");
    this.containerInput.setAttribute("id", "test");
    this.labelInput = document.createElement("p");
    this.input = document.createElement("input");
    this.errorMessageElement = document.createElement("span");

    this.name = name;
    this.label = label;
    this.input.name = name;

    this.input.placeholder = placeholder;
    this.labelInput.innerText = label;
    this.value = this.input.value;
    this.input.type = type;

    this.containerInput.className = "div_input";
    this.errorMessageElement.classList.add("error");
    this.input.className = "input";

  
    this.containerInput.append(this.labelInput, this.input, this.errorMessageElement)

    function addListener() {
      // this.element.addEventListener("change", (event) => {
        
      //   onChange(event);
      // });
      this.input.addEventListener("input", (event) => {
        console.log('NO__input')
        this.value = event.target.value;
        // console.log('this.value__input', this.value)
        // this.updateErrorMessage('')
        if (onInput) {
          // console.log('this.valu', this.value)
          onInput(event);
        }
      });
      if (onChange) {
        this.input.addEventListener("change", (event) => {
          onChange(event);
        });
      }
    }
    addListener.call(this);
  }  
  // updateErrorMessage(message) {
  //   this.errorMessageElement.innerText = message;
  // }
  render(container){
      container.append(this.containerInput);
    };
  }
 