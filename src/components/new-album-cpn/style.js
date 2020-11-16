import styled from "styled-components";

export const NewAlbumCpnWrap = styled.div`
	width: ${(props) => props.width + "px"};
	background-position: -260px 100px;
	.album-cover {
		position: relative;
		width: 100%;
		margin-bottom: 5px;
		.cover-msk {
			text-indent: -9999px;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: ${(props) => props.size + "px"};
			background-position: 0 ${(props) => props.bgp + "px"};
		}
		.cover-img {
			display: block;
			width: ${(props) => props.size + "px"};
			height: ${(props) => props.size + "px"};
		}
		.cover-icon {
			display: none;
			text-indent: -9999px;
			position: absolute;
			right: 23px;
			bottom: 3px;
			width: 21px;
			height: 21px;
			background-position: 0 -86px;
			&:hover {
				background-position: 0 -111px;
			}
		}
		&:hover {
			.cover-icon {
				display: block;
			}
		}
	}
	.album-name,
	.album-artist {
		display: block;
		width: 90%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: ${(props) => props.fz + "px"};
	}
	.album-name {
		margin-bottom: -2px;
		color: #000;
	}
`;
