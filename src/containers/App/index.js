// NPM import
import { connect } from 'react-redux';

// locals imports
import App from 'src/components/App';


const mapStateToProps = state => ({
  view: state.view,
});

const mapDispatchToProps = {};

// connection
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// export
export default AppContainer;
