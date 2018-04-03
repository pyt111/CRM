import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
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
    table,
    handle,
    clientWidth
  },
  getters
});
 
export default store
