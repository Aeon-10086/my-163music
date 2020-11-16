import React, { memo } from "react";
// import { connect } from "react-redux";
import TopBanner from "./c-cpns/top-banner";
import { RecomandWrap, Content, ContentLeft, ContentRight } from "./style";
import ICHotRecomand from "./c-cpns/hot-recomand";
import ICNewAlbum from "./c-cpns/new-album";
import ICRcmRanking from "./c-cpns/rcm-ranking";
import ICUserLogin from "./c-cpns/user-login";
import ICEnterAritist from "./c-cpns/enter-aritist";
import ICHotAnchor from "./c-cpns/hot-anchor";
import { enterAritist } from "@/common/local-data";
function ICRecomand(props) {
	return (
		<RecomandWrap>
			<TopBanner></TopBanner>
			<Content className='wrap-v2'>
				<ContentLeft>
					<ICHotRecomand />
					<ICNewAlbum />
					<ICRcmRanking />
				</ContentLeft>
				<ContentRight>
					<ICUserLogin />
					<ICEnterAritist enterAritist={enterAritist} />
					<ICHotAnchor />
				</ContentRight>
			</Content>
		</RecomandWrap>
	);
}

export default memo(ICRecomand);
/* 传统方式
	function ICRecomand(props) {
	const { getBanners, topBanner } = props;
	useEffect(() => {
		getBanners();
	}, [getBanners]);
	return (
		<div>
			<h2>ICRecomand:{topBanner.length}</h2>
		</div>
	);
}
const mapStateToProps = (state) => ({
	topBanner: state.recomand.topBanner,
});
const mapDispatchToProps = (dispatch) => {
	return {
		getBanners() {
			dispatch(getTopBannerAction());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(ICRecomand)); */
