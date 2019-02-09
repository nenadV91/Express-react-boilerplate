import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Card, CardTitle, CardText} from 'reactstrap';
import axios from 'axios';


class Articles extends Component {
  state = {
    articles: []
  }

  componentWillMount = () => {
    axios.get('/api/articles')
    .then(res => {
      this.setState({articles: res.data})
    }).catch(err => {
      console.log(err)
    })
  }

  renderArticles = () => {
    return this.state.articles.map((article, id) => {
      return <Col key={id} md={{size: 8, offset: 2}} xl={{size: 6, offset: 3}}>
        <Card className="m-2" body>
          <CardTitle>{article.title}</CardTitle>
          <CardText>{article.body}</CardText>
        </Card>
      </Col>
    })
  }

  render() {
    return (
      <Container>
        <h4 className="display-4 text-center">Articles page</h4>
        <Row>{this.renderArticles()}</Row>
      </Container>
    );
  }
}

export default Articles
