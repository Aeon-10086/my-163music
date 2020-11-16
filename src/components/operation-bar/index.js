import React, { memo } from "react";
import { OperationBarWrap } from "./style";

export default memo(function OperactionBar(props) {
  const { favor, share, downl, comt } = props;
  return (
    <OperationBarWrap>
      <div className='play'>
        <a href='/#' className='toplay sprite_button'>
          <span className='toplay-bg sprite_button'>
            <i className='sprite_button'></i>
            <span className='txt'>播放</span>
          </span>
        </a>
        <a href='/#' className='tolist sprite_button'>
          +
        </a>
      </div>
      <a href='/#' className='favor sprite_button'>
        <i className='sprite_button'>{favor}</i>
      </a>
      <a href='/#' className='share sprite_button'>
        <i className='sprite_button'>{share}</i>
      </a>
      <a href='/#' className='downl sprite_button'>
        <i className='sprite_button'>{downl}</i>
      </a>
      <a href='/#' className='comt sprite_button'>
        <i className='sprite_button'>{comt}</i>
      </a>
    </OperationBarWrap>
  );
});
