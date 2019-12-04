document.addEventListener("DOMContentLoaded", () =>{
    let deck_id;
    const fetchAllCards = async () =>{
      try{
        let res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
        deck_id = res.data.deck_id
        let shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`);
      } 
        catch(err) {
            console.log(err)
        }
    }
 
    
    let select = document.querySelector("select")
    for(let i = 1; i <= 10; i++){
        let option = document.createElement("option")
        option.innerText = i
        select.appendChild(option)
    }

   const showCards = async (deck_id) => {
       try{
        let image = document.querySelector("img")
        if(image){
            image.parentNode.removeChild(image)
        }
        let select = document.querySelector("select")
        let numCards = select.value
        let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numCards}`);
        let deck = document.querySelector("#cards")
        for(let i =0; i < drawCards.data.cards.length; i++){
            let img = document.createElement("img")
            let src = drawCards.data["cards"][i]["image"]
            img.src = src
            deck.appendChild(img)
       } 
     } 
     catch(err) {
        console.log(err)
    }
   }

   let button = document.querySelector("button")
   button.addEventListener("click", ()=> {
        showCards(deck_id)
   })

   fetchAllCards()
})