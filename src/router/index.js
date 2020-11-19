import React from "react";
import { Redirect } from "react-router-dom";

// 路由的懒加载
const ICDiscover = React.lazy(() => import("@/pages/discover"));
const ICRecomand = React.lazy(() =>
  import("@/pages/discover/c-pages/recomand")
);
const ICTopList = React.lazy(() => import("@/pages/discover/c-pages/toplist"));
const ICPlayList = React.lazy(() =>
  import("@/pages/discover/c-pages/playlist")
);
const ICDjRadio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const ICArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const ICAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"));
const ICPlayer = React.lazy(() => import("@/pages/player"));
const ICMine = React.lazy(() => import("@/pages/mine"));
const ICFriend = React.lazy(() => import("@/pages/friend"));
/* import ICDiscover from "@/pages/discover";
import ICRecomand from "../pages/discover/c-pages/recomand";
import ICTopList from "../pages/discover/c-pages/toplist";
import ICPlayList from "../pages/discover/c-pages/playlist";
import ICDjRadio from "../pages/discover/c-pages/djradio";
import ICArtist from "../pages/discover/c-pages/artist";
import ICAlbum from "../pages/discover/c-pages/album";
import ICPlayer from "@/pages/player";
import ICMine from "@/pages/mine";
import ICFriend from "@/pages/friend"; */

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to='/discover' />,
  },
  {
    path: "/discover",
    component: ICDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to='/discover/recomand' />,
      },
      {
        path: "/discover/recomand",
        component: ICRecomand,
      },
      {
        path: "/discover/toplist",
        component: ICTopList,
      },
      {
        path: "/discover/playlist",
        component: ICPlayList,
      },
      {
        path: "/discover/djradio",
        component: ICDjRadio,
      },
      {
        path: "/discover/artist",
        component: ICArtist,
      },
      {
        path: "/discover/album",
        component: ICAlbum,
      },
      {
        path: "/discover/player",
        component: ICPlayer,
      },
    ],
  },
  {
    path: "/mine",
    component: ICMine,
  },
  {
    path: "/friend",
    component: ICFriend,
  },
];
export default routes;
