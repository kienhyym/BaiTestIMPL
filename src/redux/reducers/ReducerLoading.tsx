import {type} from '../actions';
const ReducerLoading = (state: boolean = false, action: {type: string}) => {
  switch (action.type) {
    case type.LOADING_SUCCESS:
      return true;
    case type.LOADING_ERROR:
      return false;
    default: {
      return state;
    }
  }
};

export default ReducerLoading;
