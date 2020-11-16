import React, { memo } from "react";

import { ThemeAlbumWrap } from "./style";
import { getPlayCount, getPicSize } from "../../utils/format-utils";
function ThemeAlbum(props) {
	const info = props.result;
	return (
		<ThemeAlbumWrap>
			<div className='themealbum-pic'>
				<a href='todo' title={info.name} className='pic-cover sprite_covor'>
					{info.name}
				</a>
				<div className='pic-bottom sprite_covor'>
					<i className='pc-icon sprite_icon'></i>
					<span className='play-count'>{getPlayCount(info.playCount)}</span>
					<a href='todo' className='pc-play sprite_icon' title='播放'>
						播放
					</a>
				</div>
				<img
					src={getPicSize(info.picUrl, 140)}
					alt={info.name}
					className='pic-img'
				/>
			</div>
			<a href='todo' className='themealbum-dec'>
				{info.name}
			</a>
			<p className='themealbum-copy'>
				by <a href='todo'>{info.copywriter}</a>
			</p>
		</ThemeAlbumWrap>
	);
}
export default memo(ThemeAlbum);
