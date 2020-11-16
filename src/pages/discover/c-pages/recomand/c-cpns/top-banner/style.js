import styled from "styled-components";

export const TopBannerWrap = styled.div`
	background: url(${(props) => props.bgImage}) center center/6000px;
	.banner {
		display: flex;
		height: 270px;
		position: relative;
	}
`;
export const BannerLeft = styled.div`
	width: 730px;
	.banner-item {
		overflow: hidden;
		img {
			width: 100%;
		}
	}
`;
export const BannerRight = styled.div`
	width: 254px;
	background: url(${require("@/assets/img/download.png")});
`;
export const BannerControl = styled.div`
	.btn {
		position: absolute;
		width: 37px;
		height: 63px;
		top: 50%;
		margin-top: -31px;
		background: url(${require("@/assets/img/banner_sprite.png")});
		background-color: transparent;
		cursor: pointer;
		text-indent: -9999px;
		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
	.btn-left {
		left: -68px;
		background-position: 0 -360px;
	}
	.btn-right {
		right: -68px;
		background-position: 0 -508px;
	}
`;
