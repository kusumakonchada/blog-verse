const sampleData=async ()=>{
    try{
    let rensponse=await fetch("htttps://www.google.com");
    console.log(response)
    }
    catch(err){
        console.log("erroe accesing google:"+err)
    }
}
sampleData()