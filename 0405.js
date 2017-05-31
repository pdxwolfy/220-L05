"use strict";

/* eslint no-console: "off" */
/* eslint no-magic-numbers: "off" */

function makeAccount() {
  return {
    balance:      0,
    transactions: [],

    deposit: function (amount) {
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount: amount });
      return amount;
    },

    withdraw: function (amount) {
      if (amount > this.balance) {
        amount = this.balance;
      }

      this.balance -= amount;
      this.transactions.push({ type: "withdrawal", amount: amount });
      return amount;
    },
  };
}

var account = makeAccount();
console.log(account);
console.log(account.balance === 0);
console.log(account.deposit(100) === 100);
console.log(account.balance === 100);
console.log(account.withdraw(19) === 19);
console.log(account.balance === 81);
console.log(account.withdraw(91) === 81);
console.log(account.balance === 0);
console.log(account);
var otherAccount = makeAccount();
console.log(otherAccount);
console.log(account);
