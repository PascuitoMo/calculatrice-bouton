//ecrire dans la calculatrice
let input = "";
    function ShowValue(btn){  
    input += btn.value;
 
      console.log(input);
      document.getElementById("output").innerHTML = input;
    }
//Faire le calcul et envoyer dans calculatrice
function calculatrice(){
  console.log(eval(input));
       document.getElementById("output").innerHTML = eval(input);
}
//remise a zero
function Reset(btn){
   document.getElementById("output").innerHTML = "0";
  input = "";
}
//effacer un element
function rem1(btn){
input= input.replace(input.slice(-1), "");
    console.log(input);
 document.getElementById("output").innerHTML = input;
}
