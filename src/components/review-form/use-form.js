import { useReducer } from "react";

const INITIAL_STATE = { name: "", address: "", text: "" };

const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_ADDRESS_ACTION = "SET_ADDRESS_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION:
      return { ...INITIAL_STATE, name: payload };
    case SET_ADDRESS_ACTION:
      return { ...state, address: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setName = (value) =>
    dispatch({ type: SET_NAME_ACTION, payload: value });
  const setAdress = (value) =>
    dispatch({ type: SET_ADDRESS_ACTION, payload: value });
  const setText = (value) =>
    dispatch({ type: SET_TEXT_ACTION, payload: value });

  return { form, setName, setAdress, setText };
};
