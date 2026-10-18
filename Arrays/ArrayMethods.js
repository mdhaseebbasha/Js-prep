 let price=[1000, 444,559,678,999,7777];
 let under = price.filter(price=>price<1000);
let apply=under.map(price=>price*1.01);
let total=apply.reduce((sum,price)=>sum+price,0);
console.log(total);