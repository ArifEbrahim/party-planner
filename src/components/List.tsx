import React from 'react'
import { Person } from '../models/person'
import ListItem from './ListItem'

type Props = {
  people: Person[]
}

const List: React.FC<Props> = props => {
  const renderList = (): JSX.Element[] =>
    props.people.map(person => <ListItem person={person} />)

  return <ul>{renderList()}</ul>
}

export default List
