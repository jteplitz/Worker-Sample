window.onload = function(){
  // First create the worker
  var myWorker = new Worker("math_worker.js");
  var input : HTMLInputElement = <HTMLInputElement> document.getElementById("mathInput");
  document.getElementById("goButton").addEventListener("click", (e) =>{
    myWorker.postMessage({type: "expression", value: input.value});
  });

  myWorker.onmessage = function(e){
    if (e.data.type === "result"){
      document.getElementById("expressionResult").innerHTML = e.data.value;
    }
  };
};
