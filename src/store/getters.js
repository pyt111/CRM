const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  uid: state => state.user.uid,
  email: state => state.user.email,
  userName: state => state.user.userName,
  introduction: state => state.user.introduction,
  auth_type: state => state.user.auth_type,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  header_Routers:state => state.permission.header_Routers,
  siderbar_routers:state => state.permission.siderbar_routers,
  table_serchData: state => {
      return state.table.putData
    },
  listDatas: state => state.table.listData,
  showClientWidth:state => state.clientWidth.showClientWidth,
  siderbaropen: state => {
    return state.permission.siderbarOpen
    }
};
export default getters
