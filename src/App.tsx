import React, { useState } from 'react'
import List from './components/List'
import { Person } from './models/person'
import './App.css'
import AddPerson from './components/AddPerson'

function App() {
  const [people, setPeople] = useState<Person[]>([])

  const addPersonHandler = (person: Person) =>
    setPeople(prevState => prevState.concat(person))

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddPerson onAddPerson={addPersonHandler} />
    </div>
  )
}

export default App
