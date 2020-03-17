import axios from 'axios';
import {MessageBox, Toast, Indicator} from 'mint-ui';
axios.defaults.timeout = 50000//默认请求超时时间
axios.defaults.baseURL = "/api";
axios.defaults.headers.common["Authorization"] = 'h3YDMD+Zm41bkMmg2FrpPVrfjW8y/GDsaFwNpyxxYqFETMwPM4LsNpJlML/yCILpGd9ukY3/cH/bZzwOQ5Sl0yMhj+TmoC+QAbUvh3gFwUA='

// get
export function getHttp (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, data)
        .then(response => {
          resolve(response.data)
          Indicator.close() // // 关闭动画
        })
        .catch(err => {
          reject(err)
          Indicator.close() // // 关闭动画
          MessageBox.alert('message', err)
        })
    })
  }


  // post
  export function postHttp (url, data = {}) {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(response => {
          if (response.status == 200) {
            resolve(response.data)
            Indicator.close();   // 关闭动画
          } else {
            Toast(response.data.msg)
          }
        }, (err) => {
          reject(err)
          Indicator.close() // // 关闭动画
        })
    })
}
