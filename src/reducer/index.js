import { combineReducers } from "redux";
import { weatherReducer } from "./WeatherReducer";

const rootReducer = combineReducers({
  weatherReducer
});

export default rootReducer;
