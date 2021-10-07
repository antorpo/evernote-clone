import ReactDOM from "react-dom";

export const Portal = ({ children, divId }) => {
  return ReactDOM.createPortal(children, document.getElementById(divId));
};
