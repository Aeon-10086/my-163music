import styled from "styled-components";

export const OperationBarWrap = styled.div`
  height: 31px;
  display: flex;
  /* background-color: lightblue; */
  .play,
  .favor,
  .share,
  .downl,
  .comt {
    margin-right: 6px;
  }
  .play {
    .toplay {
      width: 66px;
      height: 34px;
      display: inline-block;
      background-position: right -428px;
      .toplay-bg {
        display: inline-block;
        width: 61px;
        height: 34px;
        background-position: 0 -387px;
        padding: 0 5px 0 8px;
        margin-right: 5px;
        color: #fff;
        i {
          display: inline-block;
          width: 20px;
          height: 18px;
          margin: 5px 2px 0;
          vertical-align: middle;
          background-position: 0px -1622px;
        }
        .txt {
          vertical-align: bottom;
        }
      }
      &:hover {
        background-position: right -510px;
        .toplay-bg {
          background-position: 0 -469px;
          i {
            background-position: -28px -1622px;
          }
        }
      }
    }
    .tolist {
      text-indent: -9999px;
      display: inline-block;
      margin-left: -3px;
      padding-top: 2px;
      height: 31px;
      width: 31px;
      background-position: 0 -1588px;
      &:hover {
        background-position: -40px -1588px;
      }
    }
  }
  .favor,
  .share,
  .downl {
    display: inline-block;
    height: 31px;
    width: 59px;
    background-position: right -1020px;
    &:hover {
      background-position: right -1106px;
    }
  }
  i {
    display: inline-block;
  }
  .comt {
    display: inline-block;
    height: 31px;
    width: 80px;
    background-position: right -1020px;
    &:hover {
      background-position: right -1106px;
    }
  }
  .favor i {
    height: 31px;
    width: 54px;
    background-position: 0 -977px;
    padding: 6px 2px 0 28px;

    &:hover {
      background-position: 0 -1063px;
    }
  }
  .share i {
    height: 31px;
    width: 54px;
    background-position: 0 -1225px;
    padding: 6px 2px 0 28px;
    &:hover {
      background-position: 0 -1268px;
    }
  }
  .downl i {
    height: 31px;
    width: 55px;
    background-position: 0 -2761px;
    padding: 6px 2px 0 28px;
    &:hover {
      background-position: 0 -2805px;
    }
  }
  .comt i {
    height: 31px;
    width: 78px;
    background-position: 0 -1465px;
    padding: 6px 2px 0 28px;
    &:hover {
      background-position: 0 -1508px;
    }
  }
`;
