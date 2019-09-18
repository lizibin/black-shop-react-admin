import request from 'umi-request';

export interface LoginParamsType {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  const password = params.password; // 加密
  // 登录的链接
  // return request('/server/oauth2/auth', {
  //   method: 'POST',
  //   data: {},
  //   params: {
  //     ...params,
  //     password,
  //     rant_type: "password",
  //     scope: "server"
  //   }
  // });
  return {
    access_token: 'token',
    user_id: 1,
    username: 'user',
  };
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
