import React, { memo } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { getHotRecomandAction } from "../../store/actionCreators";

import { HOT_RECOMAND_LIMIT } from "@/common/constant";
import ThemeAlbum from "components/theme-album";
import ThemeHeaderRCM from "components/themeheader-rcm";
import { HotRecomandWrap } from "./style";

export default memo(function ICHotRecomand() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getHotRecomandAction(HOT_RECOMAND_LIMIT));
	}, [dispatch]);
	const { hotRecomand } = useSelector(
		(state) => ({
			hotRecomand: state.getIn(["recomand", "hotRecomand"]),
		}),
		shallowEqual
	);
	return (
		<HotRecomandWrap>
			<ThemeHeaderRCM
				title='热门推荐'
				keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
			/>
			<ul className='album-list'>
				{hotRecomand.map((item) => (
					<ThemeAlbum key={item.id} result={item} />
				))}
			</ul>
		</HotRecomandWrap>
	);
});
