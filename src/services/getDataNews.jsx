const getNewsPoke = async() => {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=pokemon&apiKey=d34227f5626e403a87f0d5a98fbd3fcb&page=1`)
        const data = await response.json()
        return data
    } catch (error) { 
        console.log(error)
    }
}
export default getNewsPoke