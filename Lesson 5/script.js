
// ЗАВДАННЯ 1
const outputOfNumbersFor = () =>{
    for (let i=1; i<= 10; i++){
    console.log(i);
    }
    }
    
    const outOfNumberWhile = () => {
        let i=1;
        while ( i<= 10 ) {
            console.log(i);   
            i++;
        }
    }
    
    const outOfNumberDoWhile = () => {
        let i=1;
        do {
            console.log(i);   
            i++;
        }
        while(i<= 10)
    }

    
// ЗАВДАННЯ 2

function prineNumbers(a, b){
    let firstCount;
    if ( (a=1) || (a = 0) ) { firstCount = 2} else { firstCount = a }
    nextIteration:
    for (let i = firstCount; i <= b; i++) {
    
        for (let j = 2; j < i; j++) {
            if (i % j === 0)  {
                continue nextIteration;
            };
        }
            console.log('prine=',i);
                 
        }
    }



// ЗАВДАННЯ 3
const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;
    let countEnter = 3;

    let i=1;
    
    alert('У Вас есть три попытки для ввода логина и пароля! В случае ошибок аккаунт будет заблокирован')
    while (i<=countEnter && !isAuthSuccess){
            
        userLogin = prompt('Ваш логин:');
        if(!userLogin){
            alert('Введите Ваш логин!')
            continue;
         }
        userPassword = prompt('Ваш пароль:');
        if(!userPassword){
            alert('Введите Ваш пароль!')
            continue;
        }
    
        if (userPassword === PASSWORD || userLogin === LOGIN) {
            isAuthSuccess = true;
            break;
        } else {
            alert('Данные неверны!')
        }
        i++;   
    }
        
    isAuthSuccess? (alert('Добро пожаловать!')) : (alert('Аккаунт заблокирован!'));
       
}






console.log('Перевірка завдання 1:');
console.log(' С помощью цикла  for:');
outputOfNumbersFor();

console.log(' С помощью цикла  while:');
outOfNumberWhile();

console.log(' С помощью цикла do  while:');
outOfNumberDoWhile();


//console.log('Перевірка завдання 2:');
console.log('Діапазон чисел від 20 до 100:');
const test = prineNumbers(20, 100);
console.log('Діапазон чисел від 1 до 10:');
const test1 = prineNumbers(1, 10);



// Перевірка завдання 3

 authorize();
