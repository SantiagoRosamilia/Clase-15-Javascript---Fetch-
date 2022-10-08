
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

        const div = document.createElement('div')
        div.classList.add('producto-a')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${id}</h5>
            <button class="btn btn-primary">Cambiemos al Pokemon</button>
            </div>
        </div>  
        `
        carta.appendChild(div)
    }
    catch (error) {
        console.log(error)
    }
}

/* document.addEventListener('DOMContentLoaded', () => {
    
}) */

