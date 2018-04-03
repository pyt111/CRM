import axios from 'utils/fetch';



export default {
    check: (data) => {
        // console.log(data.row);
        let putData = {
            userId:data.row.userId

        }
        return axios({
            url:'/Introductions/auditmanage/check',
            method:'post',
            data:putData
        })
    },
    synchronization: (data) => {//同步操作
        let putData = {
            userId:data.row.userId

        }
        return axios({
            url:'/Introductions/auditmanage/synchronizationSome',
            method:'post',
            data:putData
        })
    }
}
