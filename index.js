document.addEventListener("DOMContentLoaded", ()=>{
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(res=>{
        return res.json()
    }).then(res=>{
        let deckId = "";
        deckId = res["deck_id"]
           debugger
        })
    
})