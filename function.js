function myFunction() {
  console.log("Hello JavaScript! This is hosted on github");

  var iframe = document.createElement('iframe');

// Set some properties for the iframe
iframe.src = 'https://www.example.com';
iframe.width = '500';
iframe.height = '300';

// Append the iframe to the body (or any other element)
document.body.appendChild(iframe);
}

myFunction();
