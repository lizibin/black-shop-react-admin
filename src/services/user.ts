import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  //return request('/api/currentUser');
  return {
    userid: localStorage.getItem('user_id'),
    name: localStorage.getItem('username'),
  };
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
