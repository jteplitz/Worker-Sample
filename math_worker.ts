/*global Parser*/
importScripts("parser.js");
onmessage = function(e){
  if (e.data.type === "expression"){
    var result = Parser.parse(e.data.value).evaluate({});
    postMessage({type: "result", value: result}, null);
  }
}
