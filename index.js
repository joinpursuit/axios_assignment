document.addEventListener("DOMContentLoaded", () =>{
    let savedDeck = "";

    const fetchData = (url, callback) =>{
      
        fetch(url).then(res => {
            if(!res.ok){
              throw Error(res.statusText + " was the error") 
            }
            return res.json()
        }).then(res => {
            // debugger
            callback(res);
            
        }).catch(err => {
            console.log(err)
        })
    }
    const saveId = (res) => {
        console.log(res["deck_id"])

    savedDeck = res["deck_id"]
    // debugger
//    return savedDeck;
     }


    fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", saveId)

   const drawCards = (res) => {
     let img = document.createElement("img")
     for(let i =0; i < res["cards"].length; i++){
         let img = document.createElement("img")
        let src = res["cards"][i]["image"]
        img.src = src
        document.body.appendChild(img)
     }
     console.log(src)
   }

   let button = document.querySelector("button")
   button.addEventListener("click", (saveId)=> {
       let url = "https://deckofcardsapi.com/api/deck/" +  savedDeck+ "/draw/?count=5"
        fetchData(url, drawCards)
   })
})