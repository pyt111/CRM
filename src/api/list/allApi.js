import axios from 'utils/fetch';

export function echartsTimer(data) {  //
	return axios({
		url:'/ec/visualDataModule/chartsM',
		method:'post',
		data:data
	})
}