document.addEventListener("DOMContentLoaded",()=>{
    let deck_id =""

    const fetchAllCards = async () =>{
            try{
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/");
           deck_id = res.data.deck_id;
           let shuffled = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`);
           // let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`);
        }catch(err){
            console.log(err)
        }
    }

    const drawCards = async (id) =>{
        try{
        let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=5`);
        // let src = draw.data.cards[0].image
        for(let i = 0; i < draw.data.cards.length; i++){
            let img = document.createElement("img");
            let src = draw.data.cards[i].image
            img.src = src;
            document.body.appendChild(img)
        }
        debugger;
        }catch(err){
            console.log(err)
        }

    }


    fetchAllCards();

    let button = document.querySelector("button");
    button.addEventListener("click",()=>{
        drawCards(deck_id);
        
    })


// let button = document.querySelector("button");
// button.addEventListener("click", (deck_id)=>{
// let img = document.createElement("img");
// let src = ("https://deckofcardsapi.com/api/deck/deck_id/draw/?count=1")
// img.src = 
// document.body.appendChild(img);
// })


})