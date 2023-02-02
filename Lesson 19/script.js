// Задание 1
const IP = 'https://ipapi.co/json/'
const IMAGE = 'https://restcountries.com/v2/name/'

const mainDiv = document.getElementById("mainDiv");
const mainContent = document.createElement("div");

const renderBlockCountry = ({result, resultImg}) =>{
  const {country_name, city, currency}= result;
  
  const countryTitle = document.createElement("h1");
  const cityTitle = document.createElement("h2");
  const currencyTitle = document.createElement("p");
  
  mainDiv.classList = 'main-div';
  mainContent.className = 'main-content';
 
  countryTitle.innerText = country_name;
  cityTitle.innerText = city;
  currencyTitle.innerText = currency;

  mainContent.append(countryTitle, cityTitle, currencyTitle);
  mainDiv.append(mainContent);
}
const renderBlockFlag = ({resultImg}) =>{
  const {flag} = resultImg;

  const flagImg = document.createElement("img");

  flagImg.className = 'img-content';
  flagImg.src = flag;
  flagImg.alt = 'Сountry flag'

  mainContent.append(flagImg);
  mainDiv.append(mainContent);
}

const dataForIP = async () =>{
  return fetch(`${IP}`);
}

const dataForImage = async (name) => {
  return fetch(`${IMAGE}/${name}`)
}
//
const getDataCountry = async () => {

  const response = await dataForIP();
  const result = await response.json();
  const COUNTRY = result.country_name;
  renderBlockCountry({result});
  getDataFlag(COUNTRY);
};


const getDataFlag = async (COUNTRY) => {
  const responseImage = await dataForImage(COUNTRY);
  const resultImage = await responseImage.json();

  renderBlockFlag({ resultImg: resultImage[0]});
};
getDataCountry();

// Задание 2
// С помощью сервиса swapi.dev запросите информацию о персонаже Звездных войн, а так же все фильмы, в которых он появлялся.

// Для этого на странице должна быть форма, в которую пользователь может ввести id желаемого персонажа (доступны айди персонажей от 1 до 82).
// После отправки формы, необходио отправить запрос по адресу https://swapi.dev/api/people/ID где вместо ID необходимо подставить значение, которое пользователь ввел в форму.
// Далее, на странице необходимо отрендерить карточку с именем персонажа и кнопкой Фильмы.
// При клике на кнопку в карточке, необходимо добавить в карточку с персонажем названия всех фильмов, в которых он появлялся. Информация о каждом фильме хранится по ссылкам, которые перечисленны в массиве по ключу films в ответе на предыдущий запрос (запрос на /people/ID).
// Все запросы на фильмы необходимо отправлять с помощью метода Promise.all.

const BASE_URL = "https://swapi.dev/api";
const characterId = document.getElementById("character-id");
const characterBtn = document.getElementById("character-btn");
const characterInput = document.getElementById("character-id");
const characterForm = document.getElementById("character-form");
const nameBlock = document.getElementById("name");
const filmsBtn = document.getElementById("film-btn");
const filmsCard = document.getElementById("film-card");
const filmName = document.getElementById("film-name");

const showPreloader = (show) => {
  if (show) {
    preloader.style.display = "block";
  } else {
    preloader.style.display = "none";
  }
};

const handleRequestErrors = async (response) => {
  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error);
  }
  return response;
};

//запрос на персонажа
const characterName = async (characterNumber) => {
  try {
    const response = await handleRequestErrors(
      await fetch(`${BASE_URL}/people/${characterNumber}`)
    );
    const { name, films } = await response.json();
    return {
      name,
      films,
    };
  } catch (error) {
    alert(error.messages);
    return {
      name: "No character",
      films: [],
    };
  }
};

//формируем блок с именем персонажа  
const renderNameBlock = ( {name} ) => {
  nameBlock.innerText = name;
};

//обработка формы по клику на кнопку Отримати персонажа
const handleFormSumbit = async (event) => {
  event.preventDefault();
  const { value: characterNumber } = characterInput;

  filmName.classList.add("none");
  filmName.innerHTML = "";

  if (!characterNumber) {
    alert("You didn't enter a character ID");
    nameBlock.innerText = 'No character';
    filmName.innerHTML = "No movies";
  } else {
    showPreloader(true);
    const characterValues = await characterName(characterNumber);
    showPreloader(false);
    renderNameBlock(characterValues);
    getAllNameFilms(characterValues);

    if (!filmName.classList.contains("block")) {
      filmsCard.classList.add("block");
    }
  }
};



// Запрос на фильмы
const getAllNameFilms = async ({ films }) => {
  showPreloader(true);
  const requests = films.map((film) => fetch(film));
  const responses = await Promise.all(requests);
  const jsonResponses = responses.map((resp) => resp.json());
  const result = await Promise.all(jsonResponses);
  showPreloader(false);
  let title = [];
  title = result.forEach((item) => {
    createMovieList(item.title);
  });
};

//по полученному формируем список  Фильмы

const createMovieList = (title) => {
  const name = document.createElement("p");
  name.innerText = title;
  filmName.append(name);
};

const handleButtonListener = async () => {
  filmName.classList.toggle("none");
};

characterForm.addEventListener("submit", handleFormSumbit);

filmsBtn.addEventListener("click", handleButtonListener);
