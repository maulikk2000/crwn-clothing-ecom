import React from "react";
import "./menu-item.styles.scss";
import { string } from "prop-types";

interface IMenuItem {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: React.FC<IMenuItem> = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
