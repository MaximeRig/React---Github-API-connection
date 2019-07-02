import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';


// Composant
const CardGrid = ({ owner, name, description }) => {
  const { avatar_url: avatarUrl, login } = owner;
  return (
    <Card>
      <Image src={avatarUrl} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{login}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

// Validation des props
CardGrid.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
};
// export
export default CardGrid;
