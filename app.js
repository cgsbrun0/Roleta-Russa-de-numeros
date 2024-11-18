//Alerta ao iniciar a página
alert("Fala, meu nobre. Seja bem vindo ao jogo da roleta russa ");

// seu número está entre
let max = 400;

//gerador de número secreto
let numeroSecreto = parseInt(Math.random() * max + 1);
console.log(numeroSecreto);

//variavel teste de usuarios
let chute ;
// número de tentativas do usuarios
let tentativas = 1;


//enquanto o chute NÃO FOR igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${max}`);
    //variavel de teste entre o chute e o valor do número secreto
    if (numeroSecreto == chute) {
        break;
    } else{
        if(chute > numeroSecreto){
            alert("O número secreto é menor que " + chute +".");
        } else{
            alert("O número secreto é maior que " + chute +".");
        }
        //numero de tentativas
        //tentativas = tentativas +1;
        tentativas ++;
    }
}
if (tentativas > 1){
    alert("Brabo demais. O número secreto é " + numeroSecreto + " mesmo. E você conseguiu com APENAS " + tentativas + " tentativas.");
} else{
    alert("Brabo demais. O número secreto é " + numeroSecreto + " mesmo. E você conseguiu com APENAS " + tentativas + " tentativa.");

}
