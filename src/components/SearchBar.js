import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  handleInput = (e, fn, params) => {
    e.preventDefault()
    params["query"] = this.state.query
    fn(params)
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleInput(e, this.props.updateResults, this.props.params)}>
        <Form.Group as={Row} className="mb-3" controlId="SearchForm.SearchQuery">
          <Form.Label column md="2">Search:</Form.Label>
          <Col md="8">
            <Form.Control type="text" name="query" placeholder="Elden Ring" value={this.state.query} onChange={(e) => this.setState({ query: e.target.value })} />
          </Col>
          <Col md="2">
            <Button variant="primary" type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    )
  }
}

export default SearchBar