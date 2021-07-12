import axios from "axios";
import {CARGANDO, ERROR, TRAER_TODAS} from "../types/tareasTypes";

const traerTodas = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    await new Promise((r) => setTimeout(r, 1000));
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {timeout: 2000}
    );
    dispatch({
      type: TRAER_TODAS,
      payload: result.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};

const tareasActions = {
  traerTodas,
};

export default tareasActions;
