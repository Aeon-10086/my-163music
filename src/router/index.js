import React from "react";
import ICDiscover from "@/pages/discover";
import ICRecomand from "../pages/discover/c-pages/recomand";
import ICTopList from "../pages/discover/c-pages/toplist";
import ICPlayList from "../pages/discover/c-pages/playlist";
import ICDjRadio from "../pages/discover/c-pages/djradio";
import ICArtist from "../pages/discover/c-pages/artist";
import ICAlbum from "../pages/discover/c-pages/album";
import ICPlayer from "@/pages/player";
import ICMine from "@/pages/mine";
import ICFriend from "@/pages/friend";

import { Redirect } from "react-router-dom";

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
