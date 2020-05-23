windows.addEventListener - enables script only when DOM is fully loaded

variables:
"tabs" gets all elements with class ".info-header-tab" and keeps it as collection
"tabsParent" get parent element of "tabs"
"tabsContent" get all elements with class ".info-tabcontent" and keeps it as collection


function hideTabContent() - hides all tabs at page loading, if any element of collection "tabsContent" have class "show" it changes that class to "hide". Only first tab is shown by default when the page is loaded (hideTabContent(1)).

function showTabContent() - shows tab content by the changing of class "hide" to class "show" of current element

event "tabsParent" launches function (function(e)) where target is e.target.
If there is target (place where user was clicked) and target class list contains class "info-header-tab", this function gets index (i) from all "tabs" collection and changing class to "show" from "hide" for element with i-index, then breaks