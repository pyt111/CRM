import * as API from 'api/axiosMetonds';
import { userMessageList } from 'api/url';

const config = {
    state: {

    },
    mutations: {

    },
    actions:{
        /**子商户信息 */
        z_ZSHXX: async ({commit},data) => {
            return await API.post(userMessageList,data).catch(error => {})
           
        },
     
    }
}
export default config