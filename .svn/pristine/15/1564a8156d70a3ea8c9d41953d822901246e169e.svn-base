
//  ========== 
//  = 日期、时间格式化 = 
//  ========== 
export const time1 = (data) =>  {
//	console.log(data)
	return new Date(data.time).Format("yyyy-MM-dd");
}
export const time2 = (data) =>  {
//	console.log(data)
	return new Date(data.time).Format("yyyy-MM-dd hh:mm:ss");
}

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


//  ========== 
//  = table列表渲染 = 
//  ========== 


export const tableList = (datas,keys) =>{ //datas 请求获取的map集合  keys:table列表key值(需要接收的参数名)
				let userArr = []
				for(let y in datas) {
					let userD = new Object();
					for(let x in keys) {
						userD[keys[x]] = datas[y][keys[x]]
						if(keys[x] == 'createTime'){
//							console.log(userD[keys[x]])
							userD[keys[x]] = time2(userD[keys[x]])
						}
					}
					userArr.push(userD)
				}
				return userArr//返回列表需要的map
			}