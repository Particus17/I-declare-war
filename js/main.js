//your task is to figure out how to make this work so that two cards display on screen
// try to convert all the face cards to a numeric value
//store a local storage of the winner

//first let's access the website
const origin = "https://www.deckofcardsapi.com/api/deck/"; //gets a new deck

//Variables
document.querySelector(".newGame").addEventListener("click", newGame); //what happens when we select the new game button
//document.querySelector('.deal').addEventListener('click', deal) // what happens when we select deal button
document.querySelector(".draw").addEventListener("click", draw); // what happens when we draw
// document.querySelector('.war').addEventListener('click', war) // what happens when card values are the same

//set up function to easily access the API throughout documnet
const sendRequest = async (URL) => {
  try {
    const response = await fetch(`${origin}${URL}`); //what's happoening here? Is this the base url plus the search params? YES
    const data = await response.json(); //parse as JSON
    return data; //should return a javascript object
  } catch (err) {
    console.log(`Fetch Failure:${origin}${URL}`); //this tells us the issue is in our request: bad fetch
  }
};

//this gets the deck if there isnt already one present and puts it into localStorage
if (!localStorage.getItem("deckID")) {
  sendRequest("new/shuffle/?deck_count-1") //this sends a request to our origin PLUS URL query params and API keys starting after '?'
    .then((data) => {
      console.log(data);
      localStorage.setItem("deckID", data.deck_id); //this goes into our returned JSON object and grabs a property that matches that of deck_id then places it in our local storage under the variable 'deckID'
    });
}

//start the new game
async function newGame() {
  //all we want to do here is clear our local storage when we start a new game to grab a new deck
  localStorage.clear(); //clears the values previously stored
  location.reload(); //this reloads the current URL
}

//I want to draw all the cards from the deck
function deal() {
  //now we want to split the deck evenly and place the cards in each deck
  sendRequest(`${localStorage.getItem("deckID")}/draw/?count=52`); //because we assigned our fetch to the variable 'sendRequest' we can pass our query params right into our origin URL
  //create the piles
  p1Arr = [];
  p2Arr = [];
  for (let i = 0; i < data.cards.length; i++) {
    if (i % 2 === 0) {
      p1Arr.push(data.cards[i]); //taking half the deck and placing it in player 1 array of cards
    } else {
      p2A22.push(data.cards[i]); //taking half the deck and placing it in player 2 array of cards
    }
  }
  console.log(); //print data to console to see if it's working
}

//I want to divy the cards to each player pile
async function draw() {
  try {
    //we want to pull one from the bottom of each player pile and update the remaining cards
    // we also want to figure out a way to display the cards we pulled
  } catch (err) {
    console.log("404: Fetch ERR ");
  }
}
