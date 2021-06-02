import axios from 'axios';

const baseUrl: string = 'https://api.github.com/';
export default baseUrl;

interface Iconfig {
  method: 'GET' | 'POST';
  url: string;
}
const GET = async (url: string) => {
  const config: Iconfig = {method: 'GET', url: baseUrl + url};
  try {
    const res = await axios(config);
    if (res.status) {
      return res.data;
    } else {
      console.log('Có lỗi xảy ra');
      return [];
    }
  } catch (e) {
    console.log(e);
    return [];
  }
};

export {GET};
export * from './api.repos';
export * from './api.user';
