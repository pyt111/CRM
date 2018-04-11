import * as API from 'api/axiosMetonds';
import { detailCount,spreaddetail } from 'api/url';

const config = {
    state: {

    },
    mutations: {

    },
    actions:{
        /**推广收益明细金额 */
        t_TGSYMXJE: async ({commit},data) => {
            return await API.post(detailCount,data).catch(error => {})
           
        },
         /**推广收益明细列表 */
         t_TGSYMXLB: async ({commit},data) => {
            return await API.post(spreaddetail,data).catch(error => {})
           
        },
     
    }
}
export default config