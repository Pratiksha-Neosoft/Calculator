var input_box = document.getElementById("calculation");
var historyData = [];
var expressionData = "";
var resultData = "";


function display(input) {
  var oldinput = input_box.value;
  var newinput = oldinput + input;
  expressionData = newinput;
  input_box.value = newinput;
}
function CalculateValue() {
  var input = input_box.value;
  if(input.includes("^")){
    ind=input.indexOf("^");
    n1=input.slice(0,ind);
    n2=input.slice(ind+1);
    var result = n1**n2;
  }else{
  var result = eval(input);
  }
  historyData.push({ expression: expressionData, result: result });
  showdata();
  expressionData = "";
  input_box.value = result;
}
function ClearData() {
  input_box.value = "";
}

function showdata() {
  var log = document.getElementById("history_log");
  var string = "";
  for (var key in historyData) {
    string +=historyData[key]["expression"]+" = "+ historyData[key]["result"] +"<br>";
  }

  log.innerHTML = string;
}
