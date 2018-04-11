import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
import publicApi from './modules/publicApi';//公用接口
import kanban from './AgentMod/k_spectaculars';//看板
import userInfo from './AgentMod/subordinateUserInfo/z_userInfo';//子商户信息
import popularizeEarnings from './AgentMod/generalize/popularizeEarnings';//推广收益明细
import popularizeTi from './AgentMod/generalize/popularizeTi';//推广提现明细
import TiLog from './AgentMod/TiLog';//看板


import table from './modules/table';
import handle from './modules/handle';
import clientWidth from './modules/clientWidth';
import getters from './getters';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    publicApi,
    kanban,
    userInfo,
    popularizeEarnings,
    popularizeTi,
    TiLog,
    table,
    handle,
    clientWidth
  },
  getters
});
 
export default store
