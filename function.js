function myFunction() {
  console.log("Hello JavaScript! This is hosted on github");

document.addEventListener("DOMContentLoaded", function() {
  console.log("Window has loaded");
 var para = document.createElement("p");

// Create a text node
var node = document.createTextNode("This is a new paragraph.");

// Append the text node to the paragraph element
para.appendChild(node);

document.body.appendChild(para);

var iframe = document.createElement('iframe');
var html = '<body>Foo</body>';
document.body.appendChild(iframe);
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(html);
iframe.contentWindow.document.close();

console.log("iframe");  
});
}

myFunction();
