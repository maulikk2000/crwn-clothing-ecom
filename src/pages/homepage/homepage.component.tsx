import React from "react";
import "./homepage.styles.scss";
import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";

interface IHomePageProps {
  name: string;
}

//const HomePage: React.FC<IHomePageProps> = ({ name }) => {

const HomePage: React.FC = () => {
  return (
    // <div>
    //   <h1>Hello</h1>
    // </div>
    <div className="homepage">
      <Directory />
      {/* <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <MenuItem title={"HATS"}></MenuItem>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
