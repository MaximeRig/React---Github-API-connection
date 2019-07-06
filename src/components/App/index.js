// NPM imports
import React from 'react';
import PropTypes from 'prop-types';

// locals imports
import './app.scss';

// import containers
import SearchBar from 'src/containers/SearchBar';
import RepoList from 'src/containers/RepoList';

// component
const App = ({ view }) => (
  <div id="app">
    <SearchBar />
    {view === 'emptySearch' && (
      <div>Veuillez sasir votre recherche dans le champ ci-dessus</div>
    )}
    {view === 'findRepos' && (
      <RepoList />
    )}
    {view === 'errorLoading' && (
      <div>Erreur lors du chargement des données, veuillez saisir une nouvelle recherche</div>
    )}
  </div>
);

// Validation
App.propTypes = {
  view: PropTypes.string.isRequired,
};

// export
export default App;
