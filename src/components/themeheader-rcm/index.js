import React, { memo } from "react";
import { ThemeHeaderRCMWrap } from "./style";
import PropType from "prop-types";
function ThemeHeaderRCM(props) {
	const { title, keywords } = props;
	// 方法一：const { title, keywords = [] } = props;
	return (
		<ThemeHeaderRCMWrap className='sprite_02'>
			<div className='rcm-left'>
				<h3 className='rcm-title'>{title}</h3>
				<ul className='rcm-kw'>
					{keywords.map((item, index) => {
						if (index !== keywords.length - 1) {
							return (
								<div key={item} className='rcm-kw-item'>
									<a href='todo'>{item}</a>
									<span className='rcm-kw-divider'>|</span>
								</div>
							);
						} else {
							return (
								<div key={item} className='rcm-kw-item'>
									<a href='todo'>{item}</a>
								</div>
							);
						}
					})}
				</ul>
			</div>
			<div className='rcm-right'>
				<a href='todo'>更多</a>
				<i className='rcm-icon sprite_02'></i>
			</div>
		</ThemeHeaderRCMWrap>
	);
}
// 方法二：传入值的类型检测与设置默认值，推荐，更严谨
ThemeHeaderRCM.propType = {
	title: PropType.string.isRequired,
	keywords: PropType.array,
};
ThemeHeaderRCM.defaultProps = {
	keywords: [],
};
export default memo(ThemeHeaderRCM);
