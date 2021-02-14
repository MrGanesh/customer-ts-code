"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Invoice_1 = __importDefault(require("./Invoice"));
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(cid, name, discount, id, amount, aid, balance) {
        var _this = _super.call(this, cid, name, discount, id, amount) || this;
        _this.aid = aid;
        _this.balance = balance;
        return _this;
    }
    Account.prototype.getId = function () {
        return this.aid;
    };
    Account.prototype.getCustomer = function () {
        return (this.cid,
            this.name,
            this.discount);
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    Account.prototype.toString = function () {
        return this.name + '(' + this.cid + ')' + ' Balance= $' + this.balance;
    };
    Account.prototype.getCustomerName = function () {
        return this.name;
    };
    Account.prototype.deposit = function (amount) {
        this.balance = amount + this.balance;
    };
    Account.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance = this.balance - amount;
            return 'Amount Wihdrawn SuccessFuly';
        }
        else {
            return ' Amount Wihdrawn exceeds the current balance';
        }
    };
    return Account;
}(Invoice_1.default));
exports.default = Account;
