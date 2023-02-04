import React from "react";
import { Spin } from "antd";
import "./loading.scss";

const Spinner: React.FC = () => (
  <div className="loader">
    <Spin>
      <div className="content" />
    </Spin>
  </div>
);

export default Spinner;
