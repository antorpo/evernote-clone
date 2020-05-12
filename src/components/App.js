import React, { Component } from "react";
import SideBar from "./sidebar/SideBar";
import Editor from "./editor/Editor";
import "./App.css";

const firebase = require("firebase");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
      notesLoading: false,
    };
  }

  /*
    Collection -> Similar a una tabla una BD.
    Snapshot -> Cada vez que actualizamos una coleccion en firebase 
    se llama este metodo al cual le podemos pasar como parametro una funcion, 
    accediendo a los elementos disponibles.

  */
  componentDidMount = () => {
    this.setState({
      notesLoading: true,
    });

    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;

          return data;
        });

        this.setState({
          notes,
          notesLoading: false,
        });
      });
  };

  selectNote = (note, index) => {
    this.setState({ selectedNote: note, selectedNoteIndex: index });
    console.log(this.state);
  };

  deleteNote = (note) => {
    if (window.confirm(`Are you sure to delete ${note.title}?`)) {
      // Delete query.
    }
  };

  render() {
    const { selectedNote, selectedNoteIndex, notes, notesLoading } = this.state;
    return (
      <div className="app-container">
        <SideBar
          selectedNoteIndex={selectedNoteIndex}
          notes={notes}
          notesLoading={notesLoading}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        />
        {selectedNote ? (
          <Editor
            selectedNote={selectedNote}
            selectedNoteIndex={selectedNoteIndex}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
