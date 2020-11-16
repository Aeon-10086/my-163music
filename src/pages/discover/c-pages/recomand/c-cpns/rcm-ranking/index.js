import React, { memo, useEffect } from "react";
import ThemeHeaderRCM from "components/themeheader-rcm";

import { getTopRankAction } from "../../store/actionCreators";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SongsRankRCM from "components/songs-rank-rcm";
import { RcmRankingWrap } from "./style";
export default memo(function ICRcmRanking() {
	// redux hook

	const { upRank, newRank, originalRank } = useSelector(
		(state) => ({
			upRank: state.getIn(["recomand", "upRank"]),
			newRank: state.getIn(["recomand", "newRank"]),
			originalRank: state.getIn(["recomand", "originalRank"]),
		}),
		shallowEqual
	);
	const dispatch = useDispatch();
	// other hook
	useEffect(() => {
		dispatch(getTopRankAction(0));
		dispatch(getTopRankAction(2));
		dispatch(getTopRankAction(3));
	}, [dispatch]);
	return (
		<RcmRankingWrap>
			<ThemeHeaderRCM title='榜单' />
			<div className='content'>
				<SongsRankRCM info={upRank} />
				<SongsRankRCM info={newRank} />
				<SongsRankRCM info={originalRank} />
			</div>
		</RcmRankingWrap>
	);
});
