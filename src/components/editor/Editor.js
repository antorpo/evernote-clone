import React, { Component } from "react";
import ReactQuill from "react-quill";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import debounce from "../../helpers";
import styles from "./styles";

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Editor Works!</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Editor);