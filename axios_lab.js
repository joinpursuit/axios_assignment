document.addEventListener("DOMContentLoaded", () =>{
    
    const fetchData = async() => {
        try {
            let getShuffledDeck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
            deck_id =  getShuffledDeck.data.deck_id;
            document.querySelector("#btm").addEventListener('click', drawCards => {
                drawCards(deck_id)
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
            let selectedCards = document.querySelector("#selectedCards");
            let ul = document.createElement("ul");
            selectedCards.appendChild(ul);
                if(ul) {
                    ul.parentNode.removeChild(ul);
                }
            let ul2 = document.createElement("ul");
            let cards = deck_id.cards;
            cards.forEach(singleCard => {
                let li = document.createElement("li");
                let img = document.createElement("img");
                img.src = singleCard.img;
                li.appendChild(img);
                ul2.appendChild(li); 
            });
            selectedCards.appendChild(ul2);
            
        }
        catch(err){
          console.log(`Can not draw cards.`) 
          debugger 
        }
        document.querySelector("#btm").addEventListener('click', drawCards => {
                drawCards(deck_id)
            }); 
    }
    fetchData() 
})





