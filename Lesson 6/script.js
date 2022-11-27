
// ЗАВДАННЯ 1

const authorization =() =>{
    const getUserName=()=>{
        let isGetUserName = false;
        let userName;
        while(!isGetUserName)
        {
            userName = prompt('Введите Ваше имя:');
           
            if ( !userName  || userName.length === 0 ) {
                    alert('Введите Ваше имя!')
                    continue;
                } else {
                    isGetUserName = true
                }
    
            }
         userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
        return userName;
    }
    const resultUserName = getUserName();
    
    const getUserLastName=()=>{
        let isGetUserLastrName = false;
        let userLastName;
        while(!isGetUserLastrName)
        {
            userLastName = prompt('Введите Вашу фамилию:');
           
            if ( !userLastName || userLastName.length === 0 ) {
                alert('Введите Вашу фамилию!')
                continue;
            } else {
                isGetUserLastrName = true
            }
    
        }
        userLastName = userLastName[0].toUpperCase() + userLastName.slice(1).toLowerCase();
        return userLastName;
    }
    const resultUserLastName = getUserLastName();

    const getUserPassword=()=>{
        let isGetUserPassword = false;
        let userPassword;
        while(!isGetUserPassword)
        {
            userPassword = prompt('Введите Ваш пароль:');
           
            if ( !userPassword || userPassword.length < 6 ) {
                alert('Введите Ваш пароль! \nВалидный пароль - это любая строка длинеее чем 6 символов и содержащая символы разного регистра.')
                continue;
            } else {
                isGetUserPassword = true
            }
    
        }
          
        return userPassword;
    }
    const resultUserPassword =  getUserPassword();
    const checkPassword=(userPassword)=>{
        let number=0;
        let bigLetter=0;
        let smallLetter=0;
        console.log('userPassword', userPassword);
        for (let i=0; i<=userPassword.length-1; i++){
            const simvolPassword = userPassword[i];
            if (!isNaN(simvolPassword)) {number++; 
            } else{
                if (simvolPassword === simvolPassword.toUpperCase()) {bigLetter++; } else {smallLetter++}
            }
        }
        if (bigLetter === 0 || smallLetter === 0 || number === 0) {alert('Пароль не валидный')} else{alert('Добро пожаловать!')}
    
    }
    
    checkPassword(resultUserPassword);
    alert(`Поздравляем! Вы успешно авторизировались! \nВаше имя: ${resultUserName} \nВаша фамилия: ${resultUserLastName} \nВаш пароль: ${resultUserPassword}`);
}

authorization();

// ЗАВДАННЯ 2

function getRandomInteger() {
    const min = Number(prompt ('Введите первое число промежутка'))
    const max = Number(prompt ('Введите второе число промежутка'))
    // получить случайное число от min до max
    const interval = min + (Math.random() * (max+1) - min);
    return Math.floor(interval);
  }
  
  alert( getRandomInteger() );









