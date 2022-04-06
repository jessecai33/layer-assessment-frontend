import React from 'react'
import SearchBar from './SearchBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Container>
        <Row>
          &nbsp;
        </Row>
        <Row>
          <Col md={8}>
            <SearchBar updateResults={this.props.updateResults} params={this.props.params} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SearchForm