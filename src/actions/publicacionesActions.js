import axios from "axios";
import {
  CARGANDO,
  ERROR,
  TRAER_POR_USUARIO,
  TRAER_TODOS,
} from "../types/publicacionesTypes";

const publicacionesTraerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      { timeout: 2000 }
    );
    dispatch({
      type: TRAER_TODOS,
      payload: result.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

const publicacionesPorUsuario = (userId) => async (dispatch, getState) => {
  const { usuarios } = getState().usuariosReducer;

  dispatch({
    type: CARGANDO,
  });

  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      { timeout: 2000 }
    );
    dispatch({
      type: TRAER_POR_USUARIO,
      payload: result.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

const publicacionesActions = {
  publicacionesTraerTodos,
  publicacionesPorUsuario,
};

export default publicacionesActions;
