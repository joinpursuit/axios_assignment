document.addEventListener("DOMContentLoaded", () => {
    const fecthData = (url, callback) => {
        fetch(url)
        .then(res => {
            if(res.notok === false){
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then(res => {
            callback(res)
        })
        .catch(err => {
            console.log(err)
        })
        const drawCards = (data) => {
            let output = []
            deckId = 

        }

        fetchData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`")
    }
}) 