
async function criarBaralhoEmbaralhado() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}





// async function tirarUmaCartaAleatoria() {
//     const baralho1 = await criarBaralhoEmbaralhado()
//     console.log(baralho1)
//     const carta = await tirarUmaCarta(baralho1.deck_id)
//     const imagemCarta = carta.cards[0].image
//     document.getElementById('carta').src = imagemCarta
// }
async function mostrarResto(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    const baralho = await resposta.json()
    const imagemCarta = baralho.cards[0].image
    document.getElementById('carta').src = imagemCarta
    cartas = baralho.remaining
    document.getElementById('resto').innerHTML =  `<h2 id="resto" >Cartas Restantes: ${cartas}</h2>`

}

async function jogar() {
    const baralho = await criarBaralhoEmbaralhado()
    const deck = await baralho.deck_id
    document.getElementById('tirar-carta').addEventListener('click', () => {
        mostrarResto(deck) 
        document.getElementById('carta').classList.remove('hidden')
        
    })

}

jogar()
