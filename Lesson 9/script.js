
// ЗАВДАННЯ 1

const getArrayСonversion = (arr) =>{
    
   return result = arr.map((currentValue) => currentValue > 0
)
  
   
}

// Перевірка завдання 1.1
console.log('Перевірка завдання 1.1:')
const numberArray = [1, 2, -10, -2, 7];
console.log('numberArray', numberArray)
const resultArrayСonversion = getArrayСonversion(numberArray);
console.log('resultArrayСonversion', resultArrayСonversion);

const numberArray2 = [1, 2, -10, -2, 7, -6, 16];
console.log('numberArray2', numberArray2)
const resultArrayСonversion2 = getArrayСonversion(numberArray2);
console.log('resultArrayСonversion2', resultArrayСonversion2);



// ЗАВДАННЯ 1.2
const getArrayOfUsers = (arr) =>{
   
    const ADMIN = 'admin';
   return result = (arr
    .map((currentValue) =>  { 
    if (currentValue.age >18 && currentValue.role === ADMIN){
        return currentValue.name;
    }
   } 
    ))
    .filter((currentValue)=> currentValue)

}



// Перевірка завдання 1.2
console.log('Перевірка завдання 1.2:')
const users = [
    {
    name: 'Sam',
    role: 'admin',
    age: 25,
    },
    {
    name: 'Peter',
    role: 'admin',
    age: 16,
    },
    {
    name: 'Pablo',
    role: 'admin',
    age: 32,
    },
    {
    name: 'Enrico',
    role: 'client',
    age: 43,
    },
    { name: 'Mary',
    role: 'client',
    age: 34,
    },
    {
    name: 'Katerine',
    role: 'guest',
    age: 17,
    },
    ]
const res1 = getArrayOfUsers(users);
console.log('res1', res1);




// ЗАВДАННЯ 1.3

const getAverage = (arr) =>{

    let acc;
    let result = arr.reduce((acc, value) =>{
        acc +=  value; 
        return acc;
    }, 0)
   
   return (result/arr.length).toFixed(2)
}

// Перевірка завдання 1.3
console.log('Перевірка завдання 1.3:')
const numbers = [1, 10, 17, 24, 45]
const resAverage = getAverage(numbers);
console.log('resAverage=', resAverage)






// Завдання 2
const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
    console.log(`In array [${array}] on position ${index}: ${element}`)};


const myMapIsNegative = (arr, func) => {
   
    let result = arr.concat([]);
    for (let i=0; i<arr.length; i++){
        let curentResult = isNegative(arr[i]);
        result.splice(i, 1, curentResult);   
    }
    return result
}

const myMapIncrement = (arr, func) => {
    
    let result = arr.concat([]);
    for (let i=0; i<arr.length; i++){
        let curentResult = increment(arr[i]);
       
        result.splice(i, 1, curentResult);   
    }
    return result
}



const myForEachIsNegative =  (arr, func) => {
   
    let result = arr.concat([]);
    for (let key in arr){
        
        let curentResult = isNegative(arr[key]);
        result.splice(key, 1, curentResult);   
    }
    return result
}

const myForEachIncrement =  (arr, func) => {
   
    let result = arr.concat([]);
    for (let key in arr){
        let curentResult = increment(arr[key]);
        result.splice(key, 1, curentResult);   
    }
    return result
}

    
const myForEachLogger = (arr, func) => {
    
    for (let i=0; i<arr.length; i++){
      (logger(arr[i], i, arr));   
        continue;
    }
}

const myForFilterIsNegative =  (arr, func) => {
    console.log('arr', arr);
    let result = [];
    
    for (let key in arr){
       
        if (isNegative(arr[key]))
          result.push(arr[key]);  
          
    }
    return result
}



console.log('Перевірка завдання 2:')
const number = [1, 2, -10, -2, 7];

const resMyForEachIsNegative = myMapIsNegative(number, isNegative);
console.log('resMyForEachIsNegative', resMyForEachIsNegative);

const resMyMapIncrement = myMapIncrement(number, increment);
console.log('resMyMapIncrement', resMyMapIncrement);

const resMyForEachLogger = myForEachLogger(number, logger);
//console.log('resMyMapLogger', resMyMapLogger);

const resMyMapisNegative = myForEachIsNegative(number, isNegative);
console.log('resMyMapisNegative', resMyMapisNegative);

const resMyForEachIncrement = myForEachIncrement(number, increment);
console.log('resMyForEachIncrement', resMyForEachIncrement);

const resMyForFilterisNegative = myForFilterIsNegative(number, isNegative);
console.log('resMyForFilterisNegative', resMyForFilterisNegative);


// Завдання 3

  const data = [
    {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
    },
    {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
    },
    {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
    },
    {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
    },
    {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
    },
    {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
    },
    {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
    },
    {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
    },
    ];
    const filterData1=(data, { age: 23 });
    
    const filterData2 = (data, { age: 24 });
   
   
    const getFilterData =(arr, filterData)=>{
        console.log('arr', arr);
        console.log('filterData', filterData)
       
        for (let item in filterData){
           let result =[];
            for (let key in arr ){
               
               if(filterData[item] === arr[key][item]){
                result.push(arr[key]) ;
               } 
            }
         return result
        }
   
        return result
    }

    console.log('Перевірка завдання 3:')

    const resFilterData1 = getFilterData(data, filterData1);
    console.log('resFilterData1', resFilterData1);
    const resFilterData2 = getFilterData(data, filterData2);
    console.log('resFilterData2', resFilterData2);

