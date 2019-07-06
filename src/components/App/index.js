// NPM imports
import React from 'react';

// locals imports
import './app.scss';

// import containers
import SearchBar from 'src/containers/SearchBar';

// component
const App = () => (
  <div id="app">
    <SearchBar />
    {/* {view === 'emptySearch' && (
      <div>Veuillez sasir votre recherche dans le champ ci-dessus</div>
    )}
    {view === 'findRepos' && (
      <RepoList />
    )} */}
  </div>
);


// export
export default App;
