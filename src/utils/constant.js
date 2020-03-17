//const ENV = 'PROD';//正式
const ENV = 'DEV'; //测试

const PROD_API_URL = 'https://iwsapi.51autoshop.com/api/';
const DEV_API_URL = 'https://iwsapi.51autoshop.com/api/';

export const configApi = {
  ENV: ENV,
  baseUrl: ENV == 'DEV' ? DEV_API_URL : PROD_API_URL
}