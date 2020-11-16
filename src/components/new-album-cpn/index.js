import React, { memo } from "react";
import { NewAlbumCpnWrap } from "./style";
import { getPicSize } from "@/utils/format-utils";

export default memo(function NewAlbumCpn(props) {
	const { info, width = 153, size = 130, bgp = -845, fz = 14 } = props;
	return (
		<NewAlbumCpnWrap
			className='sprite_02'
			width={width}
			size={size}
			bgp={bgp}
			fz={fz}>
			<div className='album-cover '>
				<a href='/todo' title={info.name} className='cover-msk sprite_covor'>
					{info.name}
				</a>
				<img
					src={getPicSize(info.picUrl, size)}
					alt={info.name}
					className='cover-img'
				/>
				<a href='/todo' title='播放' className='cover-icon sprite_icon'>
					播放
				</a>
			</div>
			<a href='/todo' className='album-name' title={info.name}>
				{info.name}
			</a>
			<a href='/todo' className='album-artist' title={info.artist.name}>
				{info.artist.name}
			</a>
		</NewAlbumCpnWrap>
	);
});
