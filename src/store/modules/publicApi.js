import * as API from 'api/axiosMetonds';
import { userFrequencyInvestmentList,appLogin } from 'api/url';

const config = {
    state: {

    },
    mutations: {

    },
    actions:{
         /**投资动态 投资统计*/
         p_TZDT:async ({commit},data) => {
            return await API.post(userFrequencyInvestmentList,data).catch(error => {})
        },
        /**操作日志 子商户日志*/
        p_CZRZ:async ({commit},data) => {
            return await API.post(appLogin,data).catch(error => {})
        },
         /**报备*/
         k_CZRZ:async ({commit},data) => {
            return await API.post(appLogin,data).catch(error => {})
        },
    
    }
}
export default config