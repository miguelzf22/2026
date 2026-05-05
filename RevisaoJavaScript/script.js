function validarNumero(){ // Função validar

    // Define as váriveis
    let numero = document.getElementById('numero').value; // Pega o valor do input
    let mensagem = document.getElementById('mensagem');

    // Verifica se o campo está vazio
    if(numero==""){
        mensagem.textContent = "Por favor, insira um número."; // Mostra mensagem
        mensagem.style.color="red"; // Muda cor para vermelho
    } else {

        // Transforma o Input (string) em um valor inteiro
        numero = parseInt(numero);

        // Caso seja maior que 10
        if(numero>10){
            mensagem.textContent = "O número é maior que 10."; 
            mensagem.style.color = "green";
        } else { 

            // Caso seja menor ou igual a 10, mas seja maior que 5
            if(numero>5){
                mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
                mensagem.style.color = "orange";
            } else { // Caso seja menor ou igual a 5
                mensagem.textContent = "O número é 5 ou menor.";
                mensagem.style.color = "blue";
            }
        }
    }
}