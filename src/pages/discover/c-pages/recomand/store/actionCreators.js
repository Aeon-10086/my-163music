import {
	CHANGE_TOP_BANNER,
	CHANGE_HOT_RECOMAND,
	CHANGE_NEW_ALBUM,
	CHANGE_UP_RANK,
	CHANGE_NEW_RANK,
	CHANGE_ORIGIANL_RANK,
} from "./constant";
import {
	getTopBanner,
	getHotRecmand,
	getNewAlbum,
	getRankingList,
} from "@/services/recomand";
const changeTopBannerAction = (topBanner) => ({
	type: CHANGE_TOP_BANNER,
	topBanner,
});
export const getTopBannerAction = () => {
	return (dispatch) => {
		getTopBanner().then((res) => {
			// console.log(res);
			dispatch(changeTopBannerAction(res.banners));
		});
	};
};
const changeHotRecomandAction = (hotRecomand) => ({
	type: CHANGE_HOT_RECOMAND,
	hotRecomand,
});
export const getHotRecomandAction = (limit) => {
	return (dispatch) => {
		getHotRecmand(limit).then((res) => {
			// console.log(res);
			dispatch(changeHotRecomandAction(res.result));
		});
	};
};
export const changeNewAlbumAction = (newAlbum) => ({
	type: CHANGE_NEW_ALBUM,
	newAlbum,
});
export const getNewAlbumAction = () => {
	return (dispatch) => {
		getNewAlbum().then((res) => {
			dispatch(changeNewAlbumAction(res.albums));
		});
	};
};
const changeUpRankAction = (upRank) => ({
	type: CHANGE_UP_RANK,
	upRank,
});
const changeNewRankAction = (newRank) => ({
	type: CHANGE_NEW_RANK,
	newRank,
});
const changeOriginalRankAction = (originalRank) => ({
	type: CHANGE_ORIGIANL_RANK,
	originalRank,
});
export const getTopRankAction = (idx) => {
	return (dispatch) => {
		getRankingList(idx).then((res) => {
			switch (idx) {
				case 0:
					dispatch(changeUpRankAction(res.playlist));
					break;
				case 2:
					dispatch(changeNewRankAction(res.playlist));
					break;
				case 3:
					dispatch(changeOriginalRankAction(res.playlist));
					break;
				default:
			}
		});
	};
};
