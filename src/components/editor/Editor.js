import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { withStyles } from "@material-ui/core/styles";
import debounce from "../../helpers";
import styles from "./styles";

const Editor = (props) => {
  const [editor, setEditor] = useState({
    id: "",
    title: "",
    body: "",
  });

  // Para reemplazar componentDidMount/componentDidUpdate
  useEffect(() => {
    const { id, title, body } = props.selectedNote;

    if (id !== editor.id) {
      setEditor({
        id,
        title,
        body,
      });
    }
  });

  const handleBodyChange = async (value) => {
    await setEditor({
      body: value,
    });

    update();
  };

  // Esperaremos 5 segundos de inactividad del usuario para actualizar la BD (auto-guardado).
  const update = debounce(() => {
    // Update Database
    console.log("Updating");
  }, 5000);

  const { classes } = props;

  return (
    <div className={classes.editorContainer}>
      <ReactQuill value={editor.body} onChange={handleBodyChange} />
    </div>
  );
};

export default withStyles(styles)(Editor);
