"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(cid, name, discount) {
        this.cid = cid;
        this.name = name;
        this.discount = discount;
    }
    Customer.prototype.getId = function () {
        return this.cid;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDisount = function (discount) {
        this.discount = discount;
    };
    Customer.prototype.toString = function () {
        return this.name + '(' + this.cid + ')';
    };
    return Customer;
}());
exports.default = Customer;
