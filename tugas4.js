fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        const hasil = data.map(el => {
            return el.name
        })
        const hasilAkhir = hasil.map(el =>{
            return `<p> Nama : ${el}</p>`
        }).join('')
        console.log(hasil) //tampil di console
        const container = document.querySelector('.container')
        container.insertAdjacentHTML('afterbegin', hasilAkhir) //tampil di page html
    })
    .catch(err => console.log(err))
    // .then(data => console.log(data))