let startChecking = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    approveExpensesBtn = document.getElementsByTagName('button')[0],
    approveOptExpensesBtn = document.getElementsByTagName('button')[1],
    calculateDayBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesField = document.querySelectorAll('.optionalexpenses-item'),

    countBudget = document.querySelector('.count-budget'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),

    yearInfo = document.querySelector('.year-value'),
    monthInfo = document.querySelector('.month-value'),
    dayInfo = document.querySelector('.day-value');

let money, time; //переменные в глобальной зоне видимости

startChecking.addEventListener('click', function () {
    time = prompt("Введите дату в формате: YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearInfo.value = new Date(Date.parse(time)).getFullYear();
    monthInfo.value = new Date(Date.parse(time)).getMonth() + 1;
    dayInfo.value = new Date(Date.parse(time)).getDate();

    approveExpensesBtn.addEventListener('click', function () {
        let sumOfExpenses = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value, //название статьи расхода
                b = expensesItem[++i].value;
            if (typeof (a) != null && typeof (b) != null && a != '' && b != '') {
                appData.expenses[a] = b; //запись в глобальный объект appdata в объект expenses
                sumOfExpenses += +b;
            } else {
                i--;
            }
        }
        expensesValue.textContent = sumOfExpenses;
    });

    approveOptExpensesBtn.addEventListener('click', function () {
        for (let i = 0; i < optionalExpensesField.length; i++) {
            let optionalExpense = optionalExpensesField[i].value;
            appData.optionalExpenses[i] = optionalExpense;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }

    });

    calculateDayBudgetBtn.addEventListener('click', function () {

        if (appData.budget != undefined) {
            console.log(appData.expenses);
            appData.moneyPerDay = ((appData.budget - +expensesValue.innerText) / 30).toFixed(); //метод округляет до ближайшего целого
            dayBudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay <= 100) {
                levelValue.textContent = 'Низкий уровень достатка!';
            } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
                levelValue.textContent = 'Средний уровень достатка!';
            } else if (appData.moneyPerDay >= 2000) {
                levelValue.textContent = 'Высокий уровень достатка!';
            } else {
                levelValue.textContent = 'Ошибка введенных данных!';
            }
        } else {
            dayBudgetValue.textContent = 'Нажмите кнопку "Начать расчет"'
        }
    });

    chooseIncome.addEventListener('input', function () {
        let items = chooseIncome.value;
        if (typeof (items) == 'string' && typeof (items) != null && items != "") {
            incomeValue.textContent = items;
        } else {
            incomeValue.textContent = "Нет дополнительных доходов";
        }
    });

    checkSavings.addEventListener('click', function () {
        if (appData.savings == false) {
            appData.savings = true;
        } else {
            appData.savings = false;
        }
    });


    choosePercent.addEventListener('input', function () {
        if (appData.savings == true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });


});

//объект "appData"
let appData = {
    budget: money, //из вопроса пользователю
    timeData: time, //из вопроса пользователю
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};