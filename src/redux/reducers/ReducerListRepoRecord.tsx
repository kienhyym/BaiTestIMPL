import {type} from '../actions';
import produce from 'immer';
import {store} from '../stores';

export interface IRecordRepos {
  id: string;
  name: string;
  stargazers_count: number;
}
export type IResultArrayIRecordRepos = Array<IRecordRepos> | [];
export interface IStateResultArrayIRecordRepos {
  data: IResultArrayIRecordRepos;
  loading: boolean;
  page: number;
  total: number;
}
const initState: IStateResultArrayIRecordRepos = {
  data: [],
  loading: false,
  page: 1,
  total: 0,
};
const ReducerListRepoRecord = (
  state: IStateResultArrayIRecordRepos = initState,
  action: {type: string; payload: IResultArrayIRecordRepos},
) => {
  switch (action.type) {
    case type.REQUEST_LIST_REPO_RECORD:
      return produce(state, draft => {
        draft.loading = true;
      });
    case type.REQUEST_LIST_REPO_RECORD_SUCCESS:
      return produce(state, draft => {
        draft.data = action.payload;
        draft.loading = false;
        draft.total = action.payload.length;
        draft.page = 1;
      });
    case type.REQUEST_LIST_REPO_RECORD_ERROR:
      return produce(initState, draft => {
        draft;
      });
    case type.REQUEST_LOADMORE_LIST_REPO_RECORD:
      return produce(state, draft => {
        draft.data = [...draft.data, ...action.payload];
        draft.loading = false;
        draft.page = draft.page + 1;
        draft.total = state.data.length + action.payload.length;
      });
    default: {
      return state;
    }
  }
};

export default ReducerListRepoRecord;
