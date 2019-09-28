import request from '@/utils/request';
import { FormDataType } from './index';

export async function fakeAccountLogin(params: FormDataType) {
  const password = params.password; // 加密
  // 登录的链接
  return request('/server/oauth/token', {
    method: 'POST',
    data: {},
    headers: {
      Authorization: `Basic YmxhY2tzaG9wOmJsYWNrc2hvcEAxMjM=`,
    },
    params: {
      ...params,
      password,
      grant_type: 'password',
      scope: 'server',
    },
  });
  // return {
  //   access_token: 'token',
  //   user_id: 1,
  //   username: 'user',
  // };
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
