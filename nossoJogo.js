/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//INICIO
alert ("Boas Vindas ao jogo de Blck Jack!")
var nome = prompt('Qual o seu nome ?')
var inicio = confirm('Ola, ' + nome + '! Vamos jogar uma partida?')

if(inicio){
   var cartaJogador1 = comprarCarta()
   var cartaJogador2 = comprarCarta()
   var cartaBanca1 = comprarCarta()
   var cartaBanca2 = comprarCarta()
   var pontosJogador = cartaJogador1.valor + cartaJogador2.valor 
   var pontosBanca = cartaBanca1.valor + cartaBanca2.valor 

   console.log(`${nome}- Cartas:${cartaJogador1.texto} ${cartaJogador2.texto} - ${pontosJogador}`)
   console.log(`Banca - Cartas: ${cartaBanca1.texto} ${cartaBanca2.texto} - ${pontosBanca}` )

   if(pontosJogador > pontosBanca){
      console.log(`PARABENS!!! ${nome},  Você Ganhou!!!` )
   }else if (pontosJogador < pontosBanca){
      console.log("A BANCA VENCEU.")
   }else{
      console.log("EMPATE!!!")
   }
}else {
   console.log ("FIM DE JOGO")
}
//FIM