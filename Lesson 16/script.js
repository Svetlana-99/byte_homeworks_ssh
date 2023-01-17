// Задание 1

// Вашей задачей будет реализовать функционал приветсвия пользователя на сайте c помощью localStorage.

// При первом входе на сайт просто показывать на экране приветствие Добро пожаловать!
// Если пользователь уже заходил на сайт (при первом визите), то к базовому приветсвию следует добавить строку Вы заходили раз: N. Где вместо N будет количесво посещений сайта пользователем. Обратите внимание, что первый визит так же считается.
// Функционал должен работать при закрытии вкладки или бразура, обновлении страницы.



const VISITED = "countOfVisits";
let N;
const renderWelcomeBlock = () => {
  const welcomeBlock = document.createElement('h1');
  welcomeBlock.innerText = 'Добро пожаловать';
  document.body.append(welcomeBlock);
}

const renderWelcomeVisitedBlock = (N) => {
  const welcomeVisitedBlock = document.createElement('h1');
  welcomeVisitedBlock.innerText = ` Вы заходили раз: ${N}`;
  document.body.append(welcomeVisitedBlock);
}

const updateLocalStorage = () =>{
  renderWelcomeBlock();
  N = JSON.parse(localStorage.getItem(VISITED));
  if (N) {
    N +=1;
    renderWelcomeVisitedBlock(N);
  }else{
    N=1;
  }
  localStorage.setItem(VISITED, JSON.stringify(N));
}

updateLocalStorage()
