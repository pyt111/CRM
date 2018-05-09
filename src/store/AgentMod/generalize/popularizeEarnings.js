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
            return await API.post(detailCount,data)
           
        },
         /**推广收益明细列表 */
         t_TGSYMXLB: async ({commit},data) => {
            return await API.post(spreaddetail,data)
           
        },
     
    }
}
export default config