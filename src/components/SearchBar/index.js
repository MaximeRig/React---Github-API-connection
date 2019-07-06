import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Segment } from 'semantic-ui-react';


// Composant
const SearchBar = ({
  loading,
  searchInputValue,
  onChangeInput,
  submitFormRepo,
}) => {
  const changeHandler = (event) => {
    const { value } = event.target;
    onChangeInput(value);
  };

  const submitHandler = () => {
    submitFormRepo(searchInputValue);
  };

  return (
    <Segment>
      <Form inverted onSubmit={submitHandler}>
        <Form.Field>
          <Input value={searchInputValue} onChange={changeHandler} loading={loading} placeholder="Recherche de repository GitHub" />
        </Form.Field>
      </Form>
    </Segment>
  );
}

// Validation
SearchBar.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  submitFormRepo: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// export
export default SearchBar;
