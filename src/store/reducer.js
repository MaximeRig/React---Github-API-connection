
// initial state
const initialState = {
  loading: false,
  searchInputValue: '',
  listRepoData: [],
  view: 'emptySearch',
};

// Action types
const CHANGE_INPUT = 'CHANGE_INPUT';
const START_LOADING = 'START_LOADING';
const LOAD_DATA = 'LOAD_DATA';
const ERROR_LOADING = 'ERROR_LOADING';

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        // return all properties from state
        ...state,
        // return new value for searchInputValue
        searchInputValue: action.inputValue,
      };
    case START_LOADING:
      return {
        ...state,
        loading: action.loadingOn,
      };

    case LOAD_DATA:
      return {
        ...state,
        listRepoData: action.data.items,
        loading: false,
        view: 'findRepos',
      };

    case ERROR_LOADING:
      return {
        ...state,
        view: 'errorLoading',
      };

    default:
      return state;
  }
};

// Action creators
export const changeInput = inputValue => ({
  type: CHANGE_INPUT,
  inputValue,
});

export const loadingOn = () => ({
  type: START_LOADING,
  loadingOn: true,
});

// found this solution from
// https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594
export const getRepos = (inputValue) => {
  return dispatch => fetch(`https://api.github.com/search/repositories?q=${inputValue}`)
    .then(res => res.json())
    .then(
      data => (dispatch({ type: LOAD_DATA, data })),
      error => (dispatch({ type: ERROR_LOADING, error })),
    );
};

// Selectors

// exports
export default reducer;
