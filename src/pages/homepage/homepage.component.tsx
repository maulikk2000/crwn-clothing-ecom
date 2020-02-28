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

    </div>
  );
};

export default HomePage;
