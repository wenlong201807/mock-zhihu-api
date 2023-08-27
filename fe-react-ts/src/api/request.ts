/**
 * axios二次封装
 */
import axios from 'axios';
import config from '@/config';
import {getStorage} from '@/utils';

// const TOKEN_INVALID = 'Token认证失败，请重新登录';
// const NETWORK_ERROR = '网络请求异常，请稍后重试';

// 创建axios实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
});

// 请求拦截
service.interceptors.request.use((config_) => {
  config_.headers.setAccept('application/json, text/plain, */*');

  const { token = '' } = getStorage('userInfo') || {};
  if (
    window &&
    !window.location.pathname.includes('account') &&
    token
  ) {
    config_.headers['Authorization'] = 'Bearer ' + token;
  }

  return config_;
});

// 响应拦截
service.interceptors.response.use(
  (res) => {
    return res;
    // const { code, data, msg } = res.data;
    // if (code === 200) {
    //   return data;
    // } else if (code === 500001) {
    //   // ElMessage.error(TOKEN_INVALID);
    //   setTimeout(() => {
    //     // router.push('/login');
    //   }, 500);
    //   return Promise.reject(TOKEN_INVALID);
    // }
  },
  (error) => {
    if (error.message === 'Network Error' || error.message.includes('5')) {
      // 跨域
      // ElMessage.error(error.message || NETWORK_ERROR);
    }

    // 处理 503 网络异常
    if (error.response.status === 503) {
      // ElMessage.error(error.response || NETWORK_ERROR);
    }

    return Promise.reject(new Error(error));
  }
);
/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request(options) {
  options.method = options.method || 'get';
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }
  // mock 有两个配置，【垫底】一个全局统一配置，【优先级最高】一个是独立接口配置
  let isMock = config.mock;
  if (typeof options.mock != 'undefined') {
    isMock = options.mock;
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }

  return service(options);
}

export default request;
