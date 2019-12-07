
document.addEventListener("DOMContentLoaded", () => {
     // if async is infront of a function then it returns a promise
    const fetchCards =async () => {
        try {
            let res =  await axios.get("https://deckofcardsapi.com/api/deck/new/")
            debugger
            let deck_id = res.data.deck_id
            let shuffled = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
            let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
            console.log(drawCards.data.cards)
        }catch(err){
        console.log(err)
    }
}
fetchCards()
})




// document.addEventListener("DOMContentLoaded", ()=>{
//     fetchData=(url, callback)=>{
//         fetch(url).then(res=>{
//             if(!res.ok){
//                 throw Error(res.statusText)
//             }
//             return res.json()

//         }).then(res=>{
//             callback(res)
//         }).catch(err=>{
//             console.log(err)
//         })
//     }
//     const createDeck = (data) =>{
//         let deck = res.deck_id
//         fetch(`https://deckofcardsapi.com/api/deck/${deck}/shuffle/`)
//         if(!res.ok){
//             throw Error("didn't shuffle")
//         }
//         return res.json()

//     }).then(res=>{
// let deck = res.deck_id
// fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
//     }).then(res = {
//         if(!res.ok){
//             throw Error ("no draw")
//         }

// })