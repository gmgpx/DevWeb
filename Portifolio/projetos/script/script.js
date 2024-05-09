function compilador() {

    // Pega os valores de cada textarea's
    var htmlCode = document.getElementById('html').querySelector('textarea').value;
    var cssCode = document.getElementById('css').querySelector('textarea').value;
    var jsCode = document.getElementById('js').querySelector('textarea').value;

    // No elemento resultado insere as variaveis na estrutura html 
    document.getElementById('result').srcdoc = `
        <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
        </html>
    `;
}

// Ao receber uma nova input no textarea executa a função callback compilador
document.querySelectorAll('.editor textarea').forEach(textArea => {
    textArea.addEventListener('input', compilador);
});