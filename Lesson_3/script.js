// 1

const a = 5;
const b = 10;

const sum = a+b;
console.log('sum', sum);

const difference = a-b;
console.log('difference', difference); 

const division = a/b;
console.log('division', division); 

const multiplication = a*b;
console.log('multiplication', multiplication); 

//2

// true && true                 true
// false || true                true
// true && 'false'              true
// 0 && 1 || ' ' && 42          42 (true)   
// null == undefined            true
// '' == 0                      true
// 1 === '1'                    false
// NaN === NaN && true          false
// true || false && true || false           true          
// (true || false) && (true || false)       true
// 10 || 0 && 'dog' || ''                   10 true
// (10 || 0) && ('dog' || '')               'dog' true


//3 Порівняння чисел

// alert('Вам потрібно ввести значення двох чисел, а ми поівняємо їх');
// let c = Number(prompt('Перше число ='));
// console.log(c);
// let d = Number(prompt('Друге число ='));
// console.log(d);
// if (c > d ) {alert(`Число ${c} більше числа ${d}`);} ;
// if (c < d) {alert(`Число ${d} більше числа ${c}`);};
// if (c===d) {alert('Числа рівні');};



//4 Калькулятор

// alert('КАЛЬКУЛЯТОР');
// alert('Вам потрібно ввести значення двох чисел та обрати потрібну дію. Калькулятор все обчисліть за Вас!');
// let firstNumber = Number(prompt('Перше число ='));
// console.log(firstNumber);
// let secondNumber = Number(prompt('Друге число ='));
// let mathOperation = Number(prompt('Оберіть номер потрібної дії: 1 - додавання; 2 - віднімання; 3 - множення; 4 - ділення'));
// console.log(mathOperation);

// switch (mathOperation) {
//     case 1:
//         let sum = firstNumber+secondNumber;
//         alert(`${firstNumber} + ${secondNumber} = ${sum}`);
//       break;

//     case 2:
//         let difference = firstNumber-secondNumber;
//         alert(`${firstNumber} - ${secondNumber} = ${difference}`);
//       break;
    
//     case 3:
//         let multiplication = firstNumber*secondNumber;
//         alert(`${firstNumber} * ${secondNumber} = ${multiplication}`);
//       break;
    
//     case 4:
//         let division = firstNumber/secondNumber;
//         alert(`${firstNumber} / ${secondNumber} = ${division}`);
//       break;
      
//     default:
//         alert(`Вибачте, але ця дія не передбачена...`);}

// 5
let userAge = Number(prompt('Для відвідування атракціону необхідно ввести Ваш вік'));
console.log('userAge', userAge);
if (userAge > 18 && userAge < 60) {alert('Будь ласка, вхід дозволено');} 
else {
    if (userAge < 12 || userAge > 80) {alert('Нажаль, Вам заборонено відвідувати атракціон');} 
    else{
        if ((userAge >= 12 && userAge <= 18) || (userAge >= 60 && userAge <= 80))
        {let dozvil = confirm('Чи дозволяють Вам дорослі відвідувати атракціон?'); 
           if (dozvil) {alert('Будь ласка, вхід дозволено');} else {alert('Вибачте, але Вам неможно відвідувати атракціон...');};} 
   
    }

    
}

