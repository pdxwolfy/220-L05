"use strict";

/* eslint no-console: "off" */
/* eslint no-magic-numbers: "off" */

function makeBank() {
  return {
    accounts: [],

    openAccount: function () {
      var accountId = Object.keys(this.accounts).length + 101;
      var newAccount = makeAccount(accountId);
      this.accounts.push(newAccount);
      return newAccount;
    },

    transfer: function(sourceAccount, destinationAccount, amount) {
      return destinationAccount.deposit(sourceAccount.withdraw(amount));
    },
  };
}

function makeAccount(accountId) {
  return {
    balance:      0,
    accountId:    accountId,
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

var bank = makeBank();
var account1 = bank.openAccount();
var account2 = bank.openAccount();

account1.deposit(500);
account2.deposit(400);
console.log(bank.transfer(account1, account2, 250));
console.log(account1);
console.log(account2);
