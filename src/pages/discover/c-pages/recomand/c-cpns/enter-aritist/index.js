import React, { memo } from "react";
import { getPicSize } from "@/utils/format-utils";
import { EnterAritistWrap } from "./style";
export default memo(function ICEnterAritist(props) {
	const { enterAritist } = props;
	return (
		<EnterAritistWrap>
			<h3 className='ea-header'>
				<span>入驻歌手</span>
				<a href='/todo'>查看全部 &gt;</a>
			</h3>
			<ul className='ea-list'>
				{enterAritist.map((item) => (
					<li key={item.name} className='ea-item-wrap'>
						<a href='/todo' className='ea-item'>
							<img
								src={getPicSize(item.imgUrl, 62)}
								alt={item.name}
								className='item-pic'
							/>
							<div className='item-info'>
								<h4 className='info-name text-nowrap'>{item.name}</h4>
								<p className='info-dec text-nowrap'>{item.dec}</p>
							</div>
						</a>
					</li>
				))}
			</ul>
			<a
				href='https://music.163.com/nmusician/web/index#/'
				target='_blank'
				rel='noopener noreferrer'
				className='ea-btn sprite_button'>
				申请成为网易音乐人
			</a>
		</EnterAritistWrap>
	);
});
