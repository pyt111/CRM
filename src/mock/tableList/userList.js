// // import userList from 'static/json/userList'
// // import biaodiList from 'static/json/loanmanage'
// // import loanRecords from 'static/json/loanRecords'

// const jsonData = {
// 	userList: userList,
// 	biaodiList: biaodiList
// }



// export default {

// 	postUserCount: config => {
// 		let num = userList.length;//总数据长度

// 		let data = JSON.parse(config.body)
// 		// console.log(data.jsons)
// 		let pageSize = data.pageSize; //每页几条
// 		let pageNumber = Math.ceil(num / pageSize)//需要返回到前台的页数  向上取整数
// 		// console.log(this.a.getJson(data.jsons));
// 		let backDataCount = {
// 			num: '',
// 			count: pageNumber
// 		}
// 		let jsonList;
// 		for (let x in jsonData) {
// 			if (x == data.jsons) {
// 				jsonList = jsonData[x];
// 			}
// 		}

// 			backDataCount.num = jsonList.length
// 			// console.log(jsonList.length);

// 		//		console.log(pageNumber)
// 		return backDataCount
// 	},
// 	postUserLists: config => {
// 		// console.log(config);

// 		let data = JSON.parse(config.body)
// 		let page = data.page
// 		let pageSize = data.pageSize; //默认每页十条
// 		let backListArray = [];
// 		let jsonList;
// 		// console.log(data.jsons);
// 		for (let x in jsonData) {
// 			if (x == data.jsons) {
// 				jsonList = jsonData[x];
// 			}
// 		}
// 		// console.log(jsonList);
// 		for (let x in jsonList) {
// 			if (x >= ((page - 1) * pageSize) && x < ((page - 1) * pageSize + pageSize)) {
// 				backListArray.push(jsonList[x])
// 			}

// 		}
		

// 		return backListArray
// 	},
// 	getJson: (jsonName) => {
// 		//needPort:需要匹配名称与之想同的方法并返回;
// 		return new Promise((resove, reject) => {
// 			for (let x in jsonData) {
// 				if (x == jsonName) {
// 					resove(jsonData[x]);
// 				}
// 			}
// 		}).catch(error => {
// 			reject(error);
// 		});
//     },
//     loanRecords: config => {
// 		// console.log(loanRecords);
// 		return loanRecords;
//     }
// }
