const { default: styled } = require("styled-components");

export const DiscoverWrap = styled.div`
  .top {
    /* display: flex; */
    min-width: 1070px;
    height: 35px;
    background-color: #c20c0c;
  }
`;
export const TopMenu = styled.ul`
  display: flex;
  padding-left: 180px;
  /* background-color: #85b8c9; */
  .menu-item {
    margin-top: 5px;
    height: 34px;
    text-align: center;
    /* position: relative; */
    /* top: -4px; */

    .menu-alink {
      color: #fff;
      display: inline-block;
      height: 20px;
      padding: 0 13px;
      margin: 2px 17px 0;
      line-height: 21px;
      border-radius: 20px;
      &:hover,
      &.active {
        background-color: #9b0909;
        text-decoration: none;
      }
    }
  }
`;
