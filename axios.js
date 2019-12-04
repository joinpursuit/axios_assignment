document.addEventListener("DOMContentLoaded", () => {
    const fetchDeckofCards = async () => {
        try{
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            let deckId = res.data.deck_id
        }catch(err){
            console.log("ERROROROROROR")
        }
    }
    const showFiveCards = async (data) => {

        try{
            let gotFive = await axios.get(`https://deckofcardsapi.com/api/deck/${data}/draw/?count=5`)
            let cards = document.querySelector("#cards")
            for(let i = 0; gotFive.data.cards.length; i++){
                let img = document.createElement("img")
                img.src = src
                cards.appendChild(img)
            }
        }catch(err){
            console.log(err)
        }
    }
    let button = document.querySelector("button")
    button.addEventListener("click", () =>{
        showFiveCards()
    })
    fetchDeckofCards()
})

