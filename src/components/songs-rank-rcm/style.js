import styled from "styled-components";

export const SongsRankRCMWrap = styled.dl`
  width: 230px;
  .header {
    display: flex;
    padding: 20px 0 0 19px;
    width: 100%;
    height: 120px;
    .header-pic {
      position: relative;
      .pic-img,
      .pic-cover {
        width: 80px;
        height: 80px;
      }
      .pic-cover {
        position: absolute;
        left: 0;
        top: 0;
        text-indent: -9999px;
        background-position: -145px -57px;
      }
    }
    .header-title {
      width: 116px;
      margin: 6px 0 0 10px;
      .text {
        display: block;
        width: 100%;
        color: #333;
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .btn {
        margin-top: 10px;
        .btn-p,
        .btn-f {
          display: inline-block;
          text-indent: -9999px;
          height: 22px;
          width: 22px;
          margin-right: 10px;
        }
        .btn-p {
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        .btn-f {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .cpn-content {
    width: 100%;

    .list {
      height: 319px;
      margin-left: 50px;
      line-height: 32px;
      .list-item {
        display: flex;
        .item-rank {
          /* position: relative; */
          width: 35px;
          height: 32px;
          margin-left: -35px;
          text-align: center;
          font-size: 16px;
          color: #666;
        }
        /* ??? */
        :nth-child(-n + 3) .item-rank {
          color: #c10d0c;
        }
        .item-name {
          display: block;
          width: 170px;
          height: 32px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #000;
        }
        .oper {
          display: none;
          width: 82px;
          height: 17px;
          padding-top: 7px;
          vertical-align: middle;
          .play,
          .addto,
          .favor {
            cursor: pointer;
            height: 17px;
            width: 17px;
            margin-right: 9px;
            display: inline-block;
            text-indent: -9999px;
          }
          .play {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          .addto {
            background-position: 2px -698px;
            &:hover {
              background-position: -20px -698px;
            }
          }
          .favor {
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }
        &:hover {
          .item-name {
            width: 96px;
          }
          .oper {
            display: block;
          }
        }
      }
    }
    .more {
      color: #000 !important;
      height: 32px;
      line-height: 32px;
      display: block;
      text-align: right;
      margin-right: 32px;
    }
  }
`;
