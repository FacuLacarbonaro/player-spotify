import React from "react";

import "./Sidebar.scss";

import logo from "../../assets/images/png/logo.png";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../DataLayer";
import { getTokenFromUrl } from "../../spotify";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="" />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">Playlists</strong>

      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
