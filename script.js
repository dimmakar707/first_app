let money = +prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let expensesKey = prompt('Введите обязательную статью расходов в этом месяце', '');
let expensesValue = prompt('Во сколько обойдется?', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expensesKey : expensesValue
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

alert('Ваш бюджет на 1 день: ' + (money/30).toFixed(2));