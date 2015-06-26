// First create the worker
var myWorker = new Worker("math_worker.js");
var input = document.getElementById("mathInput");
input.addEventListener("click", (e) =>{
  myWorker.postMessage({type: "expression", value: input.nodeValue});
});

myWorker.onmessage = function(e){
  if (e.data.type === "result"){
    document.getElementById("expressionResult").innerHTML = e.data.value;
  }
};
