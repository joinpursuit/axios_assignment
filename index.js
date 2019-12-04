document.addEventListener("DOMContentLoaded", () =>{
    // let deckId =""
    const fetchData = async () => {
        let res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
        let deck_id = res.data.deck_id

        let shuffled = axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)

        

        // console.log(res)
        debugger

        // let 

    }
    // document.body.append()
    fetchData()
   
   
})
// console.log(fetchData())