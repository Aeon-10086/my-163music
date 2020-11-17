import React, { memo } from "react";

import {
  PlayerBarWrap,
  BarContentWrap,
  Control,
  PlayInfo,
  Operator,
} from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeCurrentLyricIndexAction,
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
// 外部组件
import { Slider, message } from "antd";
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
  const {
    currentSong,
    playList,
    sequence,
    lyric,
    currentLyricIndex,
  } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      playList: state.getIn(["player", "playList"]),
      sequence: state.getIn(["player", "sequence"]),
      lyric: state.getIn(["player", "currentSongLyric"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
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
    // 切换歌曲后立刻切换当前显示歌词
    dispatch(changeCurrentLyricIndexAction(0));
    const content = lyric[0] && lyric[0].content;
    message.open({
      key: "lyric", //key相同的message只会出现一个
      content,
      duration: 0,
      className: "desk-lyric",
    });
    // 解决正在播放时切换歌曲，新歌未播放，按钮显示异常问题
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong, dispatch, lyric]);

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
      let now = e.target.currentTime * 1000;
      if (!isOnChange) {
        setCurrentTime(now);
        // 由于进度条最大值仅有100时，进度条动画视觉效果不平滑，因此将进度条最大值扩大至10000以完成平滑过渡
        setProgress((now / duration) * 10000);
      }
      //在此处匹配歌词与播放时间，当前歌词索引应该保存在redux中（currentLyricIndex)
      let i = 0;
      for (; i < lyric.length; i++) {
        let lyricItem = lyric[i];
        if (now < lyricItem.time) {
          break;
        }
      }
      i = i === 0 ? 0 : i - 1;
      // 判断当前index是否发生改变，若改变则重新dispatch
      if (currentLyricIndex !== i) {
        dispatch(changeCurrentLyricIndexAction(i));
        const content = lyric[i] && lyric[i].content;
        message.open({
          key: "lyric", //key相同的message只会出现一个
          content,
          duration: 0,
          className: "desk-lyric", //添加样式类名，由于该组件会被添加到根组件外，应该把相关样式写在全局样式表中
        });
      }
    },
    [isOnChange, duration, lyric, currentLyricIndex, dispatch]
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
