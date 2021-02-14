import Invoice from './Invoice'
export default class Account extends Invoice{
    aid : number
    balance : number

    constructor(cid:number,name:string,discount:number,id:number, amount:number,aid : number, balance:number){
        super(cid,name,discount,id, amount)
        this.aid = aid
        this.balance = balance
    }

    getId():number{
        return this.aid
    }

    getCustomer():string{
        return (
            this.cid + ' ' + this.name + ' ' +this.discount
        )
    }

    getBalance():number{
        return this.balance
    }

    setBalance(balance:number):void{
        this.balance = balance
        
    }

    toString():string{
        return this.name+'('+this.cid+')'+' Balance= $ '+this.balance
    }

    getCustomerName():string{
        return this.name
    }

    deposit(amount:number):void{
        this.balance = amount + this.balance

    }

    withdraw(amount:number):string{
        if(this.balance >=  amount){
            this.balance =  this.balance - amount 
            return 'Amount Wihdrawn SuccessFuly'
        }
        else{
            return ' Amount Wihdrawn exceeds the current balance'
        }
    }
}