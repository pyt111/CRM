export default {
    checkSome: config =>{
       let backData;
        let data = JSON.parse(config.body)
        // console.log(data);
        
        if(data != '') {
            backData = {
                userId:data.userId,
                statuss:'1'
            }
        }
        return backData
    }
}