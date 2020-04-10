'use strict';

let money, time;

function start() {
        money = +prompt ("Ваш бюджет на месяц?", "");
        time = prompt ("Введите дату в формате YYYY-MM-DD", "");

        while(isNaN(money) || money == "" || money == null) {
            money = +prompt ("Ваш бюджет на месяц?", "");
        }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
                console.log ("done");
        
                this.expenses[a] = b;
            } else {                            
                console.log ("bad result");
                i--;
            }
        
        };
    },
    detectDayBudget: function() {
        this.moneyPerDay = (this.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + this.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if (this.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (this.moneyPerDay > 100 && this.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (this.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(this.savings == true) {
            let save = +prompt("Какова сумма накоплений", ""),
                percent = +prompt("Под какой процент", "");
    
                this.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + this.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 4; i++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?', '');
            this.optionalExpenses[1] = questionOptExpenses;
        }
    },
    chooseIncome: function(){
        let items = prompt('что принесет дополнительный доход? (Перечислите через запятую)', '');
        this.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?'));
        appData.income.sort();
    } 
};