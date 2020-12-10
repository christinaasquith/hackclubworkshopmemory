

document.addEventListener('DOMContentLoaded', () => {
    const cardArray =[
        {
            name: '1',
            img:'https://cloud-5ystxzer7.vercel.app/11.png'
        }, 
        {
            name: '2',
            img:'https://cloud-5ystxzer7.vercel.app/22.png'
        },

        {
            name: '3',
            img:'https://cloud-5ystxzer7.vercel.app/33.png'
        },

        {
            name: '4',
            img:'https://cloud-5ystxzer7.vercel.app/44.png'
        },

        {
            name: '5',
            img:'https://cloud-5ystxzer7.vercel.app/55.png'
        },

        {
            name: '6',
            img:'https://cloud-5ystxzer7.vercel.app/06.png'
        }
    ]
const board = document.querySelector('.board')
const result = document.querySelector('#score')
const placeholder = 'https://cloud-5ystxzer7.vercel.app/7placeholder.png'
// create game board
const blank = 'https://cloud-5ystxzer7.vercel.app/6blank.png'

var cardsClicked = []
var cardsClickedID = []
var cardsMatched = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
var card = document.createElement('img')
card.setAttribute('src', placeholder)
card.setAttribute('data-id', i)

card.addEventlListener('click', flipCard)
board.appendChild(card)
    }
}



function flipCard() {
    var cardID = this.getAttribute('data-id')
cardsClicked.push(cardArray[cardId].name)
cardsClickedID.push(cardId)

this.setAttribute('src', cardArray[cardId].img)
if (cardsClicked.length ===2) {
    setTimeout(checkForMatch, 500)
}
}

createBoard()
})