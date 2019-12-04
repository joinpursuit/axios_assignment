document.addEventListener("DOMContentLoaded", () =>{
    // let deckId =""
    const fetchData = async () => {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
        let deck_id = res.data.deck_id
        console.log(res)
        debugger

        // let 

    }
    // document.body.append()
    // console.log(fetchData())
   
   
})
// console.log(fetchData())