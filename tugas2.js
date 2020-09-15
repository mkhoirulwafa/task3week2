const getMonth =  (callback)=>{
    setTimeout(()=>{
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error){
            callback(null, month)
        } else{
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}
//callback
let getMonths = (status, result)=>{
    //jika status bukan null
    if(status !== null){
        console.log(status.message)
    } else{
        result.map((item, index)=>{
            if(item !== undefined){
                console.log(item)
            }
        })
    }
}
getMonth(getMonths);