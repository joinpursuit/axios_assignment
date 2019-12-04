document.addEventListener("DOMContentLoaded", () =>{
    let deck_id = "";

    const fetchData = async () =>{
      try{
        let res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
         deck_id = res.data.deck_id
        let shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`);
        // debugger
      } 
        catch(err) {
            console.log(err)
            debugger
        }
    }
 

   const drawCards = async (deck_id) => {
       try{
           let select = document.querySelector("select")
           let value = select.value
        //    console.log(value)
        //    debugger
        let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${value}`);
        let deck = document.querySelector("#deck")
        deck.innerHTML = " "
        for(let i =0; i < draw.data.cards.length; i++){
           //  debugger
            let img = document.createElement("img")
           let src = draw.data["cards"][i]["image"]
           img.src = src

          deck.appendChild(img)
       }

      
     } 
     catch(err) {
        console.log(err)
        debugger
    }
     console.log(src)
   }

   let button = document.querySelector("button")
   button.addEventListener("click", ()=> {
        drawCards(deck_id)
   })

   fetchData()
})
