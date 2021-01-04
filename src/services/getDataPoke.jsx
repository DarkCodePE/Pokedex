const getDataPoke = async({resource, id}) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/${resource}/${id}`)
        response.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        response.append('Access-Control-Allow-Credentials', 'true');
        /* console.log(response); */
        const data = await response.json()
        return data
    } catch (error) { 
        console.log(error)
    }
}
export default getDataPoke