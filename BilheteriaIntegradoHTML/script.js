let convidados = [];

// Executa a função bilheteria_inserir_nome() caso o usuário aperte Enter no Input
document.getElementById('convidado').addEventListener('keydown', function(e){
    if(e.key=='Enter'){
        bilheteria_inserir_nome()
    }
})

function bilheteria_enviar(){

    const lista = document.getElementById('lista-de-convidados')
    lista.innerHTML = '' // Limpa a lista, para depois atualizá-la

    for(let item of convidados){
        // Para cada iteração, cria um <li> com o nome do convidado
        let item_li = document.createElement('li') 
        item_li.textContent = item
        document.getElementById('lista-de-convidados').appendChild(item_li)
    }
}

function bilheteria_inserir_nome(){
    let nome = document.getElementById("convidado").value; // Pega o valor do input
    if(nome!==""){
        if(convidados.length < 5){
            convidados.push(nome) // Coloca na lista
            document.getElementById("mensagem").textContent = `Convidado ${nome} adicionado a Lista!`
            document.getElementById("mensagem").style.color = 'green'
            document.getElementById("convidado").value = '' // Reseta o Input
            bilheteria_enviar() // Atualiza a lista
        } else { // Caso o limite da lista tenha sido atingido
            document.getElementById("mensagem").textContent = "Lotação esgotada! Máximo de 5 pessoas!"
            document.getElementById("mensagem").style.color = 'orange'
            document.getElementById("convidado").value = ''
        }
    } else { // Caso o input esteja vazio
        document.getElementById("mensagem").textContent = "Está vazio! Insira o nome."
        document.getElementById("mensagem").style.color = "red"
    }
}

function bilheteria_remover(){
    let nome = document.getElementById('convidado').value;
    if(nome!==""){
        let index = convidados.indexOf(nome) // Pega o index do nome na lista de convidados
        if(index > -1){ // Caso o index seja maior que -1, ou seja, caso o nome exista na lista
            convidados.splice(index, 1) // Remove o index da lista convidado
            document.getElementById("mensagem").textContent = `Convidado ${nome} removido da Lista!`
            document.getElementById("mensagem").style.color = 'black'
            document.getElementById("convidado").value = '' // Reseta o valor do input
            bilheteria_enviar() // Atualiza a lista
        } else { // Caso o nome não seja encontrado
            document.getElementById("mensagem").textContent = `Nome não encontrado na lista.`
            document.getElementById("mensagem").style.color = 'orange'
        }
            
    } else {
        document.getElementById("mensagem").textContent = "Está vazio! Insira o nome."
        document.getElementById("mensagem").style.color = "red"
    }
}