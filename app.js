    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas =1;

    function exibirTextoNaTela(tag , texto) {
        let campo = document.querySelector (tag);
        campo.innerHTML = texto ;
    }
    function exibirMensagemInicial(){
        exibirTextoNaTela("h1" , "Jogo Do Numero Secreto");
        exibirTextoNaTela("p" ,"Escolha um numero entre 1 e 100");
    }
    exibirMensagemInicial();
    function verificarChute(){
        let chute = document.querySelector ("input").value ;

        if (chute < 1 || chute > 100) {
        exibirTextoNaTela("p", "Por favor, digite um número entre 1 e 100.");
        limparCampo();
        return; // Sai da função se o valor estiver fora do intervalo
    }


    if (chute == numeroSecreto) {
         exibirTextoNaTela ("h1" ,"Acertou!");
         let palavraTentativa =tentativas >1 ? "tentativas"  : "tentiva";
         let mensagemTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela ("p",mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute("disabled");

    } else {
         if (chute > numeroSecreto) {
            exibirTextoNaTela ("p","o chute e maior que o numero secreto.");

         }else {
            exibirTextoNaTela ("p","o chute e menor que o numero secreto.");
            
        }
        tentativas ++ 
        limparCampo();
}
    }
    // functio para gerar numero automatico
    function gerarNumeroAleatorio(){
        return parseInt(Math.random()*100 + 1);   
    }
        function limparCampo(){
            chute= document.querySelector("input");
            chute.value= ``;
        } 
        function reiniciarJogo(){
            numeroSecreto=gerarNumeroAleatorio();
            limparCampo();
            tentativas =1;
            exibirMensagemInicial();
            document.getElementById("reiniciar").setAttribute("disabled",true);

        }
   
    
