export const parseLyric = (lyricStr) => {
  let tempArr = lyricStr.split("\n");
  // console.log(tempArr);
  let lyricExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
  let lyrics = [];
  for (let item of tempArr) {
    if (item) {
      const itemTime = lyricExp.exec(item);
      if (!itemTime) continue;
      const time =
        itemTime[1] * 60000 +
        itemTime[2] * 1000 +
        (itemTime[3].length === 3 ? itemTime[3] * 1 : itemTime[3] * 10);
      // console.log(time);
      const content = item.replace(lyricExp, "").trim();
      lyrics.push({ time, content });
    }
  }
  return lyrics;
};
