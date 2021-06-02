import {GET} from './index';
import {IResultArrayIRecordRepos} from '../redux/reducers/ReducerListRepoRecord';

const getListRepoRecord = async (name: string, page: number) => {
  const response: IResultArrayIRecordRepos = await GET(
    'users/' + name + '/repos?per_page=30&&page=' + String(page),
  );
  return response;
};
export {getListRepoRecord};

const getListStargazers = async (name: string, page: number) => {
  const response: IResultArrayIRecordRepos = await GET(
    'repos/' +
      name +
      '/gatsby-starter-ghost/stargazers?per_page=30&&page=' +
      String(page),
  );
  return response;
};
export {getListStargazers};
