// import { loginByEmail, logout, getInfo } from 'api/login';
console.log('1111111111111111111111111111111111111');
let CryptoJS = require("crypto-js");
// import { decrypt } from 'utils/allFuns';//自定义非vue公共方法 decrypt--aes解密
import Vue from 'vue';
import Cookies from 'js-cookie';
import datas from '../getters';
import qs from 'qs'
import * as API from 'api/axiosMetonds';
import { loginUrl, getInfoUrl,logOut } from 'api/url';

const user = {
	state: {
		user: '',
		status: '',
		email: '',
		userName: '',
		code: '',
		uid: undefined,
		auth_type: '',
		token: Cookies.get('Admin-Token'),
		name: '',
		avatar: '',
		introduction: '',
		roles: [],
		setting: {
			articlePlatform: []
		}
	},

	mutations: {
		SET_AUTH_TYPE: (state, type) => {
			state.auth_type = type;
		},
		SET_CODE: (state, code) => {
			state.code = code;
		},
		SET_TOKEN: (state, token) => {
			state.token = token;
		},
		SET_UID: (state, uid) => {
			state.uid = uid;
		},
		SET_EMAIL: (state, email) => {
			state.email = email;
		},
		SET_USERNAME: (state, userName) => {
			state.userName = userName;
		},
		SET_INTRODUCTION: (state, introduction) => {
			state.introduction = introduction;
		},
		SET_SETTING: (state, setting) => {
			state.setting = setting;
		},
		SET_STATUS: (state, status) => {
			state.status = status;
		},
		SET_NAME: (state, name) => {
			state.name = name;
		},
		SET_AVATAR: (state, avatar) => {
			state.avatar = avatar;
		},
		SET_ROLES: (state, roles) => {
			state.roles = roles;
		},
		LOGIN_SUCCESS: () => {
			console.log('login success')
		},
		LOGOUT_USER: state => {
			state.user = '';
		}
	},

	actions: {
		// 邮箱登录
		LoginByEmail({ commit }, userInfo) {
			console.log(userInfo);
			console.log(Vue);
			let email = userInfo.email.trim();
			let passWord = userInfo.password
			//    console.log(userInfo.email)
			// return new Promise((resolve, reject) => {
			// function loginByEmail(userName, passWord) {
			// console.log(userName,passWord);
			let queVal = {
				userName: email,
				passWord: passWord
			};
			let data;
			return new Promise((resolve, reject) => {
				API.post(loginUrl, queVal).then(response => {
					Cookies.set('Admin-Token', response.token);
						commit('SET_TOKEN', response.token);
						commit('SET_EMAIL', queVal.email);
						resolve(response)
				}).catch(error => {
					reject(error)
				})
			})


			// loginByEmail(email, userInfo.password).then(response => {
			// 	// let str  = response.data;
			// 	let data = decrypt(response.data);
			// 	console.log(data);
			// 	// console.log(reject)
			// 	// let token = 'agent'
			// 	Cookies.set('Admin-Token', data.token);
			// 	commit('SET_TOKEN', data.token);
			// 	// Cookies.set('Admin-Token', data.result.deviceToken);
			// 	// commit('SET_TOKEN', data.result.deviceToken);
			// 	commit('SET_EMAIL', email);
			// 	if(data.code == 200) {
			// 		resolve(data);
			// 	}else{
			// 		reject(data);
			// 	}

			// })
			// });
		},


		// 获取用户信息
		GetInfo({ commit, state }) {
			// console.log(state.token)
			let reqVal = {
				token: state.token
			}
			return new Promise((resolve, reject) => {
				API.post(getInfoUrl, reqVal).then(response => {
					// console.log(response);
					commit('SET_ROLES', response.role);
					commit('SET_NAME', response.au.trueName);
					commit('SET_UID', response.au.userId);
					commit('SET_USERNAME', response.au.userName);
					// commit('SET_AVATAR', response.avatar);
					// 	commit('SET_USERNAME', response.au.userName);
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})




			// return new Promise((resolve, reject) => {
			// 	getInfo(state.token).then(response => {
			// 		// console.log(response);
			// 		let data = decrypt(response.data);
			// 		console.log(data);
			// 		commit('SET_ROLES', data.role);
			// 		commit('SET_NAME', data.au.trueName);
			// 		// commit('SET_AVATAR', data.avatar);
			// 		commit('SET_UID', data.au.userId);
			// 		commit('SET_USERNAME', data.au.userName);

			// 		// commit('SET_INTRODUCTION', data.introduction);
			// 		resolve(data);
			// 	}).catch(error => {
			// 		reject(error);

			// 	});
			// });
		},

		// 第三方验证登录
		LoginByThirdparty({ commit, state }, code) {
			return new Promise((resolve, reject) => {
				commit('SET_CODE', code);
				loginByThirdparty(state.status, state.email, state.code, state.auth_type).then(response => {
					commit('SET_TOKEN', response.data.token);
					Cookies.set('Admin-Token', response.data.token);
					resolve();
				}).catch(error => {
					reject(error);
				});
			});
		},


		// 登出
		LogOut({ commit, state }) {
			return new Promise((resolve, reject) => {
				let data = {
					token:state.token
				}
				API.post(logOut).then(response => {
					Cookies.remove('Admin-Token');
					commit('SET_TOKEN', '');
					commit('SET_ROLES', '');
					resolve(response);
				}).catch(error => {
					reject(error);
				})
				// logout(state.token).then(() => {
				// 	commit('SET_TOKEN', '');
				// 	commit('SET_ROLES', '');

				// 	// commit('SET_ROLES', []);
				// 	Cookies.remove('Admin-Token');
				// 	console.log('123123');
				// 	console.log(datas.roles);
				// 	resolve();
				// }).catch(error => {
				// 	reject(error);
				// });
			});
		},

		// 前端 登出
		FedLogOut({ commit }) {
			return new Promise(resolve => {
				commit('SET_TOKEN', '');
				Cookies.remove('Admin-Token');
				alert("has logout");
				resolve();
			});
		},

		// 动态修改权限
		ChangeRole({ commit }, role) {
			return new Promise(resolve => {
				commit('SET_ROLES', [role]);
				commit('SET_TOKEN', role);
				Cookies.set('Admin-Token', role);
				resolve();
			})
		}
	}
};



let alltrim = (str) => {
	//return str.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
	return str.replace(/[\r\n]/g, "");
}
export default user;
