import React from "react";
import "./SidebarOption.scss";
import { Icon } from "@material-ui/core";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4> {title} </h4> : <p> {title} </p>}
    </div>
  );
};

export default SidebarOption;
