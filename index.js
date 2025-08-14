let pone =document.getElementById("pone");
let bnt =document.getElementById("show");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2"); let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 =document.getElementById("input5");
let input6 =document.getElementById("input6");
let ptwo =document.getElementById("ptwo");

bnt.onclick = function(){
    let sum =((Number(input1.value)*5 + Number(input2.value)*5 + Number(input3.value)*5 + Number(input4.value)*2 + Number(input5.value)*2+ Number(input6.value)*2)/21).toFixed(2);

   if(input1.value<= 100 && input1.value >= 0 && input2.value <= 100 && input2.value >= 0 && input3.value <= 100 && input3.value >= 0 && input4.value <= 100 && input4.value >= 0 && input5.value <= 100 && input5.value >= 0 && input6.value <= 100 && input6.value >= 0){
pone.innerHTML += "Your average is " + sum + " and you are fail";
   }
   else{ pone.innerHTML = "❌Please enter a valid number between 0 and 100";
   }

}
