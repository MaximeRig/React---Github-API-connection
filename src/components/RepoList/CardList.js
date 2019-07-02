import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// Composant
const CardList = ({ name }) => (
  <Card fluid header={name} />
);

// Validation des props
CardList.propTypes = {
  name: PropTypes.string.isRequired,
};
// export
export default CardList;
