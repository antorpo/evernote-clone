import React, { Component } from "react";
import SideBar from "./sidebar/SideBar";
import Editor from "./editor/Editor";
import './App.css';

const firebase = require("firebase");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }

  /*
    Collection -> Similar a una tabla una BD.
    Snapshot -> Cada vez que actualizamos una coleccion en firebase 
    se llama este metodo al cual le podemos pasar como parametro una funcion, 
    accediendo a los elementos disponibles.

  */
  componentDidMount = () => {
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
        });
      });
  };

  render() {
    const { selectedNoteIndex, notes } = this.state;
    return (
      <div className="app-container">
        <SideBar 
         selectedNoteIndex={selectedNoteIndex}
         notes={notes}
         />
        <Editor />
      </div>
    );
  }
}

export default App;
