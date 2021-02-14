import Customer from './Customer'

export default class Invoice extends Customer{
    id : number
    amount : number


    constructor(cid:number,name:string,discount:number,id:number, amount:number){
        super(cid,name,discount)
        this.id = id
        this.amount = amount
    }

    getId(){
        return this.id
    }
    // getCustomer(){
    //   return (
    //       this.cid,
    //       this.name,
    //       this.discount
    //   )
    // }

    setCustomer(cid:number, name:string,discount:number):void{
        this.cid =cid
        this.name = name
        this.discount = discount
    }

    getAmount():number{
        return this.amount
    }

    setAmount(amount:number):void{
        this.amount = amount
    }

    getCustomerName():string{
        return this.name
    }

    getAmountAfterDiscount():number{
        return this.amount -  this.amount * (this.discount / 100)

    }

}