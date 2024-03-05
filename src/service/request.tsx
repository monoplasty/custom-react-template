import { BASE_URL, TIME_OUT } from "@/config";
import NProgress from "@/config/n_progress";
import { message } from "antd";
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpRequest {
  instance: AxiosInstance;

  public constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => {
        NProgress.start();
        // 添加token
        return config;
      },
      (error) => Promise.reject(error),
    );

    this.instance.interceptors.response.use(
      (response) => {
        NProgress.done();
        const { data } = response;
        // * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        if (data.code && data.code !== 200) {
          message.error(data.msg);
          return Promise.reject(data);
        }
        return data;
      },
      (error) => {
        NProgress.done();
        message.error("服务出错！");
        return Promise.reject(error);
      },
    );
  }

  // * 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<API.ResDataType<T>> {
    return this.instance.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object, _object = {}): Promise<API.ResDataType<T>> {
    return this.instance.post(url, params, _object);
  }
  put<T>(url: string, params?: object, _object = {}): Promise<API.ResDataType<T>> {
    return this.instance.put(url, params, _object);
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<API.ResDataType<T>> {
    return this.instance.delete(url, { params, ..._object });
  }
}

const config = {
  // 默认地址请求地址，在 .env 开头文件中修改
  baseURL: BASE_URL,
  // 设置超时时间（10s）
  timeout: TIME_OUT,
  // 跨域时候允许携带凭证
  withCredentials: true,
};
const httpClient = new HttpRequest(config);

export default httpClient;
