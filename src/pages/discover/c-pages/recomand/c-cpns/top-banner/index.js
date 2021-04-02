import React, { memo, useEffect, useRef, useState, useCallback } from "react";

import { getTopBannerAction } from "../../store/actionCreators";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Carousel } from "antd";
import { TopBannerWrap, BannerLeft, BannerRight, BannerControl } from "./style";
export default memo(function TopBanner() {
  // 内部 state
  const [currentIndex, setCurrentIndex] = useState(0);
  // 组件和 redux 相关：获取数据和进行操作
  const { topBanner } = useSelector(
    (state) => ({
      topBanner: state.getIn(["recomand", "topBanner"]),
      // topBanner: state.get("recomand").get("topBanner"),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // 其他 hooks
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  const carouselRef = useRef();
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      //采用异步解决点击nav图片仅背景切换的bug
      setCurrentIndex(to);
    }, 0);
  }, []);
  // 其他逻辑代码
  const bgImage =
    topBanner[currentIndex] &&
    topBanner[currentIndex].imageUrl + "?imageView&blur=40x20";
  return (
    <TopBannerWrap bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel
            effect='fade'
            autoplay
            ref={carouselRef}
            beforeChange={bannerChange}>
            {topBanner.map((item, index) => (
              <div key={item.scm} className='banner-item'>
                <img src={item.imageUrl} alt={item.title} />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className='btn btn-left'
            onClick={(e) => carouselRef.current.prev()}>
            prev
          </button>
          <button
            className='btn btn-right'
            onClick={(e) => carouselRef.current.next()}>
            next
          </button>
        </BannerControl>
      </div>
    </TopBannerWrap>
  );
});
