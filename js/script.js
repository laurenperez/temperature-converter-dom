
var radioF = document.getElementById('F');
var radioC = document.getElementById('C');
var outputTemp = document.getElementById("convertedTemp");
var data = document.getElementById('startTemp')
var convertedF;
var convertedC;
var data;

document.getElementById('submit').onclick = function(){
  console.log(data.value);
  switch(true){
    case radioF.checked === true:
    convertedF = Math.floor((data.value-32)*5/9) + "° C";
    outputTemp.textContent = convertedF;
    break;
    case radioC.checked === true:
    convertedC = Math.floor((data.value*9/5)+32) + "° F";
    outputTemp.textContent = convertedC;
    break;
  };
};

document.getElementById('clear').onclick = function(){
  outputTemp.textContent = '';
  data.value = '';
  radioF.checked = false;
  radioC.checked = false;
}
