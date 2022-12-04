
// ЗАВДАННЯ 1
function clientShedule() {
   
    const shedule = {};
    let endEnter = true;
    while(endEnter){
        
        let time = prompt('Введите время задачи');
        let task = prompt('Введите задачу');

        if (time == null || task == null) {
            endEnter = false;
            alert ('К сожалению, задача не добавлена')
        } else {
            shedule[time] = task;

           alert ('Задача добавлена')
           endEnter = confirm ('Если хотите добавить следующую задачу, нажмите ОК \nНе хотите? Нажмите ОТМЕНА')
           
           console.log('endEnter', endEnter)
        }

    }
    return shedule;
}

// Перевірка завдання 1
const sheduleResult = clientShedule();
console.log('Ваше расписание задач:', sheduleResult)



// ЗАВДАННЯ 2
const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
    };
   
function sumSalaries(salaries){
   let sum = 0;
   
    for(key in salaries){
        sum = sum + Number(salaries[key])
       
    }
    return sum.toFixed(2);
}


// Перевірка завдання 2
const resultSum = sumSalaries(salaries);
console.log('resultSum', resultSum);






