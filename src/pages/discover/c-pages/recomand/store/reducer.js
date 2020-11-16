import * as actionTypes from "./constant";
import { Map } from "immutable";

const defaultState = Map({
	topBanner: [],
	hotRecomand: [],
	newAlbum: [],
	upRank: {},
	newRank: {},
	originalRank: {},
});
function reducer(state = defaultState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_TOP_BANNER:
			return state.set("topBanner", action.topBanner);
		// return { ...state, topBanner: action.topBanner };
		case actionTypes.CHANGE_HOT_RECOMAND:
			return state.set("hotRecomand", action.hotRecomand);
		case actionTypes.CHANGE_NEW_ALBUM:
			return state.set("newAlbum", action.newAlbum);
		case actionTypes.CHANGE_UP_RANK:
			return state.set("upRank", action.upRank);
		case actionTypes.CHANGE_NEW_RANK:
			return state.set("newRank", action.newRank);
		case actionTypes.CHANGE_ORIGIANL_RANK:
			return state.set("originalRank", action.originalRank);
		default:
			return state;
	}
}
export default reducer;
