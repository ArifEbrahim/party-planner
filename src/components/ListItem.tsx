import React from 'react'
import { Person } from '../models/person'

type Props = {
  person: Person
}

const ListItem: React.FC<Props> = props => {
  return (
    <li className="List">
      <div className="List-header">
        <img className="List-img" src={props.person.url} alt="" />
        <h2>{props.person.name}</h2>
      </div>
      <p>{props.person.age} years old</p>
      <p className="List-note">{props.person.note}</p>
    </li>
  )
}

export default ListItem
