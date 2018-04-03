
const clientWidth = {
    state: {
        showClientWidth:document.documentElement.clientWidth
    },
    mutations: {
        SET_CLIENTWIDTH:(state,data) => {
            // console.log(data);
            state.showClientWidth = data
        }
    },
    actions: {
        
    }
}

export default clientWidth