export default class Customer{
    cid : number
    name :string
    discount : number

    constructor( cid : number, name :string, discount : number){
        this.cid = cid
        this.name = name
        this.discount = discount
    }

    getCid() : number{
        return this.cid
    }

    getName() : string{
        return this.name
    }

    getDiscount() : number{
        return this.discount
    }
    
    setDisount(discount : number) : void{
        this.discount = discount
    }

    toString():string{
        return this.name+'('+this.cid+')'
    }
}