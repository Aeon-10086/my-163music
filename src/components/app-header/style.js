import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  height: 70px;
  font-size: 14px;
  min-width: 1070px;
  color: #fff;
  background-color: #242424;
  .content {
    height: 70px;
    /* background-color: #90bece; */
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .select-list {
    display: flex;
    line-height: 70px;
    .select-item {
      /*
			width: 94px;
			text-align: center;
			*/
      position: relative;
      a {
        color: #ccc;
        display: block;
        padding: 0 19px;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          /* 此处在设置背景图片的时候需要将图片作为模块导入 */
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      &:hover a,
      a.active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input::placeholder {
      font-size: 12px;
    }
  }
  div {
    cursor: pointer;
    margin: 0 16px;
  }
  .center {
    line-height: 32px;
    text-align: center;

    width: 90px;
    height: 32px;
    border: 1px solid #4f4f4f;
    border-radius: 16px;
    background-color: transparent;
    :hover {
      border: 1px solid #ccc;
    }
  }
`;
