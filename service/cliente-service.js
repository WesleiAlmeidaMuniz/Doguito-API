const BASE_PATH = 'https://168.75.108.77/clientes'

const listaClientes = () => {
    return fetch(`${BASE_PATH}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }

        throw new Error('Não foi possível listar os clientes')

    })
}

const criaCliente = (nome,email,idade,num,andress,animais) =>{
    return fetch(`${BASE_PATH}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            idade: idade,
            numerodetelefone: num,
            endereço: andress,
            animais: animais
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) =>{
    return fetch(`${BASE_PATH}/${id}`,{
        method:'DELETE'
    }).then(reposta => {
        if(!reposta.ok){
            throw new Error('Não foi possível remover o cliente')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`${BASE_PATH}/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`${BASE_PATH}/${id}`, {
        method:'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar o cliente')
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}