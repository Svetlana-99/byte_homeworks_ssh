import "./styles/style.css";
import {
  formLogin,
  formRegister,
  formAddTask,
  btnTitle,
  formLoginBlock,
  formRegisterBlock,
  boardTask,
} from "./components/Form.js";
import { urlSelf, urlTask, getData, API } from "./components/API.js";
import {TaskCard} from "./components/Task.js"
import { formAddTaskBlock, tasksBlock } from "./components/Form.js";

export let isLogin = false;
export let isRegister = false;

export const appWrapper = document.getElementById("app-wrapper");
const headerContainer = document.getElementById("header_container");

export const header = document.getElementById("header");
export const formAuthorization = document.getElementById("form_authorization");

// Створення шапки BYTE TASKS
const title = document.createElement("h1");
export const logoutBlock = document.createElement("div");
export const logoutButton = document.createElement("button");
export const logoutSpan = document.createElement("span");

title.innerText = "BYTE TASKS";

title.className = "title";
logoutButton.className = "btn_title";
logoutSpan.className = "btn_p";

header.append(title);
headerContainer.append(header);

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("token");
  formLoginBlock.className = "display_block";
  formLogin.render(formLoginBlock);
  logoutBlock.remove();
  boardTask.className = "display_none";
  authorization();
});
export function renderLogoutBlock(logoutBlock, firstLetterName) {
  logoutButton.innerText = "LOGOUT";
  boardTask.className = "board";
  logoutSpan.innerText = firstLetterName;
  logoutBlock.append(logoutButton, logoutSpan);
  header.append(logoutBlock);
};
export function getTasks(id){
  const taskAll = new API(id);
      const taskAllCard = taskAll.getAllTasks();
      taskAllCard.then((tasks) => {
        console.log("tasks", tasks);
        tasks.forEach((item) => {
          const task = new TaskCard(item);
          task.renderTaskCard(tasksBlock);
        });
      });
}

// Проверка на token:

function authorization(){
  const token = localStorage.getItem("token");
  if (token) {
    const authorization = new API(token);
    const isAuthorization = authorization.getData(urlSelf, token);
    // console.log("isAuthorization", isAuthorization);
    isAuthorization.then((response) => {
      // console.log("response_isAuthorization", response);
      const firstLetterName = response.name[0].toUpperCase();
      const id = response._id;
      renderLogoutBlock(logoutBlock, firstLetterName);
      formAddTask.render(formAddTaskBlock);
      getTasks(id);
    });
  }
  
  if (!token || token === "undefined") {
    formLogin.render(formLoginBlock);
  
    btnTitle.addEventListener("click", () => {
      if (btnTitle.innerText === "REGISTER") {
        formLogin.remove(formLoginBlock);
        btnTitle.innerText = "LOGIN";
        formRegister.render(formRegisterBlock);
      } else {
        btnTitle.innerText = "REGISTER";
        formRegister.remove(formRegisterBlock);
        formLogin.render(formLoginBlock);
      }
    });
  }
}

authorization();
document.body.append(headerContainer, appWrapper);
