import request from "./request";
const getSongDetail = (ids) => {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
};
const getSongLyric = (id) => {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
};
const getSimiPlaylist = (id) => {
  return request({
    url: "/simi/playlist",
    params: {
      id,
    },
  });
};
const getSimiSong = (id) => {
  return request({
    url: "/simi/song",
    params: {
      id,
    },
  });
};
export { getSongDetail, getSongLyric, getSimiPlaylist, getSimiSong };
