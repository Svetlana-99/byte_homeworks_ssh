// // Реализуйте таймер обратного отсчета на JS.

// // При запуске приложения на странице должно находиться 2 кнопки Start и Stop.
// // При нажатии пользователем на кнопку Start, на странице должен появиться таймер обратного отсчета. (Количесво секунд, которые будет "идти" таймер можете спросить у пользователя через инпут, prompt или записать в коде).
// // Длительность таймера обязательно должна быть указана в секундах.
// // Элемент таймера обязательно сожержать часы минуты и секунды. То есть, если пользователь длительность таймера 3600 секунд, изначально на странице должно отобразиться 01:00:00, если 10 секунд, то 00:00:10.
// // Каждую секунду таймер должен уменьшаться на секунду.
// // При нажатии на кнопку Pause таймер должен остановиться, а при повторном нажатии - продолжиться с того же места.
// // По истечению таймера, должна быть возможность обработать возвращенный из функции промис. То есть, при выполнении следующего кода, в консоли через 30 секунд должна появиться строка Timer end!
// // startTimer(30).then(() => {
// //   console.log("Timer end!");
// // });

let timeForTimer;
let intervalId = null;
let pause = false;
let start = false;


function getTimeForTimer(timeForTimer){  
  const seconds = Math.floor( (timeForTimer) % 60 );  
  const minutes = Math.floor( (timeForTimer/60) % 60 );  
  const hours = Math.floor( (timeForTimer/(60*60)) % 24 );  
 
   
  return {  
   timeForTimer,   
   hours,  
   minutes,  
   seconds  
  };  
}

const formatedTime = (item)=>{
  return item < 10 ? `0${item}` : item;
}

const updateClock=(seconde, minute, houre )=>{
  const timeOutput = `${formatedTime(houre)}:${formatedTime(minute)}:${formatedTime(seconde)}`
  timer.innerText = timeOutput;
};

const toggleDisabledBtn =(elem)=>{
  if (elem.hasAttribute('disabled')){
    elem.removeAttribute('disabled');
  }else{
    elem.setAttribute('disabled', '');
  }
  elem.classList.toggle("disabled")
};

const startTimer = () => {
  if (!pause){
    if(!intervalId){
      start = true;
      timeForTimer = Number(prompt('Введите время для таймера обратного отчета'));
      if (timeForTimer === 0) {alert ('Вы не ввели время для секундомера')
        }else{
          const time = getTimeForTimer(timeForTimer);
            return new Promise(function(resolve){
              
              intervalId = setInterval(() => {
                if (!pause){updateClock(time.seconds, time.minutes, time.hours);
                
                if(time.seconds === 0 && time.minutes > 0){
                  time.seconds = 60;
                  time.minutes--
                  }
                if(time.minutes === 0 && time.hours > 0){
                  time.minutes = 60;
                  time.hours--}
                
                if(timeForTimer === 0){
                  start = false;
                  clearInterval(intervalId);
                  setTimeout(() => {
                    resolve(intervalId = null);
                        }, 1000);
                  
                }
                timeForTimer--;
                time.seconds--;}
                }, 1000);
          });
        }
    }
  }
};

const stopTimer =(()=>{ 
  if (!start) {alert('Таймер вимкнений! \n Потрібно натиснути Start та ввести час для таймеру');}
  pause = start ? !pause : pause;
  stopBtn.innerText = pause && start ? 'Continue': 'Stop';
 
});

const startBtn  = document.createElement('button');
const stopBtn  = document.createElement('button');
const timer = document.createElement('div');
startBtn.innerText='Start';
stopBtn.innerText= 'Stop';
startBtn.className ='btn';
stopBtn.className ='btn';
timer.className = 'timer';

document.body.append(startBtn, stopBtn, timer );

startBtn.addEventListener('click',  
()=>{
  toggleDisabledBtn(startBtn);
  startTimer().then(() => {
      console.log("Timer end!");
      alert("Timer end!");
      toggleDisabledBtn(startBtn, start);
    });
  });
stopBtn.addEventListener('click', stopTimer);




  