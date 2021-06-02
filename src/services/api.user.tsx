import {GET} from './index';
import {IRecordInfoUser} from '../redux/reducers/ReducerInfoUser';

const getInfoUser = async (name: string) => {
  const response: IRecordInfoUser = await GET('users/' + name);
  return response;
};
export {getInfoUser};
