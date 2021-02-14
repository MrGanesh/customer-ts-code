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

    account1 = new Account(cid, cname, cdisc, id, amount, aid, balance);

    (<HTMLParagraphElement>document.querySelector('#custName')).innerHTML =  "Customer Name : "+account1.getCustomerName();
    (<HTMLParagraphElement>document.querySelector('#accountId')).innerHTML = 'Account ID : ' + account1.getId();
    (<HTMLParagraphElement>document.querySelector('#custId')).innerHTML = 'Customer ID : ' + account1.getCid();
    (<HTMLParagraphElement>document.querySelector('#custDetails')).innerHTML ='Customer Details : ' + account1.getCustomer();  
    (<HTMLParagraphElement>document.querySelector('#balDetails')).innerHTML = 'Balance : ' + account1.getBalance();
    (<HTMLParagraphElement>document.querySelector('#custId')).innerHTML = 'Customer ID : ' + account1.getCid();
    (<HTMLParagraphElement>document.querySelector('#toString')).innerHTML ='To string data : ' + account1.toString();  
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









