"use strict";

/* eslint no-console: "off" */
/* eslint no-console: "off" */

var account = {
  balance: 0,

  deposit: function (amount) {
    this.balance += amount;
    return this.balance;
  },
};

console.log(account);
console.log(account.deposit(500));
console.log(account);
console.log(account.deposit(343.23));
console.log(account);
