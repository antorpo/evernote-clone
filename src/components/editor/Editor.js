import React, { Component } from "react";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ReactQuill from "react-quill";
import { withStyles } from "@material-ui/core/styles";
import debounce from "../../helpers";
import styles from "./styles";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      body: "",
      title: "",
      id: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      body: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        body: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
        <input
          className={classes.titleInput}
          placeholder="Note title..."
          value={this.state.title ? this.state.title : ""}
          onChange={(e) => this.updateTitle(e.target.value)}
        ></input>
        <ReactQuill
          value={this.state.body}
          onChange={this.updateBody}
          
        ></ReactQuill>
      </div>
    );
  }

  updateBody = async (val) => {
    await this.setState({ body: val });
    this.update();
  };

  updateTitle = async (txt) => {
    await this.setState({ title: txt });
    this.update();
  };

  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.body,
    });
  }, 5000);
}

export default withStyles(styles)(Editor);
