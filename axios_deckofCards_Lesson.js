//const axios = require("axios")

// document.addEventListener("DOMContentLoaded", () => {
//     const fetchAllCards = () => {
//         axios.get("https://deckofcardsapi.com/api/deck/new/").then(res => {
//             let deckId = res.data.deck_id
//             axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`).then(res => {
//                 let deckId = res.data.deck_id
//                 axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`).then(res => {
//                 debugger
//                 })
//             })
//         }).catch(err => {
//         }) 
//     }
//     fetchAllCards()
// })


//Callback Hell: Infinite stream of nested callback functions

//ASYNC & AWAIT
//If async is put in front of a function, returns a promise

//ES5  
//async function returnOne() {
//     return 1
// }
// returnOne().then(res => { //the return is a promise thar returns 1
//
//})

//await
//code appears to run more synchronously with asyncronous code

document.addEventListener("DOMContentLoaded", () => {
    const fetchAllCards = async () => {
        try { // use try code block to wrap await code for error handling, if it has an error then catch will throw error
        let res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
        let deckId = res.data.deck_id
        let shuffled = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
        let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        console.log(drawCards.data.cards) //keying into response object
        } 
        catch(err) {
            console.log(err)
        }
    }      
    
    fetchAllCards()
    console.log("What's Up") //Will print first because there's no wait for promises from fetching data. With asynchronous data, processes run simultaneously. Whatever evaluates first, renders first
})

//Event Loop
//Callstack (Code to run) -> (Async code sent) -> Browser API -> Callback Queue -> Back to Callstack as Response