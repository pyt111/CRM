import * as API from 'api/axiosMetonds';
import { achievedetail } from 'api/url';

const config = {
    state: {

    },
    mutations: {

    },
    actions:{
        /**推广提现明细金额 */
        t_TGTXMXJE: async ({commit},data) => {
            return await API.post(achievedetail,data).catch(error => {})
           
        }
     
    }
}
export default config