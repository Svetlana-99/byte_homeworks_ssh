
// ЗАВДАННЯ 1

function compareNumber(a, b){
   return a === b ? true : false;
}

function compareNumber2(a, b){
    let result;
    if (a === b) {result = true} else {result = false};

   return result;
}

// ЗАВДАННЯ 2

function sum(a,b){
    const sum=a+b;
    return sum;
}


const sumNumber = (a, b) => a+b;

// ЗАВДАННЯ 3

function exponentiation(a, c = 2){
    const degree=a**c;
    return degree;
}

// ЗАВДАННЯ 4

function dayWeek(a){
    let day;
    switch(a){
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        case 7:
            day = 'Sunday'
             break;
        default:
            day = 'There is no such day'
            break;

    }
return day;
    }
    

// ЗАВДАННЯ 5


function helloUser(){
    let name = prompt('Введите Ваше имя');
    let age = Number(prompt('Сколько Вам лет?'));

   if (name === '' || age === 0) {alert('К сожалению, Вы не ввели данные')} else {
    if (age > 30) {alert(`Здравствуйте, ${name}!`)} else{alert(`Привет, ${name}!`)};
   }
    
    return helloUser;
}



// Перевірка завдання 1
console.log('compareNumber(5, 5)', compareNumber(5, 5))
console.log('compareNumber(5, 15)', compareNumber(5, 15))
console.log('compareNumber2(5, 5)', compareNumber2(5, 5))
console.log('compareNumber2(5, 15)', compareNumber2(5, 15))

// Перевірка завдання 2
console.log('sum(10, 12)', sum(10, 12));
console.log('sum(11, 128)', sum(11, 128));


console.log('sumNumber(8, 9)', sumNumber(8, 9));
console.log('sumNumber(18, 2)', sumNumber(18, 2));

// Перевірка завдання 3
console.log('exponentiation(8, 3)', exponentiation(8, 3));
console.log('exponentiation(5)', exponentiation(5));
// Перевірка завдання 4
console.log('dayWeek(1)', dayWeek(1));
console.log('dayWeek(8)', dayWeek(8));
console.log('dayWeek(3)', dayWeek(3));
// Перевірка завдання 5
helloUser();