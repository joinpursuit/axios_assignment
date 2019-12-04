document.addEventListener("DOMContentLoaded", () =>{
    
    const fetchData = async() => {
        try {
            let getShuffledDeck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
            deck_id =  getShuffledDeck.data.deck_id;
            document.querySelector("#btm").addEventListener('click', drawCards => {
            drawCards();
            }); 
      
         } 
        catch(err) {
            console.log(`Shuffled deck doesn't exist.`)
        }
    }

    const drawCards = async(deck_id) => {
        try {
            let select = document.querySelector("select");
            let numCards = select.value;
            let getCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numCards}`);
            let di
        }
        catch(err){
          console.log(`Can not draw cards.`) 
          debugger 
        }
    }
    fetchData()

    // fetchData(", getId)
    // let button = document.querySelector("#btm")
    // button.addEventListener("click", getId)
    // let div = document.querySelector("shuffleDeck")
   
    // const drawCards = (firstId) => {
    //     let numCards = 0;
    //     let p = document.querySelector("#getCard")
    //     numCards = event.target.value
    //     p.innerText(numCards)
    // }

    //     fetchData(, drawCards)
    //     let select = document.querySelector("select")
    //     select.addEventListener("change", (event) => {

    // })


    
})





