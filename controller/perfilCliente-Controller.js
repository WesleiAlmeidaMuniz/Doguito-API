import { clienteService } from "../service/cliente-service.js"

( async () =>{
    const pegaUrl = new URL(window.location)
    const id = pegaUrl.searchParams.get('id')
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')
    const inputIdade = document.querySelector('[data-idade]')
    const inputNum = document.querySelector('[data-num]')
    const inputAndress = document.querySelector('[data-andress]')
    const inputAnimal = document.querySelector('[data-animais]')


    try{
        const dados = await clienteService.detalhaCliente(id)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
        inputIdade.value = dados.idade
        inputNum.value = dados.numerodetelefone
        inputAndress.value = dados.endereço
        inputAnimal.value = dados.animais
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
}) ()