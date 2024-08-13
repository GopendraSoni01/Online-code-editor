document.getElementById('run-button').addEventListener('click', function() {
    // Get the code from the text areas
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;

    // Create the complete code for the iframe
    const code = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `;

    // Get the iframe and set its content
    const output = document.getElementById('output');
    output.contentDocument.open();
    output.contentDocument.write(code);
    output.contentDocument.close();
});
