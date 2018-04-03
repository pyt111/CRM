import axios from 'utils/fetch';

//  ========== =======
//  = 用户列表请求API= 
//  ========== =======


export function userCount(data) {//请求列表页数 判断是否有数据  
	
	return axios({
		url:'/asd/table/userCount',
		method:'post',
		data:data
	})
}

export function userList(data) {  //请求数据列表
//	console.log(data)
	return axios({
		url:'/table/userList',
		method:'post',
		data:data
	})
}


//  ========== 
//  = Banner = 
//  ========== 

export default {
	count: (port,data) => {
		return axios({
			url: port.countPort,
			method:'post',
			data:data
		})
	},
	list: (port,data) => {
		
		return axios({
			url: port.listPort,
			method:'post',
			data:data
		})
	}
}