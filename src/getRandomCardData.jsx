const getRandomCardData = async () => {
    try {
        let id = ''
        const request = await fetch(`https://api.scryfall.com/cards/random`)
        const response = await request.json()
        return response

    } catch (e) {
        console.log(e)  }
}


export default getRandomCardData;
