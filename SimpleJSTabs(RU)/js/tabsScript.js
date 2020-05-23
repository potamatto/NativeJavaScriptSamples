window.addEventListener('DOMContentLoaded', function () { //событие срабатывает когда загрузилась DOM структура

    'use strict';

    let tabs = document.querySelectorAll('.info-header-tab'), //получение коллекции элементов в виде псевдо-массива !!!для циклов!!!
        tabsParent = document.querySelector('.info-header'), //получение родительского элемента всех табов !!для делегирования!!
        tabsContent = document.querySelectorAll('.info-tabcontent'); //получение коллекции содержимого табов, !!для отображения или скрытия!!

        function hideTabContent(a) { //функция прячет все табы при загрузке страницы, в (а) передается выбранный таргет
            for (let i = a; i < tabs.length; i++) { //проход по всей коллекции элементов
                //этим циклом отрезаются все элементы меньше i и следующие условия применяются к оставшимся
                tabsContent[i].classList.remove('show'); // удаление класса 'show' для текущего элемента
                tabsContent[i].classList.add('hide');  // добавление класса 'hide' для текущего элемента
            }
        }
        
        hideTabContent(1); //скрыть все табы кроме (1)-ой

        function showTabContent(b){
            if (tabsContent[b].classList.contains('hide')) { //если рассматриваемый элемент содержит класс 'hide' то: 
                tabsContent[b].classList.remove('hide'); // удалить класс 'hide'
                tabsContent[b].classList.add('show'); //добавить класс 'show'
            }
        }

        tabsParent.addEventListener('click', function(e) { //прослушивание события в родительской категории 'tabsParent'
            let target = e.target; //присвоение переменной 'target' значения 'event.target' - события на цели
            if (target && target.classList.contains('info-header-tab')){ // если произошло событие 'target' и указанная 'цель'
                                                                         // содержит класс 'info-header-tab', то: 
               for (let i = 0; i < tabs.length; i++){ //для всех табов начиная с выбранного по (i)
                   if (target == tabs[i]) { //если цель - определенный таб (с определенным номером по (i))
                       hideTabContent(0); //скрыть все табы, передав 0 в функцию
                       showTabContent(i); //показать только те табы, на которые был клик по (i)
                       break; //прервать функцию
                   }
               }
           }
        });
}); 

