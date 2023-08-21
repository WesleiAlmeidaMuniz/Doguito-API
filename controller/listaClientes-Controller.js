import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome,email, id) => {

    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
                <td class="td" data-td><a href="../telas/perfil_cliente.html?id=${id}">${nome}</td>
                                <td>${email}</td>
                                <td>
                                    <ul class="tabela__botoes-controle">
                                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                                    </ul>
                                </td>
                                `

    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento) =>{
    let ehbotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'

    if(ehbotaoDeletar){
        try {
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gr6dsozxrxfc/b/site/o/admin/telas/erro.html'
        }
    }
})

const render = async() => {
    try{
        const listaClientes = await clienteService.listaClientes()
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email,elemento.id))
        })
    }
    catch(erro){
        console.log(erro)
        window.location.href = 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/gr6dsozxrxfc/b/site/o/admin/telas/erro.html'
    }

}

render()