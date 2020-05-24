Simple Budget APP at Native JS

first block: 
initialization of variables and assignment of values by random native methods: 
-document.getElementsByID (gets elements from all document by ID and makes collection of that elements)
-document.getElementsByClassName (gets elements from all document by ClassName and makes collection of that elements)
-document.getElementsByTagName (gets elements from all document by TagName and makes collection of that elements)

variables "money", "time" as global variables

event "startChecking" requests date and month budget from user

event "approveExpensesBtn" counts total month expenses

event "approveOptExpensesBtn" count total optional month expenses

event "calculateDayBudgetBtn" calculating per-day budget and shows message about wealth level

event "chooseIncome" checks information from incomeValue variable and shows it if there any

event "checkSavings" checks information from element savings from object "appData" and return boolean true or false

event "choosePercent" calculate sum of incomes and shows it as percents

