import styled from "styled-components";

export const NewAlbumWrap = styled.div`
	margin-top: 10px;
	.content-wrap {
		height: 186px;
		margin: 20px 0 37px;
		border: 1px solid #d3d3d3;
		.content {
			height: 184px;
			border: 1px solid #fff;
			background-color: #f5f5f5;
			padding-left: 16px;
			position: relative;
			.left,
			.right {
				position: absolute;
				top: 75px;
				text-indent: -9999px;
				width: 20px;
				height: 20px;
				cursor: pointer;
			}
			.left {
				left: 4px;
				background-position: -260px -75px;
			}
			.right {
				right: 0;
				background-position: -300px -75px;
			}
			.album {
				margin: 28px 20px 10px 10px;
				height: 150px;
				.pages {
					display: flex !important;
					justify-content: space-between;
				}
			}
		}
	}
`;
