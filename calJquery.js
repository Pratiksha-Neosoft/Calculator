$(document).ready(function(){
var input_box = $("#calculation");
var historyData = [];
var expressionData = "";
var resultData = "";
$(".design").click(function(){
    if ($("#calculation").val() == "")
    $("#calculation").val($(this).text());
    else
    $("#calculation").val($("#calculation").val() + $(this).text());
    expressionData=$("#calculation").val();
})

// function display(input){
//   var oldinput = input_box.val();
//   var newinput = oldinput + input;
//   expressionData = newinput;
//   input_box.value = newinput;
// }

$(".ans").click(function(){
   var input = $("#calculation").val();
   if(input.includes("^")){
     ind=input.indexOf("^");
     n1=input.slice(0,ind);
     n2=input.slice(ind+1);
     var result = n1**n2;
   }else{
   var result = eval(input);
   }
   historyData.push({ expression: expressionData, result: result });
   var log = $("#history_log");
   var string = "";
   for (var key in historyData) {
     string +=historyData[key]["expression"]+" = "+ historyData[key]["result"] +"<br>";
   }
    log.html(string);
    expressionData = "";
    $("#calculation").val(result);
})
// function CalculateValue() {
//   var input = input_box.val();
//   if(input.includes("^")){
//     ind=input.indexOf("^");
//     n1=input.slice(0,ind);
//     n2=input.slice(ind+1);
//     var result = n1**n2;
//   }else{
//   var result = eval(input);
//   }
//   historyData.push({ expression: expressionData, result: result });
//   showdata();
//   expressionData = "";
//   input_box.value = result;
// }
// function ClearData() {
//   input_box.value = "";
// }
$(".cls").click(function(){
    $("#calculation").val("");
})
// function showdata() {
//   var log = document.getElementById("history_log");
//   var string = "";
//   for (var key in historyData) {
//     string +=historyData[key]["expression"]+" = "+ historyData[key]["result"] +"<br>";
//   }

//   log.innerHTML = string;
// }

});