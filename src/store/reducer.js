// initial state
const initialState = {
  loading: false,
  searchInputValue: '',
};

// Action types
const CHANGE_INPUT = 'CHANGE_INPUT';

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
    default:
      return state;
  }
};

// Action creators
export const changeInput = inputValue => ({
  type: CHANGE_INPUT,
  inputValue,
});

// Selectors

// exports
export default reducer;
