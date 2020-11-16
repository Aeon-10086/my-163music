const { default: styled } = require("styled-components");

export const FooterWrap = styled.div`
	height: 173px;
	border-top: 1px solid #d3d3d3;
	background-color: #f2f2f2;
	.content {
		display: flex;
		/* 设置水平竖直居中 */
		justify-content: space-between;
		align-items: center;
	}
`;
export const FooterLeft = styled.div`
	width: 520px;
	padding-top: 15px;
	line-height: 24px;
	color: #666;
	.link-item {
		color: #999;
	}
	.link-line {
		margin: 0 8px 0 10px;
		color: #c2c2c2;
	}
	.sep {
		margin-right: 14px;
	}
`;
export const FooterRight = styled.ul`
	width: 420px;
	margin-top: 33px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.unit-list {
		width: 60px;
		height: 70px;
		text-align: center;
		color: #666;
		.item-alink {
			display: block;
			width: 50px;
			height: 45px;
			margin: 0 auto;
			background-image: url(${require("@/assets/img/sprite_footer_02.png")});
			background-size: 110px 450px;
			text-indent: -9999px;
		}
		:nth-child(1) .item-alink {
			background-position: -60px 0;
		}
		:nth-child(2) .item-alink {
			background-position: -60px -101px;
		}
		:nth-child(3) .item-alink {
			background-position: 0 0;
		}
		:nth-child(4) .item-alink {
			background-position: -60px -50px;
		}
		:nth-child(5) .item-alink {
			background-position: 0 -101px;
		}
		.item-text {
			display: inline-block;
			margin: 5px 5px 0;
			width: 52px;
			height: 14px;
			background-image: url(${require("@/assets/img/sprite_footer_01.png")});
			background-size: 180px 100px;
		}
		:nth-child(1) .item-text {
			margin-top: 5px;
			background-position: 0 86px;
		}
		:nth-child(2) .item-text {
			background-position: 2px -86px;
		}
		:nth-child(3) .item-text {
			margin-top: 10px;
			background-position: 0 0;
		}
		:nth-child(4) .item-text {
			background-position: 1px -54px;
			margin-top: 9px;
		}
		:nth-child(5) .item-text {
			margin-top: 9px;
			background-position: -3px -72px;
		}
	}
`;
