// Задание 1

const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};
// Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:
// total, из объекта paging, который вложен в объект meta
// значение is_active, которое принадлежит первому объекту в массиве data. Переименуйте переменную в isActive.

const { meta: { paging: { total } } } = response;
console.log("total", total);

const {data: [firstElement]} = response;
const {is_active: isActive} = firstElement;
console.log("isActive", isActive);


//Задание 2
// Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:
// name
// surname
// все остальные свойста (height, age) должны быть присвоены объекту parameters.

const user = {
  name: "gabriel",
  surname: "brown",
  age: 17,
  height: 178,
};

const {name, surname, ...parameters} = user;
console.log("name", name);
console.log("surname", surname);
console.log("parameters", parameters);


// Задание 3

// const max = (a, b) => {
//   return a > b ? a : b;
// };
// Переделайте функцию max таким образом, что бы она принимала любое количество аргументов (при условии, что все они являются числами,
//  и возвращала максимальное из них).
//  P.S. В данной задаче нельзя использовать Math.max()


const maxTest = (...numbers) => {
  let  max = numbers[0];
  
  for (let i = 1; i<numbers.length; i++){
    if (numbers[i] > max ) {
      max = numbers[i];
    }
  }
  return max;
  };
  const result = maxTest(1, 5, 2,3, 44, 15,6);
  console.log('result', result)

  // Задание 4 
  // Переделайте функцию createMessage таким образом, что бы на вход передавались не 4 аргумента, 
  // а один объект. Деструктузизуйте его в прямо в аргументах или в теле функции, и присвойте значения по умолчанию:

// Guest для поля author
// текущую дату для поля time

const createMessage = (props) => {
  const {
    author = "Guest", 
    text, 
    reciever, 
    time = new Date(),
  } = props;
  return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};
const message = createMessage({author: "Peter", text: "Hello", reciever: "Sam",time: new Date()});
console.log("message", message)

// после выполнения этого задания, функция должна коректно работать с таким аргументом
const messageTwo = createMessage({
  reciever: "John",
  text: "Hi!",
});
console.log("messageTwo", messageTwo)

// Задание 5.1
// Напишите регулярное выражение, которое находит подстроки с такими свойствами:
// A - начинается с буквенного символа
// B - заканчивает на буквенный символ
// C - между первым и послденим символом находятя только числовые символы
// для поиска используйте метод match

let regexpA = /\b[a-z]\w+/g;
let str = "x1y 722a 333 a123v a55555a qwe1 1zxc";

const resA = str.match(regexpA);
console.log("resA", resA);

let regexpB = /\w+[a-z]\b/g;

const resB = str.match(regexpB);
console.log("resB", resB); 

let regexpC = /\b\w\d+\w\b/g;

const resC = str.match(regexpC);
console.log("resC", resC);

//  Задание 5.2
// Напишите регулярное выражение для валидации домена (адреса сайта)
// Валидные домены: ex.ua, google.com, yandex.ru, site.com.ua, my-page.com
// то есть, доменные имена начинаются с любого количества буквенных символов, чисел, символов - _ .,
//  заканчиваются подстрокой, длина которой не менее 2 символов. Начало и конец обязательно разделены точкой
// используйте метод test



const SITE_REGEX_INTERNET = /[a-zA-Z0-9-_.]{1,}[a-zA-Z0-9]\.[a-zA-Z]{2,}/g;

const form= document.getElementById('form');
const input = document.getElementById('input');

handleSubmit = (event)=> {
  event.preventDefault();
  const {value} = input;
 
  if(SITE_REGEX_INTERNET.test(value)){alert('Все чудово, добро пожаловать!')
}else{
  alert('Нажаль, Ви ввели невірне значення!')
}
}

form.addEventListener('submit', handleSubmit)


const SITE_REGEX_MY = /\w+\.\w{2,}/ig;

const formMy= document.getElementById('formMy');
const inputMy = document.getElementById('inputMy');

handleSubmitMy = (event)=> {
  event.preventDefault();
  const {value} = inputMy;

  if(SITE_REGEX_MY.test(value)){alert('Все чудово, добро пожаловать!')
    }else{
      alert('Нажаль, Ви ввели невірне значення!')
    }
}

formMy.addEventListener('submit', handleSubmitMy)

// //  Задание 5.3
// Напишите регулярное выражаение, которое проверяет строку:
// строка не должна содержать ничего кроме числовых символов
// длина строка должна быть не менее 12, но можно и больше

const REGEX_FOR_STRING = /\d{12,}/;

const formForString = document.getElementById('formForString');
const inputForString = document.getElementById('inputForString');


handleSubmitForString =(event)=>{
  event.preventDefault();
  const {value} = inputForString;
  if(REGEX_FOR_STRING.test(value)){
    alert('Все чудово, добро пожаловать!');
    }else{
      alert('Нажаль, Ви ввели невірне значення! \n Має бути щонайменше 12 цифр');
  }
}

formForString.addEventListener('submit', handleSubmitForString);
// Тестируйте свои регулярки тут: https://regex101.com