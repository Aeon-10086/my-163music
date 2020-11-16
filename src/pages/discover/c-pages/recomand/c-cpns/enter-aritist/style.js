import styled from "styled-components";

export const EnterAritistWrap = styled.div`
	width: 100%;
	/* height: 455px; */
	margin: 20px 0;
	.ea-header {
		font-size: 100%;
		display: flex;
		justify-content: space-between;
		height: 24px;
		margin: 0 23px;
		border-bottom: 1px solid #ccc;
		span {
			color: #000;
			font-weight: bold;
		}
	}
	.ea-list {
		height: 380px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 20px 0 14px 20px;
		.ea-item {
			display: block;
			display: flex;
			width: 210px;
			height: 62px;
			background: #fafafa;
			text-decoration: none;
			&:hover {
				background: #f4f4f4;
			}
			.item-info {
				width: 147px;
				padding-left: 14px;
				border: 1px solid #e9e9e9;
				border-left: none;
				.info-name {
					margin-top: 8px;
					width: 90%;
					font-size: 14px;
					font-weight: bold;
				}
				.info-dec {
					width: 90%;
					margin-top: 4px;
				}
			}
		}
	}
	.ea-btn {
		display: block;
		width: 210px;
		height: 31px;
		text-align: center;
		margin-left: 20px;
		color: #333;
		font-weight: bold;
		text-decoration: none;
		line-height: 31px;
		border-radius: 4px;
		border: 1px solid #ccc;
		background: #f5f5f5;
		&:hover {
			background: #fcfcfc;
		}
	}
`;
