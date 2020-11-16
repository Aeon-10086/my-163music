import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getPicSize } from "@/utils/format-utils";

import { Route } from "react-router-dom";
import { PlayerLeft, PlayerRight, PlayerWrap } from "./style";
import OperationBar from "@/components/operation-bar";
import { useEffect } from "react";
import {
  getSimiPlaylistAction,
  getSimiSongAction,
} from "./store/actionCreators";
import AppDownloadCpn from "@/components/app-download-cpn";

export default memo(function ICPlayer() {
  const { currentSong, currentSongLyric, simiPlaylist, simiSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      currentSongLyric: state.getIn(["player", "currentSongLyric"]),
      simiPlaylist: state.getIn(["player", "simiPlaylist"]),
      simiSong: state.getIn(["player", "simiSong"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSimiPlaylistAction(currentSong && currentSong.id));
    dispatch(getSimiSongAction(currentSong && currentSong.id));
  }, [dispatch, currentSong]);
  /* useEffect(() => {
    // console.log(simiPlaylist[0]);
    // console.log(simiSong);
    console.log(currentSongLyric);
  }); */
  const album = currentSong.al || {};
  const alPicUrl = album.picUrl || "";
  const arist = (currentSong.ar && currentSong.ar[0]) || [];
  return (
    currentSong &&
    currentSongLyric && (
      <Route path='/discover/player'>
        <PlayerWrap>
          <PlayerLeft>
            <div className='cvrwrap'>
              <div className='cover'>
                <span className='msk sprite_covor'></span>
                <img src={getPicSize(alPicUrl, 130)} alt='不如吃茶去' />
              </div>
              <div className='cvrlink'>
                <i className='sprite_icon2'></i>
                <a
                  href={"https://music.163.com/#/outchain/2/" + currentSong.id}>
                  生成外链播放器
                </a>
              </div>
            </div>
            <div className='songDetail'>
              <div className='hd'>
                <i className='sprite_icon2'></i>
                <div className='title'>
                  <em>{currentSong.name}</em>
                  <a href={`https://music.163.com/#/mv?id=${currentSong.mv}`}>
                    <i className='mvi sprite_icon2'></i>
                  </a>
                </div>
              </div>
              <p className='des'>
                歌手：
                <a href={`https://music.163.com/#/artist?id=${arist.id}`}>
                  {arist.name}
                </a>
              </p>
              <p className='des'>
                所属专辑：
                <a href={`https://music.163.com/#/album?id=${album.id}`}>
                  {album.name}
                </a>
              </p>
              <OperationBar
                favor='收藏'
                share='分享'
                downl='下载'
                comt='(37066)'
              />
              <div className='lyric'>
                {currentSongLyric.map((item, index) => (
                  <li key={item.time}>{item.content}</li>
                ))}
              </div>
            </div>
          </PlayerLeft>
          <PlayerRight>
            <div className='simi-playlist'>
              <h3 className='l-hd'>包含这首歌的歌单</h3>
              <ul>
                {simiPlaylist &&
                  simiPlaylist.map((item, index) => (
                    <li className='sp-content' key={item.id}>
                      <a href='/#' className='sp-cover'>
                        <img
                          src={getPicSize(item.coverImgUrl, 50)}
                          alt={item.name}
                          title={item.name}
                        />
                      </a>
                      <div className='sp-info'>
                        <p className='spi-name  text-nowrap'>
                          <a href='/#'>{item.name}</a>
                        </p>
                        <p className='spi-creator'>
                          <span>by </span>
                          <a href='/#'>{item.creator.nickname}</a>
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className='simi-song'>
              <h3 className='l-hd'>相似歌曲</h3>
              <ul>
                {simiSong &&
                  simiSong.map((item, index) => (
                    <li className='ss-content' key={item.id}>
                      <div className='ss-info'>
                        <a className='ssi-name' href='/#'>
                          {item.name}
                        </a>
                        <a
                          className='ssi-artist'
                          href={`https://music.163.com/#/artist?id=${item.artists[0].id}`}>
                          {item.artists[0].name}
                        </a>
                      </div>
                      <div className='ss-opr'>
                        <a href='/#' className='so-play sprite_icon3'>
                          play
                        </a>
                        <a href='/#' className='so-add sprite_icon3'>
                          add
                        </a>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <AppDownloadCpn />
          </PlayerRight>
        </PlayerWrap>
      </Route>
    )
  );
});
