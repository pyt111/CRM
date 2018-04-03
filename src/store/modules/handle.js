/**
 * 作者: yantao.peng 
 * 
 * 说明：异步获取后台数据,后查找修改的数据,最后commit到tableState中触发TABLE_LIST刷新数据,减少了请求接口次数,本地检查需要更新的数据并重新赋值,注意：需要先将TABLE_LIST清空;
 * 
 * 最后修改时间: Friday, 26th January 2018 7:25:22 pm
 */

import hApi from 'api/handleApi'
import tableState from './table'
function refresh(res) {
    let refreshDataMap = tableState.state.listData.datas; //将store里存储的数据取出,并遍历查找与后太返回数据相对应的key,并将返回值赋值给此key;
    let MapKey = 'userId';//测试根据userId(贷款企业)判断修改数据;正式要根据产品唯一ID来判断
    let backey = res.data.userId;//后台返回的需要修改的值的key;
    let newData;
    for(let x in refreshDataMap) {//便利store存储的所有数据
        if(refreshDataMap[x][MapKey] === backey) {//根据后台返回的userId判断有哪些或哪个数据对象中的值需要修改,如果返回的userId与store中存储的数据中的userId相同则修改此数据;
            for(let y in res.data) {
                refreshDataMap[x][y] = res.data[y]
            }
            newData = tableState.state.listData;
        }
       
    }
    return newData//返回改变后的数据
}
const handle = {
    state: {
        deleteData:''
    },
    mutations: {
      
    },
    actions: {
        handleCheck:({commit},data) => {//审核通过操作  
            hApi.check(data.params).then((res) => { 
                console.log(data.params.index);
                let newData = refresh(res)
                data.router.push({
                    path: "addManage",
                    name: "新增标的管理",
                    params: {
                        uuID:String(1) 
                    }
                });
                // console.log(newData);
                commit('TABLE_LIST','')//先将tableState.state.listData清空
                commit('TABLE_LIST',newData)//然后将newData提交,如果直接提交将不刷新页面,因watch方法检测不到;
                if(res.data.statuss == 1) {

                }
            })   
        },
        handlesynchronization:({commit},data) => {//同步操作
            hApi.synchronization(data.params).then((res) => {
                let newData = refresh(res)
                commit('TABLE_LIST','')//先将tableState.state.listData清空
                commit('TABLE_LIST',newData)//然后将newData提交,如果直接提交将不刷新页面,因watch方法检测不到;
            })

        }
    }
}
export default handle;