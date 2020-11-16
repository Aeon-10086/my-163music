import React, { memo } from "react";

import { Slider } from "antd";
import {
  PlayerBarWrap,
  BarContentWrap,
  Control,
  PlayInfo,
  Operator,
} from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changePlayingSongAction,
  changeSequenceAction,
  getCurrentSongAction,
} from "../store/actionCreators";
import {
  getPlayerUrl,
  formatMinuteSecond,
  getPicSize,
} from "@/utils/format-utils";
import { useState, useCallback, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default memo(function ICPlayerBar() {
  //state
  const [currentTime, setCurrentTime] = useState(0);
  // 注意进度条和currentTime的分离，否则更换歌曲时，可能会造成进度条无法重置
  const [progress, setProgress] = useState(0);
  const [isOnChange, setIsOnChange] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const [isChangeVolume, setIsChangeVolume] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  //redux
  const { currentSong, playList, sequence } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      playList: state.getIn(["player", "playList"]),
      sequence: state.getIn(["player", "sequence"]),
    }),
    shallowEqual
  );
  //hooks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentSongAction(28802028));
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlayerUrl(currentSong.id);
    // 解决正在播放时切换歌曲，新歌未播放，按钮显示异常问题
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  const audioRef = useRef();
  // other handle: 初始化数据时，可能取到的是 undefined
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singer = (currentSong.ar && currentSong.ar[0].name) || "网易音乐人";
  const duration = (currentSong.dt || 0) + 1000;
  // const progress = currentTime;
  const showDuration = formatMinuteSecond(duration);
  const showCurrentTime = formatMinuteSecond(currentTime);
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying, audioRef]);
  const timeUpdateFunc = useCallback(
    (e) => {
      if (!isOnChange) {
        setCurrentTime(e.target.currentTime * 1000);
        // 由于进度条最大值仅有100时，进度条动画视觉效果不平滑，因此将进度条最大值扩大至10000以完成平滑过渡
        setProgress(((e.target.currentTime * 1000) / duration) * 10000);
      }
      // setProgress(currentTime);
    },
    [isOnChange, duration]
  );
  const changeFunc = useCallback(
    (value) => {
      // setCurrentTime(value);
      setProgress(value);
      const time = ((value / 10000.0) * duration) / 1000;
      setCurrentTime(time);
      if (value > duration) {
      } else {
        setIsOnChange(true);
      }

      // console.log(value);
    },
    [duration]
  );
  const onAfterChangeFunc = useCallback(
    (value) => {
      const time = ((value / 10000.0) * duration) / 1000;
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      // setCurrentTime(audioRef.current.currentTime);
      setIsOnChange(false);
      if (!isPlaying) {
        playMusic();
      }
    },
    [isPlaying, playMusic, duration]
  );
  const changeLock = useCallback(() => {
    setIsLocked(!isLocked);
  }, [isLocked]);
  const volumeCrtlFunc = (value) => {
    if (value === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
      audioRef.current.volume = value / 100;
    }
  };
  const setSequence = (sequence) => {
    if (sequence < 2) {
      sequence = sequence + 1;
    } else {
      sequence = 0;
    }
    dispatch(changeSequenceAction(sequence));
  };
  const changePlayingSong = (tag) => {
    dispatch(changePlayingSongAction(tag));
  };
  window.changePlayingSong = changePlayingSong;
  const handleSongEnd = () => {
    // debugger;
    if (sequence === 2 || playList.length === 1) {
      // setCurrentTime(0);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      // changePlayingSong(1);

      dispatch(changePlayingSongAction(1));
    }
  };
  return (
    currentSong && (
      <PlayerBarWrap isLocked={isLocked}>
        {/* <div className='player-bar'> */}
        <div className='b-updn playbar_sprite'>
          <button
            className='lock playbar_sprite'
            onClick={(e) => {
              changeLock();
            }}>
            lock
          </button>
        </div>
        <div className='b-hand'></div>
        <div className='b-bg playbar_sprite'></div>
        <BarContentWrap>
          <Control isPlaying={isPlaying}>
            <button
              className='prev playbar_sprite'
              title='上一首(ctrl+←)'
              onClick={(e) => {
                changePlayingSong(-1);
              }}>
              prev
            </button>
            <button
              className='play playbar_sprite'
              title='播放/暂停(p)'
              onClick={(e) => {
                playMusic();
              }}>
              play
            </button>
            <button
              className='next playbar_sprite'
              title='下一首(ctrl+→)'
              onClick={(e) => {
                changePlayingSong(1);
              }}>
              next
            </button>
          </Control>
          <PlayInfo>
            <div className='image'>
              <NavLink to='/discover/player' className='playbar_sprite'>
                mask
              </NavLink>
              <img src={getPicSize(picUrl, 34)} alt='' />
            </div>
            <div className='progress'>
              <div className='p-info'>
                <NavLink to='/discover/player' className='song-name'>
                  {currentSong.name}
                </NavLink>
                <a href='/#' className='singer-name'>
                  {singer}
                </a>
                <a href='/#' className='src playbar_sprite'>
                  link
                </a>
              </div>
              <div className='p-pg'>
                <Slider
                  tipFormatter={null}
                  // value={(function () {
                  //   console.log(currentTime);
                  //   return currentTime;
                  // })()}
                  value={progress}
                  max={10000}
                  // max={duration}
                  onChange={changeFunc}
                  onAfterChange={onAfterChangeFunc}
                />
                <div className='time'>
                  <span className='now-time'>{showCurrentTime}</span>
                  <span className='divider'> / </span>
                  <span className='total-time'>{showDuration}</span>
                </div>
              </div>
            </div>
          </PlayInfo>
          <Operator
            isChangeVolume={isChangeVolume}
            isMuted={isMuted}
            sequence={sequence}>
            <div className='left'>
              <button className='btn playbar_sprite favor'>收藏</button>
              <button className='btn playbar_sprite share'>转发</button>
            </div>
            <div className='right playbar_sprite'>
              <div className='volume-control'>
                <div className='vc-bg playbar_sprite'></div>
                <Slider vertical defaultValue={30} onChange={volumeCrtlFunc} />
              </div>
              <button
                className='btn playbar_sprite volume'
                onClick={(e) => {
                  setIsChangeVolume(!isChangeVolume);
                }}>
                音量
              </button>
              <button
                className='btn playbar_sprite loop'
                onClick={(e) => {
                  setSequence(sequence);
                }}>
                循环
              </button>
              <button className='btn playbar_sprite playlist'>
                {playList.length}
              </button>
            </div>
          </Operator>
        </BarContentWrap>
        <audio
          ref={audioRef}
          onTimeUpdate={timeUpdateFunc}
          muted={isMuted}
          onEnded={handleSongEnd}
        />
        {/* </div> */}
      </PlayerBarWrap>
    )
  );
});
