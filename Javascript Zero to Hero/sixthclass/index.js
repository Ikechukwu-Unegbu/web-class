// INTRODUCING OOP- OBJECT ORIENTED PROGRAMMING

let motor = {
  weight:this.weight,
  fuel:this.fuel,
  wheel:this.wheel,
  tyres:this.tyres,
  gear:this.gear,
  drive:this.drive
}

let sedan =  motor;
sedan.weight = '2000kg';
sedan.fuel = '2gallons/mile';
sedan.bootType = 'curved inwards';

let transaction  = {
  amount:undefined,
  sender:undefined,
  reciever:null,
  time:null,
  trxID:null,
  idGen:function(){
    // id generator
    return '8488484949jdjj';
  }
}

let transfer = transaction;
transfer.amount = 2000;
transfer.reciever = 2083704444;
transfer.transferHandler = function(__amount, __accountBal){
    let id = this.idGen();
    console.log(`${__amount}`,`${__accountBal}`, id)
} 

transfer.transferHandler(transfer.amount, transfer.reciever);

let electricityBill = transaction;




console.log(sedan);