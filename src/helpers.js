/*
  Para dar una experiencia mas real a la app 
  el debounce nos va a permitir esperar un intervalo 
  que sera cuando el usuario deje de tipear para 
  mandar a actualizar el contenido en la BD.
  Esto es lo que se conoce como guardado automatico.
*/
export default function debounce(a, b, c) {
  var d, e;
  return function () {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}

export function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
