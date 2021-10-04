export const isDefined = value => {
  return (
    value !== undefined &&
    value !== null &&
    typeof value !== 'undefined' &&
    value !== '' &&
    value !== 'undefined'
  );
};

export const validarCorreo = correo => {
  var regex = /^[a-zA-Z*-._0-9]+[@]{1}[a-zA-Z*-._0-9]+[.]{1}[a-zA-Z*-.0-9]+$/;
  return correo && correo.toString().match(regex);
};
