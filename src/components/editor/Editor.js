import React, { Component } from "react";
import ReactQuill from "react-quill";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import debounce from "../../helpers";
import styles from "./styles";

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      body: "",
    };
  }

  handleBodyChange = async (value) => {
    await this.setState({
      body: value,
    });

    this.update();
  };

  // Esperaremos 2 segundos de inactividad del usuario para actualizar la BD (auto-guardado).
  update = debounce(() => {
    // Update Database
    console.log("Updating")
  }, 3000);

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <ReactQuill value={this.state.body} onChange={this.handleBodyChange} />
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
