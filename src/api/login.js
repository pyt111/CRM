import Vue from 'vue';
import asd from 'utils/fetch';
import qs from 'qs'
import {loginUrl,getInfoUrl} from 'api/url'


export function loginByEmail(userName, passWord) {
  // console.log(userName,passWord);
  console.log('1111111111111111111111111111111111111');
  console.log(Vue);
  const data = {
    userName:userName,
    passWord:passWord
  };
  // console.log(data);
  return asde({
    //  url: 'http://192.168.1.30:8091/app2/index/test.do',
    url:loginUrl,
    // url:'/login/loginbyemail',
    method: 'post',
    data:qs.stringify(data)
    // params:{userName:userName,passWord:passWord}
  });
}

export function logout() {
  return asd({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  let data = {
    token
  }
  return asd({
    url: getInfoUrl,
    // url: '/user/info',
    method: 'post',
    data:qs.stringify(data)
  });
}

export default {}