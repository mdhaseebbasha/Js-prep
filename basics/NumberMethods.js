let Price=145;
let discount=50;
let Quantity=2;
let amount=(Price*Quantity)-discount;
console.log(amount.toLocaleString("en-IN",{
    style:"currency",
    currency:"AUD"
})
);
// Math.min(), Math.max(), floor(),ceil() precision(), t