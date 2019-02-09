import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col className="mx-auto">
            <h4 className="display-4">Homepage</h4>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home;  