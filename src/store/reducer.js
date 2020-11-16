import { reducer as recomandReducer } from "@/pages/discover/c-pages/recomand/store";
import playerReducer from "@/pages/player/store/reducer";
import { combineReducers } from "redux-immutable";

const reducer = combineReducers({
	recomand: recomandReducer,
	player: playerReducer,
});
export default reducer;
