//rscp
import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import usuariosActions from "../../actions/usuariosActions";
import publicacionesActions from "../../actions/publicacionesActions";

const Publicaciones = (props) => {
  const {
    match: {
      params: {userId},
    },
    usuariosReducer,
    publicacionesReducer,
    usuariosTraerTodos,
    publicacionesPorUsuario,
  } = props;

  let usuario = usuariosReducer?.usuarios?.filter(user => user.id === userId )

  useEffect(() => {
    if (usuariosReducer.usuarios.length === 0) {
      usuariosTraerTodos();
    }

    publicacionesPorUsuario(userId);
  }, []);

  return (
    <div>
      <h2>Publicaciones de {usuario.name} </h2>
      {publicacionesReducer.publicaciones.map((publicacion) => (
        <li key={publicacion.id}> {publicacion.title}</li>
      ))}
    </div>
  );
};

const mapStateToProps = ({usuariosReducer, publicacionesReducer}) => {
  return {usuariosReducer, publicacionesReducer};
};

const mapDispatchToProps = {
  ...usuariosActions,
  ...publicacionesActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
