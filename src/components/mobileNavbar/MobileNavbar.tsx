import React, { useContext } from "react";
import { Input } from "antd";
import { YoutubeFilled } from "@ant-design/icons";
import { AppContext } from "../../context/context";
import "./mobileNavbar.scss";
const { Search } = Input;

const MobileNavbar = () => {
  const { setSearchTirm } = useContext(AppContext);
  const onSearch = (value: string) => setSearchTirm(value);

  return (
    <div className="youtube-app__navbar-mobile">
      <div className="youtube-app__navbar-mobile__content">
        <YoutubeFilled style={{ fontSize: '32px', color: 'white' }} />
        <div className="youtube-app__navbar-mobile__content__search-input">
          <Search placeholder=" search " onSearch={onSearch} enterButton />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
