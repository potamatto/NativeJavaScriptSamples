window.addEventListener('DOMContentLoaded', function () { //событие срабатывает когда загрузилась DOM структура

    'use strict';

    let tabs = document.querySelectorAll('.info-header-tab'), //получение коллекции элементов в виде псевдо-массива !!!для циклов!!!
        tabsParent = document.querySelector('.info-header'), //получение родительского элемента всех табов !!для делегирования!!
        tabsContent = document.querySelectorAll('.info-tabcontent'); //получение коллекции содержимого табов, !!для отображения или скрытия!!

    function hideTabContent(a) { //функция прячет все табы при загрузке страницы, в (а) передается выбранный таргет
        for (let i = a; i < tabs.length; i++) { //проход по всей коллекции элементов
            //этим циклом отрезаются все элементы меньше i и следующие условия применяются к оставшимся
            tabsContent[i].classList.remove('show'); // удаление класса 'show' для текущего элемента
            tabsContent[i].classList.add('hide'); // добавление класса 'hide' для текущего элемента
        }
    }

    hideTabContent(1); //скрыть все табы кроме (1)-ой

    //как аргумент b передаётся индекс (i) из цикла ниже
    function showTabContent(b) {
        if (tabsContent[b].classList.contains('hide')) { //если рассматриваемый элемент содержит класс 'hide' то: 
            tabsContent[b].classList.remove('hide'); // удалить класс 'hide'
            tabsContent[b].classList.add('show'); //добавить класс 'show'
        }
    }

    tabsParent.addEventListener('click', function (event) { //прослушивание события в родительской категории 'tabsParent'
        let target = event.target; //присвоение переменной 'target' значения 'event.target' - события на цели
        if (target && target.classList.contains('info-header-tab')) { // если произошло событие 'target' и указанная 'цель' содержит класс 'info-header-tab', то: 
            for (let i = 0; i < tabs.length; i++) { //для всех табов начиная с выбранного по (i)
                if (target == tabs[i]) { //если цель - определенный таб (с определенным номером по (i))
                    hideTabContent(0); //скрыть все табы, передав 0 в функцию
                    showTabContent(i); //показать только те табы, на которые был клик по (i)
                    break; //прервать функцию
                }
            }
        }
    });

    //Таймер на странице
    let deadline = '2020-05-25'; //Установка конечной даты

    //Функция считающая оставшееся количество времени до установленной конечной даты
    function getTimeRemains(timeOfDeadLine) { //в качестве аргумента передается deadline
        let millisecondsToGo = Date.parse(timeOfDeadLine) - Date.parse(new Date());  // От даты дедлайна отнимаем текущее время
        let seconds = Math.floor((millisecondsToGo / 1000) % 60);  // получаем секунды от миллисекунд при помощи остатка от деления
        let minutes = Math.floor((millisecondsToGo / 1000 / 60) % 60);  // получаем минуты от миллисекунд при помощи остатка от деления
        let hours = Math.floor((millisecondsToGo / 1000 / 60 / 60) % 24);  //получаем часы от миллисекунд
        let days = Math.floor(millisecondsToGo / (1000 * 60 * 60 * 24));  //получаем количество дней

        //Возврат вычисленных значений от функции getTimeRemains
        return {
            'millisecondsToGo': millisecondsToGo,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    }
    //Установка таймера
    function setTimer(id, timeOfDeadLine) {
        let timer = document.getElementById(id), //получаем id переданный при вызове функции setTimer, в данном случае "timer"
            days = timer.querySelector('.days'), //получение дней из timer
            hours = timer.querySelector('.hours'), //получение часов из timer
            minutes = timer.querySelector('.minutes'), //получение минут из timer
            seconds = timer.querySelector('.seconds'); //получение секунд из timer
            timeInterval = setInterval(updateTimer, 1000); //вызов функции updateTimer каждую секунду

        function updateTimer() {
            let setCurrentTime = getTimeRemains(timeOfDeadLine);
             //вызов функции показывающей остаток времени НА ТЕКУЩИЙ МОМЕНТ (на время вызова)
            if (setCurrentTime.days < 10) {
                days.textContent = '0' + setCurrentTime.days;
            } else {
                days.textContent = setCurrentTime.days;
            }

            if (setCurrentTime.hours < 10) {
                hours.textContent = '0' + setCurrentTime.hours;
            } else {
                hours.textContent = setCurrentTime.hours;
            }

            if (setCurrentTime.minutes < 10) {
                minutes.textContent = '0' + setCurrentTime.minutes;
            } else {
                minutes.textContent = setCurrentTime.minutes;
            }

            if (setCurrentTime.seconds < 10) {
                seconds.textContent = '0' + setCurrentTime.seconds;
            } else {
                seconds.textContent = setCurrentTime.seconds;
            }

            if (setCurrentTime.millisecondsToGo <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }

    }

    setTimer('timer', deadline);
});