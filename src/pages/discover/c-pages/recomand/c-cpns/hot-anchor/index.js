import React, { memo } from "react";

import { hotAnchor } from "@/common/local-data";
import { getPicSize } from "@/utils/format-utils";
import { HotAnchorWrap } from "./style";
export default memo(function ICHotAnchor() {
	return (
		<HotAnchorWrap>
			<h3 className='ha-header'>热门主播</h3>
			<ul className='ha-list'>
				{hotAnchor.map((item) => (
					<li key={item.name} className='ha-item'>
						<a href='/todo' className='item-img'>
							<img src={getPicSize(item.imgUrl, 40)} alt={item.name} />
						</a>
						<div className='ha-info'>
							<p>
								<a className='info-name' href='/todo'>
									{item.name}
								</a>
								<i className='info-icon sprite_icon2'></i>
							</p>
							<p className='info-dec text-nowrap'>{item.dec}</p>
						</div>
					</li>
				))}
			</ul>
		</HotAnchorWrap>
	);
});
