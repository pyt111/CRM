import asd from 'utils/fetch';

export function loginByEmail(email, password) {
  const data = {
    email,
    password
  };
  return asd({
    url: '/login/loginbyemail',
    method: 'post',
    data
  });
}

export function logout() {
  return asd({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return asd({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

export default {}