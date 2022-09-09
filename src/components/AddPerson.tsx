import React, { useState } from 'react'
import { Person } from '../models/person'

type Props = {
  onAddPerson: (person: Person) => void
}

const INITIAL_STATE: Person = {
  name: '',
  age: 0,
  url: '',
  note: ''
}

const AddPerson = (props: Props) => {
  const [input, setInput] = useState<Person>(INITIAL_STATE)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      alert('Check inputs')
    }
    props.onAddPerson(input)
    setInput(INITIAL_STATE)
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.url}
        name="url"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  )
}

export default AddPerson
