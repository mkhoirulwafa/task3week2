const cekHariKerja = (day)=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}
//then catch , finally
cekHariKerja('senin') //input param
    .then((res)=>{
    console.log(`Hari ini hari kerja : ${res}`)
    })
    .catch((err)=>{
    console.log(err.message)
    })
    .finally(()=>{
        console.log('selesai')
    })
//try catch, finally
const manggilFungsi = async () =>{
    try {
        let result = await cekHariKerja('sabtu'); //input param
        console.log(`Hari ini hari kerja : ${result}`)
    } catch (err) {
        console.log(err.message)
    } finally{
        console.log('selesai')
    }
}
manggilFungsi()

//----PENJELASAN----

//1. then catch
//.then menunggu fungsi cekHariKerja hingga mendapat result , 
//jika hasilnya ok/resolve maka yang dijalankan adalah .then
//jika hasilnya reject maka yang dijalankan adalah .catch yg akan menangkap error nya
//lalu .finally akan tetap dijalankan baik hasilnya resolve ataupun reject

//2. try catch
// pertama buat fungsi manggilFungsi, yang isinya arrow function
//sebelum sintaks arrow func ditulis, diberitahu dulu pada function ini untuk berjalan secara synchronous dengan sintak 'async'
// lalu arrow function akan mengeksekusi/mencoba kode di try{} yang isinya variabel result berisi await cekHariKerja('senin')
// fungsi await adalah untuk menunggu hasil fungsi cekHariKerja agar state nya tidak pending lg, maka bisa diambil result nya di output console
// jika code block try{} mendapati error, maka catch akan menangkap error dan menampilkan message error yang ada di Promise => Reject.
//lalu finally akan tetap dijalankan baik hasilnya resolve ataupun reject