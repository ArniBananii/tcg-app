
const getAllCardData = async (page) => {
    try {
        const request = await fetch(`https://api.magicthegathering.io/v1/cards?page=${page}`, 
        )
        const response = await request.json()
        return response
    } catch (e) {
        console.log('error', e)
    }
}
export default getAllCardData;