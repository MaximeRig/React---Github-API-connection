// NPM import
import { connect } from 'react-redux';

// Locals imports
import RepoList from 'src/components/RepoList';

import { ChangeDisplayMode } from 'src/store/reducer';

const mapStateToProps = state => ({
  listRepoData: state.listRepoData,
  displayMode: state.displayMode,
});

const mapDispatchToProps = dispatch => ({
  changeDisplayMode: mode => () => {
    dispatch(ChangeDisplayMode(mode));
  },
});

// connection
const RepoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList);

// export
export default RepoListContainer;
