import {combineReducers} from 'redux';
import ReducerInfoUser from './ReducerInfoUser';
import ReducerListRepoRecord from './ReducerListRepoRecord';
import ReducerLoading from './ReducerLoading';

const Reducers = combineReducers({
  ReducerInfoUser,
  ReducerListRepoRecord,
  ReducerLoading,
});
export default Reducers;
