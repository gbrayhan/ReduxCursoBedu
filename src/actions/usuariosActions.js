import axios from "axios";
import { CARGANDO, ERROR, TRAER_TODOS } from "../types/usuariosTypes";

const usuariosTraerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    await new Promise((r) => setTimeout(r, 1000));
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
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

const usuariosActions = {
  usuariosTraerTodos,
};

export default usuariosActions;
