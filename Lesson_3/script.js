// 1

const a = 5;
const b = 10;

const sum = a+b;
console.log('5+10=', sum);

const difference = a-b;
console.log('5-10=', difference); 

const division = a/b;
console.log('5/10=', division); 

const multiplication = a*b;
console.log('5*10=', multiplication); 

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


//3

alert('КАЛЬКУЛЯТОР');
alert('Вам потрібно ввести значення двох чисел та обрати потрібну дію. Калькулятор все обчисліть за Вас!');
let firstNumber = Number(prompt('Перше число ='));
console.log(firstNumber);
let secondNumber = Number(prompt('Друге число ='));
let mathOperation = Number(prompt('Оберіть номер потрібної дії: 1 - додавання; 2 - віднімання; 3 - множення; 4 - ділення'));
console.log(mathOperation);

switch (mathOperation) {
    case 1:
        let sum = firstNumber+secondNumber;
        alert(`${firstNumber} + ${secondNumber} = ${sum}`);
      break;

    case 2:
        let difference = firstNumber-secondNumber;
        alert(`${firstNumber} - ${secondNumber} = ${difference}`);
      break;

    case 3:
        let division = firstNumber/secondNumber;
        alert(`${firstNumber} / ${secondNumber} = ${division}`);
      break;
    case 4:
        let multiplication = firstNumber*secondNumber;
        alert(`${firstNumber} * ${secondNumber} = ${multiplication}`);
      break;
      
    default:
        alert(`Вибачте, але ця дія не передбачена...`);}