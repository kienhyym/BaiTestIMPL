import {getInfoUser, getListRepoRecord} from '../../services';
import {IRecordInfoUser} from '../reducers/ReducerInfoUser';
import {IResultArrayIRecordRepos} from '../reducers/ReducerListRepoRecord';
import {store} from '../stores';

export const type = {
  REQUEST_INFO_USER: 'REQUEST_INFO_USER',
  REQUEST_INFO_USER_SUCCESS: 'REQUEST_INFO_USER_SUCCESS',
  REQUEST_INFO_USER_ERROR: 'REQUEST_INFO_USER_ERROR',

  REQUEST_LIST_REPO_RECORD: 'REQUEST_LIST_REPO_RECORD',
  REQUEST_LIST_REPO_RECORD_SUCCESS: 'REQUEST_LIST_REPO_RECORD_SUCCESS',
  REQUEST_LIST_REPO_RECORD_ERROR: 'REQUEST_LIST_REPO_RECORD_ERROR',
  REQUEST_LOADMORE_LIST_REPO_RECORD: 'REQUEST_LOADMORE_LIST_REPO_RECORD',

  LOADING_SUCCESS: 'LOADING_SUCCESS',
  LOADING_ERROR: 'LOADING_ERROR',

  REQUEST_SEARCH: 'REQUEST_SEARCH',
};

export const fetchInfoUser = (name: string) => {
  try {
    return async (dispatch: any) => {
      await dispatch({type: type.REQUEST_INFO_USER});
      const recordInfoUser: IRecordInfoUser = await getInfoUser(name);
      await dispatch({
        type: type.REQUEST_INFO_USER_SUCCESS,
        payload: {public_repos: recordInfoUser.public_repos, login: name},
      });
    };
  } catch (error) {
    return (dispatch: any) => {
      return dispatch({
        type: type.REQUEST_INFO_USER_ERROR,
      });
    };
  }
};

export const fetchListRepoRecord = (name: string, pages: number) => {
  try {
    return async (dispatch: any) => {
      await dispatch({type: type.REQUEST_LIST_REPO_RECORD});
      const resultArrayIRecordRepos: IResultArrayIRecordRepos =
        await getListRepoRecord(name, pages);
      await dispatch({
        type: type.REQUEST_LIST_REPO_RECORD_SUCCESS,
        payload: resultArrayIRecordRepos,
      });
    };
  } catch (error) {
    return (dispatch: any) => {
      return dispatch({
        type: type.REQUEST_LIST_REPO_RECORD_ERROR,
      });
    };
  }
};

export const loadMoreListRepoRecord = () => {
  try {
    return async (dispatch: any) => {
      await dispatch({type: type.REQUEST_LIST_REPO_RECORD});
      const page = store.getState().ReducerListRepoRecord.page;
      const login = store.getState().ReducerInfoUser.data.login;
      const resultArrayIRecordRepos: IResultArrayIRecordRepos =
        await getListRepoRecord(login, page + 1);
      console.log('====================================');
      console.log(resultArrayIRecordRepos);
      console.log('====================================');
      await dispatch({
        type: type.REQUEST_LOADMORE_LIST_REPO_RECORD,
        payload: resultArrayIRecordRepos,
      });
    };
  } catch (error) {
    return (dispatch: any) => {
      return dispatch({
        type: type.REQUEST_LIST_REPO_RECORD_ERROR,
      });
    };
  }
};

export const searchRepo = (name: string) => {
  try {
    return async (dispatch: any) => {
      await dispatch({
        type: type.REQUEST_INFO_USER_ERROR,
      });
      await dispatch({
        type: type.REQUEST_LIST_REPO_RECORD_ERROR,
      });
      await dispatch({type: type.LOADING_SUCCESS});
      await Promise.all([
        dispatch(fetchListRepoRecord(name, 1)),
        dispatch(fetchInfoUser(name)),
      ]);
      await dispatch({type: type.LOADING_ERROR});
    };
  } catch (error) {
    return (dispatch: any) => {
      return dispatch({
        type: type.LOADING_ERROR,
      });
    };
  }
};
