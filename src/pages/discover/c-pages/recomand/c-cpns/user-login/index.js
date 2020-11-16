import React, { memo } from "react";
import { UserLoginWrap } from "./style";

export default memo(function ICUserLogin() {
	return (
		<UserLoginWrap className='sprite_02'>
			<p className='lg-text'>
				登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
			</p>
			<a href='/todo' className='lg-btn sprite_02'>
				用户登录
			</a>
		</UserLoginWrap>
	);
});
