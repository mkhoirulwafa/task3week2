const container = document.querySelector('.container')

fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json()
    })
    .then(data => {
        // console.log(data)
        const hasil = data.map(el => {
            return el.name
        })
        for (let i =0; i < hasil.length; i++) {
            //tampil di page html
            container.insertAdjacentHTML('beforebegin', `<p> Nama : ${hasil[i]}</p>`)
            //tampil di console
            console.log(hasil[i])     
        }
    })
    .catch(err => console.log(err))
