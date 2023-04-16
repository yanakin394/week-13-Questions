//### Вопросы 💎

//1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.
/* let date = new Date(2021, 0, 24, 22, 51);
console.log(date); */


//2. Для чего предназначен метод `getDay()`?
     //Чтобы получить информацию о дне даты.


//3. Как посчитать, сколько секунд осталось до завтра?
    let date = new Date();
    function secondsTillTomorrow() {
        return(24 * 60 *60)  - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
    }

    console.log(secondsTillTomorrow());


//4. Для чего предназначен метод `getDate()`?
    // чтобы получить день месяца.


/* 5. Что выведет `console.log(d)` ?
    
    ```jsx
    let d = new Date(2016, 2, 9);
    
    console.log(d); // дату в виде Sun Mar 9 2016 22:51:00 GMT+0300 (GMT+03:00)
    ``` */
            

    
//6. Что делает `getTimezoneOffset()` ?
    // возвращает разницу в минутах между местным часовым поясом и UTC:


/* 7. Что выведет консоль?
    
    ```jsx
    let date = new Date();
    
    console.log(date.getUTCHours()); // вернет часы для временной зоны UTC
    ``` */
    
//8. Для чего предназначен метод `getHours()` объекта Date?
    // чтобы получить информацию о часах текущего часового пояса

/* 9. Что выведет консоль?
    
    ```jsx
    let d = new Date(); 
    let y =  d.getFullYear();
    console.log(y); // выведет текущий год 2023
    ``` */
    
/* 10. В чём ошибка в коде?
    
    ```jsx
    let y = new Date(); 
    let d = y.getDate();
    console.log(d);  // ??????????????????????
    ``` */