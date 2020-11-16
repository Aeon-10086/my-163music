import styled from "styled-components";

export const AppDownloadCpnWrap = styled.div`
  .d-list {
    height: 65px;
    margin-bottom: 10px;
    background-position: 0 -392px;
    display: flex;
    a {
      display: block;
      text-indent: -9999px;
      height: 48px;
    }
    .l-ip,
    .l-android {
      width: 42px;
    }
    .l-pc {
      width: 60px;
      margin: 0 26px 0 30px;
      &:hover {
        background-position: -72px -472px;
      }
    }
    .l-ip:hover {
      background-position: 0 -472px;
    }
    .l-android:hover {
      background-position: -158px -472px;
    }
  }
  .txt {
    color: #999;
  }
`;
