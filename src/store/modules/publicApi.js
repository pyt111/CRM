import * as API from 'api/axiosMetonds';
import { userFrequencyInvestmentList,appLogin,getAgentSms,agentReport,commWithdrawal,commWithdrawalConditions } from 'api/url';

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
         /**报备 短信*/
         p_BBDX:async ({commit},data) => {
            return await API.post(getAgentSms,data).catch(error => {})
        },
         /**报备 提交*/
         p_BBTJ:async ({commit},data) => {
            return await API.post(agentReport,data).catch(error => {})
        },
        p_KSTX:async ({commit},data) => {
            return await API.post(commWithdrawal,data).catch(error => {})
        },
        p_YHKXX:async ({commit},data) => {
            return await API.post(commWithdrawalConditions,data).catch(error => {})
        },
    
    }
}
export default config