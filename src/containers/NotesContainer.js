import React from "react"
import Note from "../components/Note"

class NotesContainer extends React.Component {
  state = { notes: [] }

  componentDidMount() {
    fetch("http://localhost:3000/notes")
      .then(response => response.json())
      .then((notes) => this.setState({ notes: notes }))
  }

  renderNotes = () => {
      return this.state.notes.map((note) => <Note key={note.id} note={note} />)
  }

  render() {
      return (
          <ul>
              {this.renderNotes()}
          </ul>
      )
  }
}

export default NotesContainer