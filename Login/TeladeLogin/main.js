//Aprender a manipular o DOM
//Definir qual elemento vou manipular
//Localizando por id(#id) ou classe(.classe)

//Pegar um elemento html
const usuario = document.getElementById('usuario').value;
const senha = document.querySelector('#senha');
const botao = document.querySelector('#enviar');

botao.addEventListener('click', ()=>{
    const usuario = document.getElementById('usuario').value;
    const senha = document.querySelector('#senha');
})

console.log(senha);

const tema = document.getElementById(divLogin)
const mudaTema = document.querySelector('BotaoNoturno')

mudaTema.addEventListener('click', ()=>{
    tema.classList.remove("Login");
    tema.classList.add('LoginNoturno');
})