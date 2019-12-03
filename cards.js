document.addEventListener("DOMContentLoaded" , () =>{
    
    const fetchData = (url,callback) =>{
        fetch(url).then(res=>{
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json();
        }).then(res =>{
            callback(res)
        }).catch(err =>{
            console.log(err)
        })
    }

    let deckId 

    const firstDeck = () =>{
        let url ="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        fetchData(url,(data)=>{
            let p = document.createElement("p")
            p.innerText = data.deck_id
            document.body.appendChild(p)
        })
    }

    firstDeck()

    
    const buildDeck = (data) =>{
        debugger
    }

    const drawCard = () =>{
        let deck = document.querySelector("p")
        let deckId = deck.innerHTML
        let url = "https://deckofcardsapi.com/api/deck/"+deckId+"/draw/?count=5"
        fetch (url)
        console.log(url)
    }

    drawCard()

    
})