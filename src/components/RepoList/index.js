import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Segment } from 'semantic-ui-react';

// imports locaux
import CardGrid from './CardGrid';
import CardList from './CardList';


// Composant
const RepoList = ({ changeDisplayMode, displayMode, listRepoData }) => (
  <React.Fragment>
    <Button.Group>
      <Button onClick={changeDisplayMode('grid')} positive={displayMode === 'grid'}>grille</Button>
      <Button.Or />
      <Button onClick={changeDisplayMode('list')} positive={displayMode === 'list'}>liste</Button>
    </Button.Group>
    <Segment>
      <Card.Group centered>
        {listRepoData.map((item) => {
          // Si le mode d'affichage est grid
          if (displayMode === 'grid') {
            return (
              <CardGrid key={item.id} {...item} />
            );
          }
          // Si le mode d'affichage est list
          return (
            <CardList key={item.id} {...item} />
          );
        })}
      </Card.Group>
    </Segment>
  </React.Fragment>
);

// Validation des props
RepoList.propTypes = {
  listRepoData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  displayMode: PropTypes.string.isRequired,
  changeDisplayMode: PropTypes.func.isRequired,
};

// export
export default RepoList;
