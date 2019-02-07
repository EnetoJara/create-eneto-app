import { combineReducers } from "redux";
import app from "./appReducer";

const combinados = combineReducers({ app, });

export default combinados;
