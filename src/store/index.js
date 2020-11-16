import reducer from "./reducer";
import thunk from "redux-thunk";
const { createStore, applyMiddleware, compose } = require("redux");

const composeEhancer =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const storeEhancer = composeEhancer(applyMiddleware(thunk));
const store = createStore(reducer, storeEhancer);
export default store;
