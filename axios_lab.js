document.addEventListener("DOMContentLoaded", () =>{
    
    const fetchData = (url, callback) => {
        fetch(url).then(res => {
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        }).then(res => {
            debugger
            callback(res)
        }).catch(err => {
            console.log(err)
        })
    }

    const getId = (data) => {
        firstId = data.deck_id
    }

    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", getId)
    let button = document.querySelector("#btm")
    button.addEventListener("click", getId)
    let div = document.querySelector("shuffleDeck")
   
    const drawCards = (firstId) => {
        let numCards = 0;
        let p = document.querySelector("#getCard")
        numCards = event.target.value
        p.innerText(numCards)
    }

        fetchData("https://deckofcardsapi.com/api/deck/${firstId}/draw/?count=`$numCards`", drawCards)
        let select = document.querySelector("select")
        select.addEventListener("change", (event) => {

    })


    
})





