import styled from "styled-components";

export const PlayerWrap = styled.div`
  width: 982px;
  margin: 0 auto;
  display: flex;
  background: url(${require("@/assets/img/wrap4.png")}) repeat-y center 0;
`;
export const PlayerLeft = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 37px 30px 40px 39px;
  width: 710px;
  .cvrwrap {
    width: 206px;
    .cover {
      height: 160px;
      position: relative;
      img {
        width: 130px;
        height: 130px;
        display: block;
        margin: 38px;
      }
      .msk {
        position: absolute;
        top: -38px;
        width: 206px;
        height: 205px;
        background-position: -140px -580px;
      }
    }
    .cvrlink {
      margin-top: 20px;
      text-align: center;
      i {
        display: inline-block;
        vertical-align: middle;
        margin-top: -3px;
        width: 16px;
        height: 16px;
        background-position: -34px -863px;
      }
      a {
        text-decoration: underline;
        color: #0c73c2;
      }
    }
  }
  .songDetail {
    width: 414px;
    .hd {
      display: flex;
      i {
        margin-top: 8px;
        width: 54px;
        height: 24px;
        display: inline-block;
        background-position: 0 -463px;
      }
      .title {
        margin-left: 10px;
        em {
          font-size: 24px;
          margin-right: 10px;
        }
        .mvi {
          width: 21px;
          height: 18px;
          display: inline-block;
          background-position: 0 -18px;
          vertical-align: text-bottom;
        }
      }
    }
    .des {
      margin: 10px 0;
      color: #999;
      a {
        color: #0c73c2;
      }
    }
  }
`;
export const PlayerRight = styled.div`
  width: 272px;
  padding: 20px 40px 40px 30px;

  .simi-playlist {
    margin-bottom: 30px;
    .sp-content {
      width: 200px;
      height: 50px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      .sp-info {
        width: 140px;
        .spi-name {
          font-size: 14px;
        }
        .spi-creator {
          span {
            color: #999;
          }
        }
      }
    }
  }
  .simi-song {
    margin-bottom: 20px;

    .ss-content {
      display: flex;
      margin-bottom: 10px;
      .ss-info {
        width: 156px;
        a {
          display: block;
          line-height: 16px;
        }
        .ssi-artist {
          color: #999;
        }
      }
      .ss-opr {
        position: relative;
        top: 12px;
        a {
          display: inline-block;
          text-indent: -9999px;
          width: 10px;
          height: 11px;
        }
        .so-play {
          margin-right: 16px;
          background-position: -69px -455px;
        }
        .so-add {
          background-position: -87px -454px;
        }
      }
    }
  }
`;
