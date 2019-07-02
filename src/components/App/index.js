import React from 'react';
import axios from 'axios';

// Imports locaux
import './app.scss';
import SearchBar from 'src/components/SearchBar';
import RepoList from 'src/components/RepoList';


class App extends React.Component {
  state = {
    view: 'emptySearch',
    loading: false,
    searchInputValue: '',
    listRepoData: [],
    displayMode: 'grid',
  }

  // Ajoute les caractères au state searchInputValue
  onChangeInput = (value) => {
    // on modifie le state avec la valeur de l'input
    this.setState({
      searchInputValue: value,
    });
  }

  // Erreur lors de la requête Ajax
  showError = (error) => {
    console.log(error.message);
  }

  // En cas de succès de la requête Ajax
  fetchRepo = (response) => {
    // on récupère les données
    const { items } = response.data;
    // on renseigne listRepoData avec la réponse
    this.setState({
      view: 'findRepos',
      listRepoData: items,
      loading: false,
    });
  }

  // Méthode de submit du formulaire
  submitFormRepo = () => {
    // passer le login de l'input à true
    this.setState({
      loading: true,
    });
    // je récupère le state searchInputValue
    const { searchInputValue } = this.state;
    // requête Ajax vers l'API
    axios.get(`https://api.github.com/search/repositories?q=${searchInputValue}`)
      .then(this.fetchRepo)
      .catch(this.showError);
  }

  // Changement de l'affichage des repos
  changeDisplayMode = (mode) => {
    return () => {
      // Changement du state displayMode
      this.setState({
        displayMode: mode,
      });
    }
  }

  render() {

    // Envoi des props
    const {
      view,
      loading,
      searchInputValue,
      listRepoData,
      displayMode,
    } = this.state;

    return (
      <div id="app">
        <SearchBar
          loading={loading}
          submitFormRepo={this.submitFormRepo}
          onChangeInput={this.onChangeInput}
          searchInputValue={searchInputValue}
        />
        {view === 'emptySearch' && (
          <div>Veuillez sasir votre recherche dans le champ ci-dessus</div>
        )}
        {view === 'findRepos' && (
          <RepoList changeDisplayMode={this.changeDisplayMode} displayMode={displayMode} listRepoData={listRepoData} />
        )}
      </div>
    );
  }
}

// Export
export default App;
