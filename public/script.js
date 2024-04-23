const botao = document.querySelector('#enviar')
const mensagem = document.querySelector('#texto')
const socket = io()
const chatBox = document.querySelector('#mensagens')


botao.addEventListener('click', ()=> {
    if(mensagem.value !== ''){
        socket.emit('nova mensagem', mensagem.value)
        mensagem.value = ''
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li')
    elementoMensagem.textContent = msg
    elementoMensagem.classList.add('mensagem')
    chatBox.appendChild(elementoMensagem)
})