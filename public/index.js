"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = __importDefault(require("./Account"));
var account1 = new Account_1.default(101, 'Amruta Chaudar', 20, 12345, 10000, 12, 50000);
console.log('Account ID ' + account1.getId());
console.log('Customer Details ' + account1.getCustomer());
console.log('Balance ' + account1.getBalance());
console.log('SetBalance 40000' + account1.setBalance(40000));
console.log('to string data ' + account1.toString());
console.log('Customer Name ' + account1.getCustomerName());
console.log('Deposit 5000 ' + account1.deposit(5000));
console.log('Withdraw 10000 ' + account1.withdraw(10000));
