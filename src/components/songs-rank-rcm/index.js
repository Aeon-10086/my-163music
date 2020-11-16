import React, { memo } from "react";

import { getPicSize } from "@/utils/format-utils.js";

import { SongsRankRCMWrap } from "./style";
import { useDispatch } from "react-redux";
import { getCurrentSongAction } from "../../pages/player/store/actionCreators";

export default memo(function SongsRankRCM(props) {
  const { info } = props;
  const dispatch = useDispatch();
  const toPlay = (ids) => {
    dispatch(getCurrentSongAction(ids));
  };
  return (
    <SongsRankRCMWrap>
      <dt className='header'>
        <div className='header-pic'>
          <img
            className='pic-img'
            src={getPicSize(info.coverImgUrl, 80)}
            alt={info.name}
          />
          <a href='/todo' className='pic-cover sprite_covor' title={info.name}>
            {info.name}
          </a>
        </div>
        <div className='header-title'>
          <a href='/todo' className='text'>
            {info.name}
          </a>
          <div className='btn'>
            <a href='/todo' title='播放' className='btn-p sprite_02'>
              播放
            </a>
            <a href='/todo' title='收藏' className='btn-f sprite_02'>
              收藏
            </a>
          </div>
        </div>
      </dt>
      <dd className='cpn-content'>
        <ol className='list'>
          {info.tracks &&
            info.tracks.slice(0, 10).map((item, index) => (
              <li key={item.id} className='list-item'>
                <span className='item-rank'>{index + 1}</span>
                <a href='/todo' className='item-name' title={item.name}>
                  {item.name}
                </a>
                <div className='oper'>
                  <button
                    className='play sprite_02'
                    title='播放'
                    onClick={(e) => {
                      toPlay(item.id);
                    }}>
                    播放
                  </button>
                  <button className='addto sprite_icon2' title='添加到播放列表'>
                    添加到播放列表
                  </button>
                  <button className='favor sprite_02' title='收藏'>
                    收藏
                  </button>
                </div>
              </li>
            ))}
        </ol>
        <a href='/todo' className='more'>
          查看全部 &gt;
        </a>
      </dd>
    </SongsRankRCMWrap>
  );
});
