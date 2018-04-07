import { param2Obj } from 'utils';
const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: 'Super Admin',
    uid: '001'
  },
  admins: {
    role: ['admins'],
    token: 'admins',
    introduction: '我是老板',
    name: 'Super Admins',
    uid: '0011'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是团队经理',
    name: 'Normal Editor',
    uid: '002'
  },
  financial: {
    role: ['financial'],
    token: 'financial',
    introduction: '我是理财师',
    name: '我是理财师',
    uid: '003'
  },
  salesman: {
    role: ['salesman'],
    token: 'salesman',
    introduction: '我是业务员',
    name: '我是业务员',
    uid: '004'
  },
  agent: {
    role: ['agent'],
    token: 'agent',
    introduction: '我是经销商',
    name: '经销商',
    uid: '005'
  }
}

export default {
  loginByEmail: config => {
    console.log(config.body);
    let userName = config.body.userName;
    // const { email } = JSON.parse(config.body);
    // console.log(email.split('@')[0])
    // return userMap[email.split('@')[0]];
    let data = {
      datas: userMap[userName],
      code: 0,
      message: '成功获取routerMap'
    }
    return data;
  },
  getInfo: config => {
    const { token } = param2Obj(config.url);
    console.log(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return Promise.reject('a');
    }
  },
  logout: () => 'success'
};
