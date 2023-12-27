import { legacy_createStore as createStore } from "redux";
import reducer from "./users/reducer";

const store = createStore(reducer);

export default store;
