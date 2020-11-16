// 第三方库
import React, { memo } from "react";
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
        {renderRoutes(routes)}
        <ICAppFooter />
        <ICPlayerBar />
      </HashRouter>
    </Provider>
  );
});
