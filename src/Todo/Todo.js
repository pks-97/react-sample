import React, { Component } from 'react';
import InputComponent from './component/InputComponent';
import ListComponent from './component/ListComponent';
import { Container } from './styles.Todo';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      listData: [],
    };
  }

  onTextFieldChange = event => {
    console.log(event.target.value);

    this.setState({
      ...this.state,
      value: event.target.value,
    });

    // this.setState(prevState => {
    //   return { ...prevState, value: event.target.value };
    // });
  };

  onAdd = () => {
    const list = this.state.listData;
    const { value } = this.state;

    this.setState({
      ...this.state,
      listData: [...list, value],
    });
  };

  render() {
    const { value, listData } = this.state;
    // console.log(this.state);

    return (
      <Container>
        <InputComponent
          value={value}
          onTextFieldChange={this.onTextFieldChange}
          onAdd={this.onAdd}
        />
        <ListComponent listData={listData} />
      </Container>
    );
  }
}

export default Todo;
