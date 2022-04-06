import React from 'react'

function Result(props) {
  return (
    <tr>
      <td>{props.game.gid}</td>
      <td>{props.game.name}</td>
      <td>{props.game.genres}</td>
      <td>{props.game.platforms}</td>
      <td>{props.game.release_dates}</td>
      {props.game.cover_url.length === 0 ? <td>No cover</td> : <td><img src={props.game.cover_url} alt={props.game.name} /></td>}
      <td>{props.game.summary}</td>
    </tr>
  )
}

export default Result