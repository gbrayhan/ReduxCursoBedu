//rscp
import React, {useEffect, useState} from "react";
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
  const [usuario, setUsuario] = useState({});


  useEffect(() => {
    if (usuariosReducer.usuarios.length === 0) {
      usuariosTraerTodos();
    }
    publicacionesPorUsuario(userId);
  }, []);

  useEffect(() => {
    const [user] = usuariosReducer?.usuarios?.filter(user => user.id == userId)
    setUsuario(user)
    console.log(publicacionesReducer)
  }, [usuariosReducer])


  return (

    <div>
      {usuario?.name && <h2>Publicaciones de {usuario?.name} </h2>}
      {usuario?.name && publicacionesReducer.publicaciones.map((publicacion) => (
        <div key={publicacion.id}>
          <h4>{publicacion.title}</h4>
          <div>
            <p>{publicacion.body}</p>
          </div>
        </div>
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
