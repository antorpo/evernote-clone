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

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    const newNote = this.state.addingNote;

    return (
      <div className={classes.sidebarContainer}>
        <Button onClick={this.handleNewNote} className={classes.newNoteBtn}>
          {!newNote ? "New Note" : "Cancel"}
        </Button>
        {newNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="Enter note title"
              onKeyUp={(e) => this.handleUpdateTitle(e.target.value)}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(SideBar);
