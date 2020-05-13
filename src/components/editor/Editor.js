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

  /* Para reemplazar componentDidMount/componentDidUpdate
     El efecto se llevará a cabo en cada actualizacion, recibiendo como
     parametros: useEffect(_callback_, _dependency_)
     El Callback sera la funcion a ejecutar y las dependencias nos permitira 
     disminuir el uso de recursos ya que solo se usara el efecto si detecta
     cambios en las dependencias.
  */
  useEffect(() => {
    const { id, title, body } = props.selectedNote;

    if (id !== editor.id) {
      setEditor({
        id,
        title,
        body,
      });
    }
  }, [editor.id, editor.title, editor.body, props.selectedNote]);

  const handleBodyChange = async (value) => {
    // await setEditor({
    //   body: value,
    // });

    update();
    console.log("changing!");
  };

  // Esperaremos 5 segundos de inactividad del usuario para actualizar la BD (auto-guardado).
  const update = debounce(() => {
    // Update Database
    console.log("Updating");
  }, 5000);

  const { classes } = props;

  return (
    <div className={classes.editorContainer}>
      <ReactQuill onChange={handleBodyChange} />
    </div>
  );
};

export default withStyles(styles)(Editor);
