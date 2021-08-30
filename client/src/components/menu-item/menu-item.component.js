import React from "react";
import { withRouter } from "react-router";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
  return (
    <div
      onClick={(e) => history.push(`${linkUrl}`)}
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
