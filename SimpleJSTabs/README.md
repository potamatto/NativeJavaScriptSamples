windows.addEventListener - enables script only when DOM is fully loaded

variables:
"tabs" gets all elements with class ".info-header-tab" and keeps it as collection
"tabsParent" gets parent element of "tabs"
"tabsContent" gets all elements with class ".info-tabcontent" and keeps it as collection


function hideTabContent() - hides all tabs at page loading, if any element of collection "tabsContent" have class "show" it changes that class to "hide". Only first tab is shown by default when the page is loaded (hideTabContent(1)).

function showTabContent() - shows tab content by the changing of class "hide" to class "show" of current element

event "tabsParent" launches function (function(e)) where target is e.target.
If there is target (place where user was clicked) and target class list contains class "info-header-tab", this function gets index (i) from all "tabs" collection and changing class to "show" from "hide" for element with i-index, then breaks


//Timer Function

At first there is 'deadline' variable with random date

function getTimerRemains(timeOfDeadLine) gets deadline data, calculate difference between deadline date and current date and return it as milliseconds at millisecondsToGo variable.
It also calculates seconds, minutes, hours and days until the deadline and return them as object: 

  return {
            'millisecondsToGo': millisecondsToGo,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };

function setTimer(id, timeOfDeadLine) get 2 params - id of block, where it should set new date and 'deadline' variable data.
variable 'timer' gets element from DOM with id = 'timer'
variable 'days' gets element from DOM with class '.days'
variable 'hours' gets element from DOM with class '.hours'
variable 'minutes' gets element from DOM with class '.minutes'
variable 'seconds' gets element from DOM with class '.seconds'

variable 'timeInterval' calls setInterval function with 'updateTimer' function and delay 1000 ms.

function 'updateTimer': 
1. calls function 'setCurrentTime', that gets NEW values of date that remains until deadline, 
2. gets all data from object returned by 'getTimeRemains' function,
3. checks value of every key of returned object and set new values for every object key,
4. if there is 0 or less milliseconds remains it sets 00 to every DOM class (days, hours, minutes and seconds) and calls 'clearInterval' function which stops 'updateTime'.

setTimer -> updateTimer (every 1 second) -> getTimeRemains -> set new values at HTML