import styled from "styled-components";

export const HotAnchorWrap = styled.div`
	width: 100%;
	.ha-header {
		font-size: 100%;
		height: 24px;
		margin: 0 23px;
		border-bottom: 1px solid #ccc;
		color: #000;
		font-weight: bold;
	}
	.ha-list {
		height: 250px;
		margin: 20px 0 0 23px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.ha-item {
			width: 210px;
			display: flex;
			justify-content: space-between;
			.item-img {
				display: inline-block;
				img {
					width: 40px;
					height: 40px;
				}
			}
			.ha-info {
				width: 160px;
				line-height: 21px;
				.info-name {
					color: #000;
				}
				.info-icon {
					display: inline-block;
					vertical-align: middle;
					margin-left: 3px;
					margin-top: -3px;
					width: 11px;
					height: 13px;
					background-position: 0 1px;
				}
				.info-dec {
					color: #666;
				}
			}
		}
	}
`;
