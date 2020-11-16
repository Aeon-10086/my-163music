import styled from "styled-components";

export const PlayerBarWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  /* .player-bar { */
  /* top: -53px;
		position: absolute;
		left: 0; */
  /* width: 100%; */
  height: ${(props) => (props.isLocked ? "53px" : "8px")}; //53px
  &:hover {
    height: 53px;
  }
  transition: height 0.2s ease-in;
  .b-bg {
    height: 53px;
    background-position: 0 0;
    background-repeat: repeat-x;
    margin-right: 67px;
  }
  .b-updn {
    position: absolute;
    top: -14px;
    height: 67px;
    width: 67px;
    right: 0;
    background-position: 0 -380px;
    .lock {
      cursor: pointer;
      text-indent: -9999px;
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      background-position: ${(props) => (props.isLocked ? "-100px" : "-80px")} -380px;
      &:hover {
        background-position: ${(props) => (props.isLocked ? "-100px" : "-80px")} -400px;
      }
    }
  }
  .b-hand {
    position: absolute;
    top: -18px;
    width: 100%;
    height: 20px;
    cursor: pointer;
    z-index: -1;
  }
  /* } */
`;
export const BarContentWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 980px;
  height: 47px;
  /* background-color: #fff; */
  top: 6px;
  display: flex;
  justify-content: space-between;
`;
export const Control = styled.div`
  display: flex;
  width: 108px;
  height: 47px;
  justify-content: space-between;
  button {
    cursor: pointer;
  }
  .prev,
  .next {
    display: block;
    margin-top: 9px;
    width: 28px;
    height: 28px;
    text-indent: -9999px;
  }
  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
  .play {
    display: block;
    width: 36px;
    height: 36px;
    margin-top: 5px;
    background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    text-indent: -9999px;
    &:hover {
      background-position: -40px
        ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    }
  }
`;
export const PlayInfo = styled.div`
  margin-top: 5px;
  width: 630px;
  height: 47px;
  display: flex;
  .image {
    position: relative;
    img {
      height: 34px;
      width: 34px;
      border-radius: 4px;
    }
    a {
      text-indent: -9999px;
      position: absolute;
      top: 0;
      left: 0;
      height: 35px;
      width: 34px;
      display: block;
      background-position: 0 -80px;
    }
  }
  .progress {
    margin-left: 17px;
    /* width: 565px; */
    .p-info {
      margin-bottom: 3px;
      display: flex;
      .song-name,
      .singer-name,
      .src {
        display: block;
        margin-right: 15px;
        color: #9b9b9b;
      }
      .song-name {
        color: #e8e8e8;
      }
      .src {
        width: 14px;
        height: 15px;
        margin-top: 3px;
        background-position: -110px -103px;
        text-indent: -9999px;
        &:hover {
          background-position: -130px -103px;
        }
      }
    }
    .p-pg {
      display: flex;
      .ant-slider {
        margin: 0;
        width: 492px;
      }
      .ant-slider-handle {
        border: none;
        top: 1px;
        width: 22px;
        height: 24px;
        background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        &:hover {
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -280px;
        }
        &:focus {
          box-shadow: none;
        }
      }
      .ant-slider-rail,
      .ant-slider-track {
        height: 9px;
      }
      .ant-slider-rail {
        background: url(${require("@/assets/img/progress_bar.png")}) right 0;
      }
      .ant-slider-track {
        background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
      }
      .time {
        margin-top: -4px;
        margin-left: 13px;
        height: 13px;
        color: #797979;
        .now-time {
          color: #a1a1a1;
        }
      }
    }
  }
`;
export const Operator = styled.div`
  width: 188px;
  height: 47px;
  display: flex;
  .btn {
    display: inline-block;
    background-color: transparent;
    color: #666;
    cursor: pointer;
  }
  .favor,
  .share,
  .volume,
  .loop {
    width: 25px;
    height: 25px;
    text-indent: -9999px;
  }
  .left {
    margin-top: 11px;
    margin-right: 8px;
    .favor {
      margin-right: 2px;
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
      }
    }
    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }
  .right {
    padding-left: 13px;
    background-position: -147px -238px;
    position: relative;
    .volume-control {
      visibility: ${(props) => (props.isChangeVolume ? "visible" : "hidden")};
      position: absolute;
      top: -113px;
      left: 9px;
      width: 32px;
      height: 113px;
      .vc-bg {
        width: 32px;
        height: 113px;
        background-position: 0 -503px;
      }
      .ant-slider {
        position: absolute;
        top: 8px;
        height: 90px;
        /* overflow: hidden; */
      }
      .ant-slider-handle {
        width: 18px;
        height: 20px;
        left: 2px;
        border: none;
        background: url(${require("@/assets/img/sprite_icon.png")}) -40px -250px;
        &:focus {
          box-shadow: none;
        }
      }
      .ant-slider-rail {
        background-color: transparent;
      }
      .ant-slider-track {
        width: 6px;
        background: url(${require("@/assets/img/playbar_sprite.png")}) -40px bottom;
      }
    }
    .volume,
    .loop,
    .playlist {
      margin-top: 11px;
      margin-left: 2px;
    }
    .volume {
      background-position: ${(props) =>
        props.isMuted ? "-104px -69px" : "-2px -248px"};
      &:hover {
        //-31px -248px
        background-position: ${(props) =>
          props.isMuted ? "-126px -69px" : "-31px -248px"};
      }
    }
    //循环控制
    .loop {
      /* background-position: -3px -344px;//列表循环 */
      /* background-position: -65px -248px; //随机播放 */
      /* background-position: -65px -344px;//单曲循环 */
      background-position: ${(props) => {
        switch (props.sequence) {
          case 0:
            return "-3px -344px";
          case 1:
            return "-65px -248px";
          case 2:
            return "-65px -344px";
          default:
            return "-3px -344px";
        }
      }};
      &:hover {
        /* background-position: -33px -344px;//列表循环 */
        /* background-position: -92px -248px; //随机播放 */
        /* background-position: -92px -344px;//单曲循环 */
        background-position: ${(props) => {
          switch (props.sequence) {
            case 0:
              return "-33px -344px";
            case 1:
              return "-92px -248px";
            case 2:
              return "-92px -344px";
            default:
              return "-33px -344px";
          }
        }};
      }
    }
    .playlist {
      padding-left: 25px;
      width: 59px;
      height: 25px;
      line-height: 25px;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`;
