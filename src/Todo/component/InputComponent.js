import React from 'react';
import { Container } from './styles.InputComponent';

const InputComponent = ({ value, onTextFieldChange, onAdd }) => {
  return (
    <Container>
      Todo: <input type="text" value={value} onChange={onTextFieldChange} />
      <button onClick={onAdd}>Add me</button>
    </Container>
  );
};

export default InputComponent;
