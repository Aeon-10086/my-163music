import React, { memo } from "react";
import { AppDownloadCpnWrap } from "./style";

export default memo(function AppDownloadCpn() {
  return (
    <AppDownloadCpnWrap>
      <h3 className='l-hd'>网易云音乐多端下载</h3>
      <ul className='d-list sprite_download'>
        <li>
          <a
            href='https://apps.apple.com/cn/app/id590338362'
            className='l-ip sprite_download'>
            iPhone
          </a>
        </li>
        <li>
          <a
            href='https://music.163.com/api/pc/download/latest'
            className='l-pc sprite_download'>
            PC
          </a>
        </li>
        <li>
          <a
            href='https://music.163.com/api/android/download/latest2'
            className='l-android sprite_download'>
            Android
          </a>
        </li>
      </ul>
      <p className='txt'>同步歌单，随时畅听320k好音乐</p>
    </AppDownloadCpnWrap>
  );
});
