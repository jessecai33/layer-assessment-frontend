import React from 'react'
import axios from 'axios'

import SearchForm from './SearchForm'
import ResultList from './ResultList'
import Container from 'react-bootstrap/Container'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
      loading: false,
      empty: false,
      params: {
        'query': ''
      }
    }
  }

  updateResults = (params) => {
    this.setState({ loading: true, empty: false })
    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/games/search',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
      },
      params: params
    })
      .then(response => {
        this.setState({ games: response.data, loading: false, empty: response.data === null })
      })
  }

  render() {
    return (
      <Container>
        <SearchForm updateResults={this.updateResults} params={this.state.params} />
        <ResultList games={this.state.games} loading={this.state.loading} empty={this.state.empty} />
      </Container>
    )
  }
}

export default Search;