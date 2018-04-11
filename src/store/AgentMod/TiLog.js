import * as API from 'api/axiosMetonds';
import { withdrawMoneyDetail } from 'api/url';

const config = {
    state: {

    },
    mutations: {

    },
    actions:{
        /**d提现明细 */
        x_TXMX: async ({commit},data) => {
            return await API.post(withdrawMoneyDetail,data).catch(error => {})
           
        },
     
    }
}
export default config