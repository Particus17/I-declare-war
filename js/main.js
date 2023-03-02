//your task is to figure out how to make this work so that two cards display on screen 
// try to convert all the face cards to a numeric value
//store a local storage of the winner

let deckId = ''

document.querySelector('button').addEventListener('click', drawTwo)


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1') //here we are fetching a new deck from the card api website.
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

function drawTwo(){
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2` //here we are creating a variable so that we can easily access
    //the draw two api from the card deck api website.

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
  
        console.log(data) //logging api data from the website.
        document.querySelector('#player').src = data.cards[0].image //taking the value of card data at index 0 (so the first card pulled goes here) 
        //and store it in the variable "#player1" from our html. Our card will now be displayed to the browser 
        document.querySelector('#computer').src = data.cards[1].image //taking the value of card data at index 1 (so the second card pulled goes here) 
        //and store it in the variable "#player1" from our html. Our card will now be displayed to the browser

        let playerVal = cardValue(data.cards[0].value) // the cardValue that is being used here comes from the conversion in the cardValue function below. This is so we can register our face cards as number values
        let computerVal = cardValue(data.cards[1].value) // here we do the same thing for the second card.
        const pVal = [] //this is so we can take the cards and add them to an array to be compared to cVal
        const cVal = []  //this is so we can take the cards and add them to an array to be compared to pVal
        
        if(playerVal > computerVal){
            document.querySelector('h3').innerHTML = "Player Wins"     
            playerVal = pVal.push(playerVal)
        }
        else if(playerVal < computerVal){
             document.querySelector('h3').innerHTML = "Computer Wins"
             computerVal = cVal.push(computerVal)
        }  
        else{
            document.querySelector('h3').innerHTML = "Time for WAR!"
             //write some code that tracks who wins the draw:
            war()
  
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

   function cardValue(val){
        if(val === "ACE"){ //"ace" "king" "queen" & "jack" all come from the API card values. ***See DOM console for card values
            return 14
        }else if (val === "KING"){
            return 13
        }else if(val === "QUEEN"){
            return 12
        }else if(val === "JACK"){
            return 11
        }else{
            return Number(val) //if card is not a face card then return the cards value and converts it from str to num
        }
    }

    function war(pVal, cVal){
       
        if(pVal > cVal){
            document.querySelector('h3').innerHTML = "Player Wins"
        }
        else if(pVal < cVal){
            document.querySelector('h3').innerHTML = "Computer Wins"
        }
        else{
            war()
        }
    }
}




