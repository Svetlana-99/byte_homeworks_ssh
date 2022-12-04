
// ЗАВДАННЯ 1

const getAmountTrue=(arr) =>{
    let counter =0;
for(let key in arr){
    if ( arr[key] === true)  {counter = ++counter}
}
 
    return counter;
}

// Перевірка завдання 1
const countTrue = [true, false, false, true, false];
const resultAmountTrue = getAmountTrue(countTrue);
console.log('resultAmountTrue', resultAmountTrue);

const countTrue1 = [false, false, false, false];
const resultAmountTrue1 = getAmountTrue(countTrue1);
console.log('resultAmountTrue1', resultAmountTrue1);

const countTrue2 = [];
const resultAmountTrue2 = getAmountTrue(countTrue2);
console.log('resultAmountTrue2', resultAmountTrue2);


// ЗАВДАННЯ 2

const getAmountOccurrences = (arr) =>{
   
    let result ={};
    for (let i=0 ; i< arr.length; i++){

        let currentElem = arr[i];
        let countElem = 0;
            for (let string in arr){
                if(currentElem === arr[string]){countElem = ++countElem;
                result[arr[string]] = countElem; 
            } 
        }
    }
return result
}


// Перевірка завдання 2
const getOccurrencesCount = ["a", "v", "a", "b", "b"];
const res1 = getAmountOccurrences(getOccurrencesCount);
console.log('res1', res1);
const getOccurrencesCount2 =[ "apples",  "oranges", "pears", "pears", "apples", "oranges", "oranges", "pears", ];
const res2 = getAmountOccurrences(getOccurrencesCount2);
console.log('res2', res2);







// ЗАВДАННЯ 3
const getOneNumber = (arr) =>{

let count =0;
let result;
let currentResult;

    for(let number in arr){
       
        if ( arr[number]%2 === 0)  {count = ++count; 
            result = arr[number]; 
        } else {currentResult = arr[number]; } 
        
        if(count >=2) {result = currentResult }
        
    }

    return result
}


const findExcess1 =[0, 1, 2]; // -> 1
const findNumber1 = getOneNumber(findExcess1);
console.log('findNumber=', findNumber1)

const findExcess2  = [1, 2, 3]; // -> 2
const findNumber2 = getOneNumber(findExcess2);
console.log('findNumber2=', findNumber2)

const findExcess3 = [2, 6, 8, 10, 3]; // -> 3
const findNumber3 = getOneNumber(findExcess3);
console.log('findNumber3=', findNumber3)

const findExcess4 = [0, 0, 3, 0, 0]; // -> 3
const findNumber4 = getOneNumber(findExcess4);
console.log('findNumber4=', findNumber4);

const findExcess5 = [1, 1, 0, 1, 1]; // -> 0
const findNumber5 = getOneNumber(findExcess5);
console.log('findNumber5=', findNumber5);