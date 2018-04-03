/**
 * 作者: yantao.peng 
 * 
 * 说明：公共方法
 * 
 * 最后修改时间: Friday, 26th January 2018 7:40:53 pm
 */




import store from 'store'
import router from 'router'

//  ========== 
//  = 日期、时间格式化 = 
//  ========== 
export const time1 = (data) => {
	//	console.log(data)
	return new Date(data.time).Format("yyyy-MM-dd");
}
export const time2 = (data) => {
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
/**
 * 作者: yantao.peng 
 * 
 * 说明：tableList() 列表渲染方法;
 * datas 请求获取的map集合  fm:table列表参数值(需要取出key值)
 * 目前有两种渲染功能: 
 * 1,主要负责返回与后台返回状态相对应的文字信息--fm[x].r == 1;
 * 2. 主要负责界面操作时render函数,生成DropdownItem下拉框;
 * 最后修改时间: Friday, 26th January 2018 7:31:32 pm
 */


export const tableList = (datas, fm) => {
	// console.log(datas);

	let keyArr = [];
	let userArr = [];
	for (let x in fm) {//将key值不为空的值取出
		if (fm[x].key != undefined) {
			keyArr.push(fm[x].key);
		}

	}
	// console.log(datas);
	for (let y in datas) {//遍历后台返回的数据;
		let userD = new Object();
		userD.cellClassName = new Object;
		for (let x in keyArr) {//遍历需要的key值;
			userD[keyArr[x]] = datas[y][keyArr[x]];//将后台返回数据中与配置key值相同的键的值赋值给key;

			// console.log(userD);
			if (keyArr[x] == 'createTime') {
				userD[keyArr[x]] = time2(userD[keyArr[x]]);//将后台与key对应的值赋值给key
			}

			//当r为1的情况下， 主要负责返回与后台返回状态相对应的文字信息
			if (fm[x].r != undefined && fm[x].r == 1) { //当r为1的时候，将后台返回的状态数据赋值;
				// console.log(fm[x], userD[keyArr[x]]);
				for (let t in fm[x].textBack) {//遍历需要返回的文字信息;
					// console.log(t,userD[keyArr[x]]);
					if (t == userD[keyArr[x]]) {//根据后台返回的状态值判断返回文字信息;
						// console.log(fm[x].textBack[t]);
						// console.log(fm[x].cellClassName, fm[x].textBack[t].class);
						if (fm[x].textBack[t].class != '') {
							userD.cellClassName[fm[x].key] = fm[x].textBack[t].class;
							// console.log(userD.cellClassName);
						}
						userD[keyArr[x]] = fm[x].textBack[t].text
					}

				}
			}

			//当r为2的情况下， 主要负责界面操作时render函数 操作dom;
			if (fm[x].r != undefined && fm[x].r == 2) {

				let config = fm[x].renderConfig;
				// console.log(config.itemList);
				fm[x].render = (h, params) => {
					// console.log(params);
					let rArr = [];
					for (let r in config.itemList) {
						// let nativeOns = config.itemList[r].nativeOn
						// console.log(nativeOns);
						rArr.push(
							h(
								"DropdownItem",
								{
									nativeOn: {
										click: () => {
											// this.first(
											// 	params.index 
											// );
											// console.log(params);
											console.log(config);
											console.log(router);
											let data = {
												params: params,
												router: router
											}

											store.dispatch(config.itemList[r].storeName, data);//触发actions方法请求相应接口
										}
									}
								},
								[
									h("Icon", {
										props: {
											type: config.itemList[r].iconType

										},
										style: {
											marginRight: "5px",
											color: "#69BEE9"
										}
									}),
									h(config.itemList[r].tag, config.itemList[r].name)
								]
							),
						)
					}
					return h('div', [
						h("Dropdown",
							{
								placement: "bottom-end",
								style: {
									align: "left"
								}
							},
							[
								h("i", {
									class: {
										auditmanage_shezhi: true,
										icon: true,
										"ivu-icon": true,
										"ivu-icon-gear-b": true
									}
								}),
								h("DropdownMenu",
									{
										slot: "list"
									},
									rArr

								)
							]
						)
					])
				}
			}

		}

		userArr.push(userD)//将取到的数据填进数组
	}
	return userArr//返回列表需要的map
}