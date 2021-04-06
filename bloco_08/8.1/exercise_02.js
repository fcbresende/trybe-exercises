//Desenvolva uma HOF que retorna o resultado de um sorteio. 
//Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
//O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const prize = (userValue, action) => {
  const prizeNumber =  Math.floor(Math.random()* 5 + 1);
    if (action(userValue, prizeNumber)) {
        return 'Parabéns você ganhou';
    }
        return 'Tente novamente';
    }

function checkPrize(numberByUser, numberByPrize) {
    if (numberByUser === numberByPrize) {
        return true
    } else {
        return false
    }
}

console.log(prize(3, checkPrize));
