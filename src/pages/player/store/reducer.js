import {
  CHANGE_CURRENT_SONG,
  CHANGE_CURRENT_SONG_LYRIC,
  CHANGE_SIMI_PLAYLIST,
  CHANGE_SIMI_SONG,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_SEQUENCE,
  CHANGE_CURRENT_LYRIC_INDEX,
} from "./constant";

const { Map } = require("immutable");

const defaultState = Map({
  currentSongIndex: 0, //当前播放歌曲的索引
  sequence: 0, //0 循环 1 随机 2 单曲
  currentLyricIndex: 0, //当前播放歌词索引
  currentSong: {}, //当前播放歌曲
  currentSongLyric: [],
  playList: [
    {
      name: "会不会（吉他版）",
      id: 1481164987,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 31165848,
          name: "刘大壮",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 3,
      crbt: null,
      cf: "",
      al: {
        id: 95746611,
        name: "会不会",
        picUrl:
          "https://p2.music.126.net/SFXsIYI3hCCedvbqrvVytA==/109951165335411992.jpg",
        tns: [],
        pic_str: "109951165335411992",
        pic: 109951165335412000,
      },
      dt: 234034,
      h: {
        br: 320002,
        fid: 0,
        size: 9364419,
        vd: 3592,
      },
      m: {
        br: 192002,
        fid: 0,
        size: 5618669,
        vd: 6240,
      },
      l: {
        br: 128002,
        fid: 0,
        size: 3745794,
        vd: 8065,
      },
      a: null,
      cd: "01",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 0,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 0,
    },
    {
      name: "山水之间",
      id: 28802028,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: "许嵩",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 51,
      crbt: null,
      cf: "",
      al: {
        id: 2893090,
        name: "不如吃茶去",
        picUrl:
          "https://p1.music.126.net/WoR2LbM1IFauFpvhBWOjqA==/6642149743396577.jpg",
        tns: [],
        pic: 6642149743396577,
      },
      dt: 276000,
      h: {
        br: 320000,
        fid: 0,
        size: 11047749,
        vd: -16600,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6628666,
        vd: -13900,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4419125,
        vd: -12500,
      },
      a: null,
      cd: "1",
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 294001,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      publishTime: 1408723200007,
    },
    {
      name: "How are you (Live)",
      id: 1485815332,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12134076,
          name: "梁老师Tsong",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 3,
      crbt: null,
      cf: "",
      al: {
        id: 96576796,
        name: "中国新说唱2020 第九期",
        picUrl:
          "https://p2.music.126.net/TQjolDzBjDPyCA1B9InMtQ==/109951165378963716.jpg",
        tns: [],
        pic_str: "109951165378963716",
        pic: 109951165378963710,
      },
      dt: 178546,
      h: {
        br: 320000,
        fid: 0,
        size: 7144365,
        vd: -55450,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4286637,
        vd: -52845,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2857773,
        vd: -51189,
      },
      a: null,
      cd: "01",
      no: 8,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1418025,
      publishTime: 0,
    },
  ], //播放列表
  simiPlaylist: [],
  simiSong: [],
});
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case CHANGE_CURRENT_SONG_LYRIC:
      return state.set("currentSongLyric", action.currentSongLyric);
    case CHANGE_SIMI_PLAYLIST:
      return state.set("simiPlaylist", action.simiPlaylist);
    case CHANGE_SIMI_SONG:
      return state.set("simiSong", action.simiSong);
    case CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    default:
      return state;
  }
}
