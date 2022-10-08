let carta = document.getElementById('pokemon-card')

document.addEventListener('DOMContentLoaded', () => {
    const random = idRandom(1, 151)
    fetchData(random)
})

const idRandom = (min,max) => {
    return Math.floor(Math.random() * (max - min))
}


const fetchData = async (id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}
