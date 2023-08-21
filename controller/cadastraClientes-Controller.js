import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault()

    try{
        const nome = evento.target.querySelector('[data-nome]').value
        const email = evento.target.querySelector('[data-email]').value
        const idade = evento.target.querySelector('[data-idade]').value
        const num = evento.target.querySelector('[data-num]').value
        const andress = evento.target.querySelector('[data-andress]').value
        const animais = evento.target.querySelector('[data-animais]').value

        await clienteService.criaCliente(nome, email, idade, num, andress, animais)
        window.location.href = '../telas/cadastro_concluido.html'
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
})