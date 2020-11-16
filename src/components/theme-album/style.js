import styled from "styled-components";

export const ThemeAlbumWrap = styled.div`
	width: 140px;
	height: 190px;
	margin-bottom: 20px;
	.themealbum-pic {
		position: relative;
		.pic-img {
			height: 140px;
			width: 140px;
		}
		.pic-cover {
			height: 140px;
			width: 140px;
			background-position: 0 0;
			position: absolute;
			text-indent: -9999px;
			left: 0;
			top: 0;
		}
		.pic-bottom {
			position: absolute;
			left: 0;
			bottom: 0;
			height: 27px;
			width: 100%;
			color: #ccc;
			line-height: 27px;
			background-position: 0 -537px;
			display: flex;
			.pc-icon {
				height: 11px;
				width: 14px;
				display: inline-block;
				margin: 9px 5px 9px 10px;
				background-position: 0 -24px;
			}
			.play-count {
				margin: 1px 0 0 0;
			}
			.pc-play {
				position: absolute;
				right: 10px;
				bottom: 5px;
				width: 16px;
				height: 17px;
				background-position: 0 0;
				text-indent: -9999px;
				&:hover {
					background-position: 0 -60px;
				}
			}
		}
	}
	.themealbum-dec {
		font-size: 14px;
		margin: 8px 0 3px;
		display: inline-block;
		max-width: 100%;
		vertical-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #000;
	}
	.themealbum-copy {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: -6px;
		color: #999;
	}
`;
