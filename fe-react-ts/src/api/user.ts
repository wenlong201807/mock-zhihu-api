/**
 * user api管理
 */
import request from './request';

export const loginApi = (params) => {
  return request({
    url: '/users/login',
    method: 'post',
    data: params,
    mock: false,
  });
};
