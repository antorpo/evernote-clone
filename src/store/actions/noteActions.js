import {addNote} from '../slices/noteSlice';
import {ejecutarConTry} from './baseAction';

export const addNewNote = note => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(addNote(addNote));
  });
};

export const generarError = () => {
  return ejecutarConTry(async (dispatch, getState) => {
    throw Error('Algo ocurrio mal');
  });
};
