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
var Customer_1 = __importDefault(require("./Customer"));
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(cid, name, discount, id, amount) {
        var _this = _super.call(this, cid, name, discount) || this;
        _this.id = id;
        _this.amount = amount;
        return _this;
    }
    Invoice.prototype.getId = function () {
        return this.id;
    };
    Invoice.prototype.getCustomer = function () {
        return (this.cid,
            this.name,
            this.discount);
    };
    Invoice.prototype.setCustomer = function (cid, name, discount) {
        this.cid = cid;
        this.name = name;
        this.discount = discount;
    };
    Invoice.prototype.getAmount = function () {
        return this.amount;
    };
    Invoice.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Invoice.prototype.getCustomerName = function () {
        return this.name;
    };
    Invoice.prototype.getAmountAfterDiscount = function () {
        return this.amount - this.amount * (this.discount / 100);
    };
    return Invoice;
}(Customer_1.default));
exports.default = Invoice;
