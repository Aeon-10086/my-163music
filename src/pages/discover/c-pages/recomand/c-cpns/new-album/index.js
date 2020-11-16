import React, { memo, useEffect } from "react";
import ThemeHeaderRCM from "components/themeheader-rcm";

import { getNewAlbumAction } from "../../store/actionCreators";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { NewAlbumWrap } from "./style";
import { Carousel } from "antd";
import { useRef } from "react";
import NewAlbumCpn from "@/components/new-album-cpn";
export default memo(function ICNewAlbum() {
	//state

	//reducer
	const { newAlbum } = useSelector(
		(state) => ({
			newAlbum: state.getIn(["recomand", "newAlbum"]),
		}),
		shallowEqual
	);
	const dispatch = useDispatch();
	//other hooks
	useEffect(() => {
		dispatch(getNewAlbumAction());
	}, [dispatch]);
	const carouselRef = useRef();
	return (
		<NewAlbumWrap>
			<ThemeHeaderRCM title='新碟上架' />
			<div className='content-wrap'>
				<div className='content'>
					<button
						className='left sprite_02'
						onClick={(e) => {
							carouselRef.current.prev();
						}}>
						prev
					</button>
					<div className='album'>
						<Carousel dots={false} ref={carouselRef}>
							{[0, 1].map((item) => (
								<div key={item} className='pages'>
									{newAlbum.slice(item * 5, (item + 1) * 5).map((iten) => (
										<NewAlbumCpn
											key={iten.id}
											info={iten}
											size={100}
											width={118}
											bgp={-570}
											fz={12}
										/>
									))}
								</div>
							))}
						</Carousel>
					</div>
					<button
						className='right sprite_02'
						onClick={(e) => {
							carouselRef.current.next();
						}}>
						next
					</button>
				</div>
			</div>
		</NewAlbumWrap>
	);
});
