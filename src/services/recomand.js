import request from "./request";
export function getTopBanner() {
	return request({
		url: "/banner",
	});
}
export function getHotRecmand(limit) {
	return request({
		url: "/personalized",
		params: {
			limit,
		},
	});
}
export function getNewAlbum() {
	return request({
		url: "/top/album",
		params: {
			limit: 10,
		},
	});
}
export function getRankingList(idx) {
	return request({
		url: "/top/list",
		params: {
			idx,
		},
	});
}
