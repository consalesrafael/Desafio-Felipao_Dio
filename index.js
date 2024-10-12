let nomeJogador;
let xpDoJogador;
const mensagem = "Você esta no elo: "
const prompt = require('prompt-sync')();


nomeJogador = prompt("Qual o seu nickname?   ")

do{
xpDoJogador = prompt("Quanto de Xp tem o "+ nomeJogador+"   ");
}while(xpDoJogador < 0)

 if(xpDoJogador <= 1000){
       console.log(mensagem+"ferro" )

}else if(xpDoJogador>=1001 && xpDoJogador <= 2000){
    console.log(mensagem+"Bronze" )

}else if(xpDoJogador>=2001 && xpDoJogador <= 5000){
    console.log(mensagem+"Prata" )

}else if(xpDoJogador>=5001 && xpDoJogador <= 7000){
    console.log(mensagem+"Ouro" )

}else if(xpDoJogador>=7001 && xpDoJogador <= 8000){
    console.log(mensagem+"Platina" )

}else if(xpDoJogador>=8001 && xpDoJogador <= 9000){
    console.log(mensagem+"Ascendente" )

}else if(xpDoJogador>=9001 && xpDoJogador <= 10000){
    console.log(mensagem+"Imortal" )

}else{
    console.log(mensagem+"Radiante" )
}

