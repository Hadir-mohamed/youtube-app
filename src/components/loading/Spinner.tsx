import React from 'react';
import { Spin } from "antd";

const Spinner: React.FC = () => (
  <div className="loader" style={{marginTop:'50%'}}>
    <Spin>
      <div className="content" />
    </Spin>
  </div>
);

export default Spinner;
