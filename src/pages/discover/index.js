import React, { memo } from "react";

import { DiscoverWrap, TopMenu } from "./style";
import { discoverMenu } from "../../common/local-data";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default memo(function ICDiscover(props) {
	const { route } = props;
	return (
		<DiscoverWrap>
			<div className='top'>
				<TopMenu className='wrap-v1'>
					{discoverMenu.map((item, index) => (
						<li key={item.title} className='menu-item'>
							<NavLink to={item.link} className='menu-alink'>
								{item.title}
							</NavLink>
						</li>
					))}
				</TopMenu>
			</div>
			{renderRoutes(route.routes)}
		</DiscoverWrap>
	);
});
