"use strict";

/* eslint no-console: "off" */
/* eslint no-magic-numbers: "off" */

var account = {
  balance: 0,

  deposit: function (amount) {
    this.balance += amount;
    return amount;
  },

  withdraw: function (amount) {
    if (amount > this.balance) {
      amount = this.balance;
    }

    this.balance -= amount;
    return amount;
  },
};

console.log(account.balance === 0);
console.log(account.deposit(100) === 100);
console.log(account.balance === 100);
console.log(account.withdraw(19) === 19);
console.log(account.balance === 81);
console.log(account.withdraw(91) === 81);
console.log(account.balance === 0);
