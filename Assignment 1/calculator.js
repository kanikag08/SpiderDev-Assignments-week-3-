function calculateResult(){

let name=document.getElementById("studentName").value;

let marks=[];

marks.push(Number(document.getElementById("sub1").value));
marks.push(Number(document.getElementById("sub2").value));
marks.push(Number(document.getElementById("sub3").value));
marks.push(Number(document.getElementById("sub4").value));
marks.push(Number(document.getElementById("sub5").value));

// Validation

for(let i=0;i<marks.length;i++){

if(marks[i]<0 || marks[i]>100 || isNaN(marks[i])){

alert("Marks should be between 0 and 100");

return;

}

}

// Loop for Total

let total=0;

for(let i=0;i<marks.length;i++){

total+=marks[i];

}

let average=total/5;

let percentage=(total/500)*100;

// Highest & Lowest

let highest=marks[0];

let lowest=marks[0];

for(let i=1;i<marks.length;i++){

if(marks[i]>highest){

highest=marks[i];

}

if(marks[i]<lowest){

lowest=marks[i];

}

}

// Grade using if else

let grade="";

if(percentage>=90){

grade="A+";

}

else if(percentage>=80){

grade="A";

}

else if(percentage>=70){

grade="B";

}

else if(percentage>=60){

grade="C";

}

else{

grade="Fail";

}

// Switch Statement

let day=document.getElementById("day").value;

let message="";

switch(day){

case "Monday":
message="New Week, New Goals!";
break;

case "Tuesday":
message="Keep Learning!";
break;

case "Wednesday":
message="Halfway to Success!";
break;

case "Thursday":
message="Stay Consistent!";
break;

case "Friday":
message="Finish Strong!";
break;

case "Saturday":
message="Practice Makes Perfect!";
break;

case "Sunday":
message="Rest and Recharge!";
break;

default:
message="Have a Great Day!";

}

// Display Subject Marks using Loop

let subjectList="";

for(let i=0;i<marks.length;i++){

subjectList+=`Subject ${i+1}: ${marks[i]}<br>`;

}

document.getElementById("result").innerHTML=`

<h2>Result</h2>

<b>Name:</b> ${name}<br><br>

${subjectList}

<b>Total Marks:</b> ${total}<br>

<b>Average:</b> ${average.toFixed(2)}<br>

<b>Percentage:</b> ${percentage.toFixed(2)}%<br>

<b>Grade:</b> ${grade}<br>

<b>Highest Marks:</b> ${highest}<br>

<b>Lowest Marks:</b> ${lowest}<br><br>

<b>Motivational Message:</b><br>

${message}

`;

}