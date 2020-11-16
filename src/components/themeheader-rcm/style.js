import styled from "styled-components";

export const ThemeHeaderRCMWrap = styled.div`
	height: 33px;
	padding: 0 10px 0 34px;
	display: flex;
	justify-content: space-between;
	background-position: -225px -156px;
	border-bottom: 2px solid #c10d0c;
	.rcm-left {
		display: flex;
		.rcm-title {
			font-size: 20px;
			line-height: 28px;
			font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
			cursor: pointer;
		}
		.rcm-kw {
			display: flex;
			justify-content: space-between;
			margin: 7px 0 0 20px;
			.rcm-kw-divider {
				display: inline-block;
				margin: 0 10px;
			}
		}
	}
	.rcm-right {
		margin: 9px 0 0;
		.rcm-icon {
			height: 12px;
			width: 12px;
			margin: 0 0 0 4px;
			display: inline-block;
			background-position: 0 -240px;
		}
	}
`;
