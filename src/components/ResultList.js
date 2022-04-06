import React from 'react'
import Result from './Result'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

function ResultList(props) {
  return (
    <Container className="results">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>gid</th>
            <th>name</th>
            <th>genres</th>
            <th>platforms</th>
            <th>release_dates</th>
            <th>cover</th>
            <th>summary</th>
          </tr>
        </thead>
        <tbody>
          {props.empty ? <tr><td colSpan="7">No Result</td></tr> :
            props.loading ? <tr><td colSpan="7">Loading...</td></tr> :
              props.games.map(function (game) {
                return (
                  <Result key={game.id} game={game} />
                )
              })
          }
        </tbody>
      </Table>
    </Container >
  )
}

export default ResultList