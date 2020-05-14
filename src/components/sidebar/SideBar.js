import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SideBarItem from "../sidebaritem/SideBarItem";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addingNote: false,
      title: null,
    };
  }

  handleNewNote = () => {
    this.setState({
      addingNote: !this.state.addingNote,
      title: null,
    });
  };

  handleUpdateTitle = async (value) => {
    await this.setState({
      title: value,
    });
  };

  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({title: null, addingNote: false});
  };

  render() {
    const { notes, classes, selectedNoteIndex, notesLoading, selectNote, deleteNote} = this.props;
    const adding = this.state.addingNote;

    if (notesLoading) {
      return <div className={classes.sidebarContainer}>Loading...</div>;
    }

    return (
      <div className={classes.sidebarContainer}>
        <Button onClick={this.handleNewNote} className={classes.newNoteBtn}>
          {!adding ? "New Note" : "Cancel"}
        </Button>

        {!notes ? (
          <div>Add note!</div>
        ) : (
          <React.Fragment>
            {adding ? (
              <div>
                <input
                  type="text"
                  className={classes.newNoteInput}
                  placeholder="Enter note title..."
                  onKeyUp={(e) => this.handleUpdateTitle(e.target.value)}
                />
                <Button
                  className={classes.newNoteSubmitBtn}
                  onClick={this.newNote}
                >
                    Submit
                </Button>
              </div>
            ) : null}

            <List>
              {notes.map((note, index) => {
                return (
                  <div key={index}>
                    <SideBarItem
                      note={note}
                      index={index}
                      selectedNoteIndex={selectedNoteIndex}
                      selectNote={selectNote}
                      deleteNote={deleteNote}
                    />
                    <Divider />
                  </div>
                );
              })}
            </List>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(SideBar);
