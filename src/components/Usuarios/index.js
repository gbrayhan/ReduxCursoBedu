import React, { useEffect } from "react";
import { connect } from "react-redux";
import usuariosActions from "../../actions/usuariosActions";
import { Loader, Message } from "rsuite";
import "rsuite/dist/styles/rsuite-default.min.css";
import { Link } from "react-router-dom";

const Usuarios = (props) => {
  const { usuariosTraerTodos, usuarios, cargando, petitioned, error } = props;

  const ponerFilas = () => {
    return usuarios.map((usuario) => {
      return (
        <tr key={usuario.id}>
          <td>{usuario.name}</td>
          <td>{usuario.email}</td>
          <td>{usuario.website}</td>
          <td>
            <Link to={`/publicaciones/${usuario.id}`}>{usuario.id}</Link>
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    if (!petitioned) {
      usuariosTraerTodos();
    }
  });

  return (
    <>
      {!cargando ? (
        !error ? (
          <div>
            <table className="tabla">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Enlace</th>
                </tr>
              </thead>
              <tbody>{ponerFilas()}</tbody>
            </table>
          </div>
        ) : (
          <div>
            <Message type="error" description="Ocurrio un Error" />
          </div>
        )
      ) : (
        <div>
          <Loader size="md" center content="Cargando" />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);
