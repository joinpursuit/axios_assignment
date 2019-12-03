document.addEventListener("DOMContentLoaded", ()=>{
    let deckId = ""
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(res=>{
        return res.json()
    }).then(res=>{
        deckId = res["deck_id"] 
        
    })
    
    
})