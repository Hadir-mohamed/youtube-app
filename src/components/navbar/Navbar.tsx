import React, { useContext } from "react";
import { Input } from "antd";
import { AppContext } from "../../context/context";
import "./navbar.scss";
const { Search } = Input;

const Navbar: React.FC = () => {
  const { setSearchTirm } = useContext(AppContext);
  const onSearch = (value: string) => setSearchTirm(value);

  return (
    <div className="youtube-app__navbar">
      <div className="youtube-app__navbar__content">
        <img  src={require('../../images/youtube-logo.png')}alt="" />
        <div className="youtube-app__navbar__content__search-input">
          <Search placeholder=" search " onSearch={onSearch} enterButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
