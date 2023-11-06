function myFunction() {
  console.log("Hello JavaScript! This is hosted on github");

window.onload = function() {
  console.log("Window has loaded");
 var para = document.createElement("p");

// Create a text node
var node = document.createTextNode("This is a new paragraph.");

// Append the text node to the paragraph element
para.appendChild(node);

document.body.appendChild(para);
}
}

myFunction();
