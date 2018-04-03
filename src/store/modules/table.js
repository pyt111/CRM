const table = {
    state: {
        putData:'',
        listData:'',
    },
    mutations: {
        SET_SERCHDATA:(state,data) => {
            // if( state.putData == '') {
                state.putData = data
                console.log(data);
            // }
            
        },
        TABLE_LIST:(state,data) => {
            // console.log(data);
            state.listData = data
            // state.fmData = data.fm
        }
    },
    action: {
        // serchData:({commit},data) =>{

        // }
    }
}
export default table;