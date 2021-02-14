import Account from './Account'


let cid: number, cname: string, cdisc: number, id: number, aid: number, amount: number, balance: number
let account1

document.getElementById('btnSubmit').addEventListener("click", () => {
    cid = parseInt((<HTMLInputElement><unknown>document.getElementById("cid")).value);
    cname = (<HTMLInputElement><unknown>document.getElementById("cname")).value;
    cdisc = parseInt((<HTMLInputElement><unknown>document.getElementById("cdisc")).value);

    id = parseInt((<HTMLInputElement><unknown>document.getElementById("id")).value);
    amount = parseInt((<HTMLInputElement><unknown>document.getElementById("amount")).value);

    aid = parseInt((<HTMLInputElement><unknown>document.getElementById("aid")).value);
    balance = parseInt((<HTMLInputElement><unknown>document.getElementById("balance")).value);

    account1 = new Account(cid, cname, cdisc, id, amount, aid, balance)

    console.log('Account ID ' + account1.getId())
    console.log('Customer ID ' + account1.getCid())
    console.log('Customer Details ' + account1.getCustomer())
    console.log('Balance ' + account1.getBalance())
    console.log('to string data ' + account1.toString())
    console.log('Customer Name ' + account1.getCustomerName())
})

document.getElementById('btnDeposit').addEventListener("click",() =>{
    let depositAmount : number = parseInt((<HTMLInputElement><unknown>document.querySelector('#depositAmount')).value)
    account1.deposit(depositAmount);

    (<HTMLInputElement><unknown>document.querySelector('#finalDepAmount')).value = account1.getBalance()

})

document.getElementById('btnWithdraw').addEventListener("click",() =>{
    let withdrawAmount : number = parseInt((<HTMLInputElement><unknown>document.querySelector('#withdrawAmount')).value)
    account1.withdraw(withdrawAmount);
    
    (<HTMLInputElement><unknown>document.querySelector('#finalWithAmount')).value = account1.getBalance()

})









