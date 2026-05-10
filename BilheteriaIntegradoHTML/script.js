let convidados = [];
function bilheteria_inserir_nome(){
    let nome = document.getElementById("convidado").value;
    if(nome!==""){
        if(convidados.length < 5){
            convidados.push(nome)
        } else {
            document.getElementById("mensagem").textContent = "Lotação esgotada! Máximo de 5 pessoas!"
            document.getElementById("mensagem").style.color = 'orange' 
        }
    } else {
        document.getElementById("mensagem").textContent = "Está vazio! Insira o nome."
        document.getElementById("mensagem").style.color = "red"
    }
}

function bilheteria_inserir_nome_keydown(){
    if(event.key=='Enter'){
        let nome = document.getElementById("convidado").value;
        if(nome!==""){
            if(convidados.length < 5){
                convidados.push(nome)
            } else {
                document.getElementById("mensagem").textContent = "Lotação esgotada! Máximo de 5 pessoas!"
                document.getElementById("mensagem").style.color = 'orange' 
            }
        } else {
            document.getElementById("mensagem").textContent = "Está vazio! Insira o nome."
            document.getElementById("mensagem").style.color = "red"
        }
    }
}

function bilheteria_enviar(){

    let entrada = []
    let i = 0;
    const lista = document.getElementById('lista-de-convidados')
    lista.innerHTML =''
    while (i < 5) {
        console.log("Processando convidado: ", convidados[i]);
        entrada.push(convidados[i])
        if(convidados[i+1]==undefined){
            break
        }
        i++;
    }

    for(let item of entrada){
        let item_li = document.createElement('li')
        item_li.textContent = item
        document.getElementById('lista-de-convidados').appendChild(item_li)
    }
}

function bilheteria_remover(){
    let nome = document.getElementById('convidado').value;
    if(nome!==""){
        let index = convidados.indexOf(nome)
        if(index > -1){
            convidados.splice(index, 1)
        }
            
    } else {
        document.getElementById("mensagem").textContent = "Está vazio! Insira o nome."
        document.getElementById("mensagem").style.color = "red"
    }
}

//createElementdiv-
//receber a lista
//exibir
//clica dnv
//div.innerHTML='';