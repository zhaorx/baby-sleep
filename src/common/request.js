import { baseUrl } from '@/config';
import store from '@/store/store';
import Qs from 'qs';
import mpx from '@mpxjs/core';
import { toPureObject } from '@mpxjs/core';
import mpxFetch from '@mpxjs/fetch';

mpx.use(mpxFetch);

export default function install(proxyMPX) {
  // get请求
  proxyMPX.prototype.httpGet = (url, params = {}) => {
    console.log(store.getters.openid, 'store.getters.token');
    return mpx.xfetch
      .fetch({
        method: 'GET',
        url: baseUrl + url,
        params: params,
        headers: {
          Authorization: store.getters.token
        }
      })
      .then(res => {
        if (res.data.retcode == 2000000) {
          return Promise.resolve(res.data.result);
        } else if (res.data.retcode == 5001001) {
          // wx.redirectTo({
          //   url: '/pages/user/register'
          // });

          wx.showToast({
            title: '重定向登录注册',
            icon: 'none'
          });
        } else {
          wx.showToast({
            title: res.data.msg,
            duration: 2000,
            icon: 'none'
          });
          return Promise.reject(res.data.msg);
        }
      });
  };

  // post请求
  proxyMPX.prototype.httpPost = (url, data = {}) => {
    return mpx.xfetch
      .fetch({
        method: 'POST',
        url: baseUrl + url,
        data: Qs.stringify(mpx.toPureObject(data)),
        headers: {
          Authorization: store.getters.token,
          'content-type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res => {
        if (res.data.retcode == 2000000) {
          return Promise.resolve(res.data.result);
        } else if (res.data.retcode == 5001001) {
          // wx.redirectTo({
          //   url: '/pages/user/register'
          // });

          wx.showToast({
            title: '重定向登录注册',
            icon: 'none'
          });
        } else if (res.data.retcode == 5001002) {
          // wx.reLaunch({
          //   url: '/pages/home/index'
          // });

          wx.showToast({
            title: '重定向首页',
            icon: 'none'
          });
        } else {
          wx.showToast({
            title: res.data.msg,
            duration: 2000,
            icon: 'none'
          });
          return Promise.reject(res.data.msg);
        }
      });
  };

  /**
   * 上传图片请求
   * filepath：小程序wx.chooseImage 获得的filepath
   * type：1用户头像 2店铺图片
   * url： 后端获取oss凭证接口，默认'/common/upload'
   */
  proxyMPX.prototype.uploadImg = async (filePath, type = 2, url = '/common/upload') => {
    if (!filePath) {
      return;
    }

    const data = { type: type };
    try {
      const res = await mpx.xfetch.fetch({
        method: 'POST',
        url: baseUrl + url,
        headers: {
          Authorization: store.getters.token,
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: Qs.stringify(data)
      });

      const retcode = parseInt(res.data.retcode);
      if (retcode === 2000000) {
        const result = res.data.result;

        return new Promise((resolve, reject) => {
          wx.uploadFile({
            url: result.host,
            filePath: filePath,
            name: 'file',
            formData: {
              name: filePath,
              key: result.dir,
              OSSAccessKeyId: result.accessid,
              policy: result.policy,
              signature: result.signature,
              expire: result.expire,
              callback: result.callback,
              dir: 'admin/'
            },
            success(res) {
              const _result = JSON.parse(res.data);
              resolve(result.host + '/' + _result.url);
            },
            fail(res) {
              reject(res);
            }
          });
        });
      }

      return Promise.resolve();
    } catch (error) {
      console.log(error);
    }
  };
}
