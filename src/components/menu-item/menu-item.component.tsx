import React from "react";
import "./menu-item.styles.scss";
import { string } from "prop-types";
//import { withRouter, RouteComponentProps, useHistory } from "react-router-dom";

import { withRouter, RouteComponentProps, useHistory } from "react-router-dom";

// type PathParamType = {
//   param1: string;
// }

// type IMenuItem = RouteComponentProps<PathParamType> & {
//   title: string;
//   imageUrl: string;
//   size?: string;
// }

interface IMenuItem extends RouteComponentProps<any> {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}




const MenuItem: React.FC<IMenuItem> = ({ title, imageUrl, size, linkUrl, match }) => {

  let history = useHistory();

  const handleClick = (link: string) => {
    console.log(link);
    history.push(link);
  }
  return (

    <div className={`${size} menu-item`} onClick={() => handleClick(`${match.url}${linkUrl}`)} >
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

export default withRouter(MenuItem);
