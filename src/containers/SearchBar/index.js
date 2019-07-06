// NPM import
import { connect } from 'react-redux';

// locals imports
import SearchBar from 'src/components/SearchBar';

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    searchInputValue: state.searchInputValue,
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (inputValue) => {
      dispatch({
        type: 'CHANGE_INPUT',
        inputValue,
      });
    },
  };
};

// connect
const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

// export
export default SearchBarContainer;
