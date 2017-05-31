"use strict";

/* eslint no-console: "off" */
/* eslint no-magic-numbers: "off" */

function makeBank() {
  var accounts = [];

  function makeAccount(accountId) {
    var balance = 0;
    var transactions = [];

    return {
      balance: function () {
        return balance;
      },

      deposit: function (amount) {
        balance += amount;
        transactions.push({ type: "deposit", amount: amount });
        return amount;
      },

      number: function () {
        return accountId;
      },

      transactions: function () {
        return transactions;
      },

      withdraw: function (amount) {
        if (amount > balance) {
          amount = balance;
        }

        balance -= amount;
        transactions.push({ type: "withdrawal", amount: amount });
        return amount;
      },
    };
  }

  return {
    openAccount: function () {
      var accountId = Object.keys(accounts).length + 101;
      var newAccount = makeAccount(accountId);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer: function(sourceAccount, destinationAccount, amount) {
      return destinationAccount.deposit(sourceAccount.withdraw(amount));
    },
  };
}

var bank = makeBank();
var account1 = bank.openAccount();
var account2 = bank.openAccount();

account1.deposit(500);
account2.deposit(400);
console.log(bank.transfer(account1, account2, 250));
console.log(account1.balance());
console.log(account1.number());
console.log(account1.transactions());
console.log(account2.balance());
console.log(account2.number());
console.log(account2.transactions());
