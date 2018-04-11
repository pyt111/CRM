import * as API from 'api/axiosMetonds';
import { panel,freeze } from 'api/url';

const config = {
    state: {

    },
    mutations: {

    },
    actions:{
        /**月度业绩 月度提成 月度新增用户 可提现金额 */
        k_top: async ({commit},data) => {
            return await API.post(panel,data).catch(error => {})
            // return new Promise((resolve,reject) => {
                // await  API.post(panel,datas)
                // console.log(await API.post(panel,datas));
                // .then(res => {
                //     resolve(res)
                // }).catch(error => {
                //     reject(error)
                // })
            // })
           
        },
        
         /**冻结金额排名 */
         k_DJJEPM:async ({commit},data) => {
            return await API.post(freeze,data).catch(error => {})
        },
    }
}
export default config