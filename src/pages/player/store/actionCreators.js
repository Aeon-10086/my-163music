import {
  CHANGE_CURRENT_SONG,
  CHANGE_CURRENT_SONG_LYRIC,
  CHANGE_SIMI_PLAYLIST,
  CHANGE_SIMI_SONG,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_SEQUENCE,
} from "./constant";
import {
  getSongDetail,
  getSongLyric,
  getSimiPlaylist,
  getSimiSong,
} from "@/services/player";
import { getRandom } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";
export const changeCurrentSongAction = (currentSong) => ({
  type: CHANGE_CURRENT_SONG,
  currentSong,
});
export const changeCurrentSongLyricAction = (currentSongLyric) => ({
  type: CHANGE_CURRENT_SONG_LYRIC,
  currentSongLyric,
});
export const changeSimiPlaylistAction = (simiPlaylist) => ({
  type: CHANGE_SIMI_PLAYLIST,
  simiPlaylist,
});
export const changeSimiSongAction = (simiSong) => ({
  type: CHANGE_SIMI_SONG,
  simiSong,
});
export const changeCurrentSongIndexAction = (index) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  index,
});
export const changePlayListAction = (playList) => ({
  type: CHANGE_PLAY_LIST,
  playList,
});
export const changeSequenceAction = (sequence) => ({
  type: CHANGE_SEQUENCE,
  sequence,
});
//直接获取歌曲详细信息
/* export const getCurrentSongAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      // console.log(res.songs[0]);
      dispatch(changeCurrentSongAction(res.songs[0]));
    });
  };
}; */
export const getCurrentSongAction = (ids) => {
  return (dispatch, getState) => {
    const playlist = getState().getIn(["player", "playList"]);
    const index = playlist.findIndex((songs) => songs.id === ids);
    if (index === -1) {
      getSongDetail(ids).then((res) => {
        if (res.songs !== undefined) {
          const newPlayList = [...playlist];
          newPlayList.push(res.songs[0]);
          dispatch(changePlayListAction(newPlayList));
          dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
          dispatch(changeCurrentSongAction(res.songs[0]));
        } else {
          return;
        }
      });
    } else {
      dispatch(changeCurrentSongIndexAction(index));
      dispatch(changeCurrentSongAction(playlist[index]));
    }
    dispatch(getCurrentSongLyricAction(ids));
  };
};
export const changePlayingSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    let sequence = getState().getIn(["player", "sequence"]);
    switch (sequence) {
      case 1:
        let randomIndex = getRandom(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandom(playList.length);
        }
        dispatch(changeCurrentSongAction(playList[randomIndex]));
        dispatch(changeCurrentSongIndexAction(randomIndex));
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0;
        } else if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1;
        }
        dispatch(changeCurrentSongAction(playList[currentSongIndex]));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));
    }
    dispatch(getCurrentSongLyricAction(playList[currentSongIndex].id));
  };
};
// 获取歌曲歌词，在获取歌曲时派发
export const getCurrentSongLyricAction = (id) => {
  return (dispatch) => {
    getSongLyric(id).then((res) => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeCurrentSongLyricAction(lyricList));
    });
  };
};
export const getSimiPlaylistAction = (id) => {
  return (dispatch) => {
    getSimiPlaylist(id).then((res) => {
      dispatch(changeSimiPlaylistAction(res.playlists));
    });
  };
};
export const getSimiSongAction = (id) => {
  return (dispatch) => {
    getSimiSong(id).then((res) => {
      dispatch(changeSimiSongAction(res.songs));
    });
  };
};
