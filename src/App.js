// 第三方库
import React, { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
// 功能性
import routes from "./router";
// 组件
import ICAppHeader from "components/app-header";
import ICAppFooter from "components/app-footer";
import ICPlayerBar from "@/pages/player/web-player-bar";
import { Provider } from "react-redux";
import store from "./store";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ICAppHeader />
        {/* 当使用路由懒加载时，需要一个占位符，fallback表示当页面未加载完成时所显示的内容 */}
        <Suspense fallback={<div>Page Loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <ICAppFooter />
        <ICPlayerBar />
      </HashRouter>
    </Provider>
  );
});
