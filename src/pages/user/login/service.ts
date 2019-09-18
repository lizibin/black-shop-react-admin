import request from '@/utils/request';
import { FormDataType } from './index';

export async function fakeAccountLogin(params: FormDataType) {
  // const password = params.password; // 加密
  // // 登录的链接
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
