import { CARGANDO, ERROR, TRAER_TODOS } from "../types/usuariosTypes";

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error: null,
  petitioned: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return {
        ...state,
        usuarios: action.payload,
        cargando: false,
        petitioned: true,
      };
    case CARGANDO:
      return { ...state, cargando: true, petitioned: true };
    case ERROR:
      return {
        ...state,
        cargando: false,
        error: action.payload,
        petitioned: true,
      };
    default:
      return state;
  }
};
