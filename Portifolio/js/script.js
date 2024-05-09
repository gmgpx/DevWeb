function select(window) {
    var iframe = document.getElementById(window);
    if (iframe) {
        iframe.scrollIntoView({ behavior: 'smooth', block:'center'});
    }

    var descricao = document.querySelector('.detalhe');
    var descricaoLink = event.target.getAttribute('data-description');
    descricao.textContent = descricaoLink;
}

