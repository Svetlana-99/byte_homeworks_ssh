
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
   

    const getUserPassword=()=>{
    
        let userPassword;
        do{
            userPassword = prompt('Введите Ваш пароль:');
           
            if ( !userPassword || userPassword.length < 6 ) {
                alert('Введите Ваш пароль! \nВалидный пароль - это любая строка длинеее чем 6 символов и содержащая символы разного регистра.')
                } else {
                    if (!isNaN(userPassword) || userPassword.toLowerCase()=== userPassword || userPassword.toUpperCase()===userPassword) {
                        alert('Пароль не коректний')
                    } else{
                            alert('Реєстрація пройшла успішно!') 
                        break
                       }
                
            }
    
        }while(true)
          console.log('userPassword', userPassword)
    
        return userPassword;
    }
    
    const resultUserName = getUserName();
    const resultUserLastName = getUserLastName();
    const resultUserPassword =  getUserPassword();
    
 
    
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









