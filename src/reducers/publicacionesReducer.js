import {
  CARGANDO,
  ERROR,
  TRAER_POR_USUARIO,
  TRAER_TODOS,
} from "../types/publicacionesTypes";

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: null,
  petitioned: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return {
        ...state,
        publicaciones: action.payload,
        cargando: false,
        error: null,
        petitioned: true,
      };
    case TRAER_POR_USUARIO:
      return {
        ...state,
        publicaciones: action.payload,
        cargando: false,
        error: null,
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
