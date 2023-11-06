function myFunction() {
  console.log("Hello JavaScript! This is hosted on github");

  var iframe = document.createElement('iframe');

var iframe = document.createElement('iframe');
var html = '<body>Foo</body>';
document.body.appendChild(iframe);
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(html);
iframe.contentWindow.document.close();
}

myFunction();
