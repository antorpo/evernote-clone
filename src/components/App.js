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

  deleteNote = async (note) => {
    const { notes, selectedNoteIndex } = this.state;

    if (window.confirm(`Are you sure to delete ${note.title}?`)) {
      const noteIndex = notes.indexOf(note);

      await this.setState({
        notes: notes.filter((_note) => _note !== note),
      });

      if (selectedNoteIndex === noteIndex) {
        this.setState({
          selectedNoteIndex: null,
          selectNote: null,
        });
      } else {
        notes.length > 1 ? this.selectNote(notes[selectedNoteIndex - 1], selectedNoteIndex-1) :
        this.setState({
          selectedNoteIndex: null,
          selectNote: null,
        });
      }

      await firebase.firestore().collection("notes").doc(note.id).delete();
    }
  };

  //  timestamp: Campo de trazabilidad para saber la ultima edicion.
  noteUpdate = (id, noteObj) => {
    firebase.firestore().collection("notes").doc(id).update({
      title: noteObj.title,
      body: noteObj.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  newNote = async (title) => {
    const note = {
      title: title,
      body: "",
    };

    const newFromDB = await firebase.firestore().collection("notes").add({
      title: note.title,
      body: note.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    const newId = newFromDB.id;

    await this.setState({
      notes: [...this.state.notes, note],
    });

    const newIndex = this.state.notes.indexOf(
      this.state.notes.filter((_note) => _note.id === newId)[0]
    );
    this.setState({
      selectedNote: this.state.notes[newIndex],
      selectedNoteIndex: newIndex,
    });
  };

  render() {
    const { selectedNote, selectedNoteIndex, notes, notesLoading } = this.state;

    if (notesLoading) {
      return <div>Loading...</div>;
    }

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
            notes={notes}
            noteUpdate={this.noteUpdate}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
