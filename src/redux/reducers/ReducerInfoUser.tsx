import {type} from '../actions';
import produce from 'immer';

export interface IRecordInfoUser {
  public_repos: number;
  login: string;
}
export interface IStateRecordInfoUser {
  data: IRecordInfoUser;
  loading: boolean;
}
const initState: IStateRecordInfoUser = {
  data: {public_repos: 0, login: ''},
  loading: false,
};
const ReducerInfoUser = (
  state: IStateRecordInfoUser = initState,
  action: {type: string; payload: IRecordInfoUser},
) => {
  switch (action.type) {
    case type.REQUEST_INFO_USER:
      return produce(state, draft => {
        draft.loading = true;
      });
    case type.REQUEST_INFO_USER_SUCCESS:
      return produce(state, draft => {
        draft.data = action.payload;
        draft.loading = false;
      });
    case type.REQUEST_INFO_USER_ERROR:
      return produce(initState, draft => {
        draft;
      });
    default: {
      return state;
    }
  }
};

export default ReducerInfoUser;
