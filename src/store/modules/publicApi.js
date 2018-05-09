import * as API from 'api/axiosMetonds';
import { userFrequencyInvestmentList, appLogin, getAgentSms, agentReport, commWithdrawal, commWithdrawalConditions, sendSmsPopularize, popularizeSetting, promoteWithdrawal } from 'api/url';

const config = {
    state: {

    },
    mutations: {

    },
    actions: {
        /**投资动态 投资统计*/
        p_TZDT: async ({ commit }, data) => {
            return await API.post(userFrequencyInvestmentList, data)
        },
        /**操作日志 子商户日志*/
        p_CZRZ: async ({ commit }, data) => {
            return await API.post(appLogin, data)
        },
        /**报备 短信*/
        p_BBDX: async ({ commit }, data) => {
            return await API.post(getAgentSms, data)
        },
        /**报备 提交*/
        p_BBTJ: async ({ commit }, data) => {
            return await API.post(agentReport, data)
        },
        p_KSTX: async ({ commit }, data) => {
            return await API.post(commWithdrawal, data)
        },
        p_YHKXX: async ({ commit }, data) => {
            return await API.post(commWithdrawalConditions, data)
        },
        p_DXYQ: async ({ commit }, data) => {
            return await API.post(sendSmsPopularize, data)
        },
        p_TGSZ: async ({ commit }, data) => {
            return await API.post(popularizeSetting, data)
        },
        p_TGTX: async ({ commit }, data) => {
            return await API.post(promoteWithdrawal, data)
        },

    }
}
export default config