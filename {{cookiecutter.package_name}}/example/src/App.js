import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Example } from '{{cookiecutter.package_name}}';

class App extends Component {
  render() {
    return (
      <Container>
        <Example>Ola mundo!</Example>
      </Container>
    )
  }
}

export default App;
