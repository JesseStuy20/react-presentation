function iframeEditor() {
  console.log("bruh");
  text = document.getElementById('t-area').value;
  iframe = document.getElementById('if');
  iframe.setAttribute("srcdoc", `
  <!DOCTYPE html>
  <html>
    <head>
      <title> React Demo </title>
      <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

      <!-- Don't use this in production: -->
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    </head>
    <body style='color:white;'>
      <div id="root"></div>
      <p id="error"> </p>
      <script type="text/babel">try{`+text+`} catch(error){document.getElementById('error').innerHTML=error;}</script>
    </body>
  </html>
      `
);
}
