let lolos = true
const validasi = (name)=>{
    if(typeof name !== 'string'){
        console.log('Nama kamu gabisa ditulis pake String? Ayolah Plis')
        lolos = false
    }
}

//promise 1
let isAbsen = true
const absen = (nama)=> {
    return new Promise((resolve, reject) => {
        validasi(nama)
        if(lolos){
            setTimeout(()=>{
                if(isAbsen){
                    resolve(`${nama} sudah absen hari ini`)
                }else{
                    reject(new Error(`${nama} belum absen!`))
                }
            }, 3000)
        }
    })
}
const manggilFungsi = async () =>{
    try {
        let result = await absen('Wafa'); //input param
        console.log(result)
    } catch (err) {
        console.log(err.message)
    }
}
manggilFungsi()

// //promise 2
// let isDone = false
// const tidur = (nama, task)=> {
//     return new Promise((resolve, reject) => {
//         validasi(nama)
//         if(lolos){
//             setTimeout(()=>{
//                 if(isDone){
//                     resolve(`Mantap ${nama}, saatnya Tidur nyenyak.`)
//                 }else{
//                     reject(new Error(`Hai ${nama}, bikin kopi dulu ya, lembur tugas ${task}nya`))
//                 }
//             }, 3000)
//         }
//     })
// }
// tidur('Wafa', 'Coding') //input param
//     .then((res)=>{
//     console.log(res)
//     })
//     .catch((err)=>{
//     console.log(err.message)
//     })