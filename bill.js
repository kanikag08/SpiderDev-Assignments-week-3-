let products = [];

function addProduct(){

let name=document.getElementById("productName").value;

let quantity=Number(document.getElementById("quantity").value);

let price=Number(document.getElementById("price").value);

if(name=="" || quantity<=0 || price<=0){

alert("Enter valid details");

return;

}

products.push({

name:name,

quantity:quantity,

price:price,

total:quantity*price

});

document.getElementById("productName").value="";
document.getElementById("quantity").value="";
document.getElementById("price").value="";

alert("Product Added Successfully!");

}

function generateBill(){

if(products.length==0){

alert("Add at least one product");

return;

}

let subtotal=0;

let expensive=products[0];

let list="";

for(let i=0;i<products.length;i++){

subtotal+=products[i].total;

list+=`${i+1}. ${products[i].name}
Qty: ${products[i].quantity}
Price: ₹${products[i].price}
Total: ₹${products[i].total}<br><br>`;

if(products[i].price>expensive.price){

expensive=products[i];

}

}

let discount=0;

if(subtotal>=5000){

discount=subtotal*0.20;

}

else if(subtotal>=3000){

discount=subtotal*0.15;

}

else if(subtotal>=1000){

discount=subtotal*0.10;

}

else{

discount=0;

}

let afterDiscount=subtotal-discount;

let gst=afterDiscount*0.18;

let finalBill=afterDiscount+gst;

let payment=document.getElementById("payment").value;

let paymentMsg="";

switch(payment){

case "Cash":

paymentMsg="Cash Payment Selected";

break;

case "UPI":

paymentMsg="UPI Payment Selected";

break;

case "Card":

paymentMsg="Card Payment Selected";

break;

default:

paymentMsg="";

}

document.getElementById("bill").innerHTML=`

<h2>Bill Receipt</h2>

${list}

<b>Subtotal :</b> ₹${subtotal.toFixed(2)}<br>

<b>Discount :</b> ₹${discount.toFixed(2)}<br>

<b>GST (18%) :</b> ₹${gst.toFixed(2)}<br>

<b>Final Bill :</b> ₹${finalBill.toFixed(2)}<br><br>

<b>Most Expensive Product :</b> ${expensive.name}<br><br>

<b>Payment :</b> ${paymentMsg}

`;

}

function resetBill(){

products=[];

document.getElementById("bill").innerHTML="";

alert("Bill Reset Successfully");

}