import React from "react";
import { Avatar, Card, Skeleton } from "antd";

const { Meta } = Card;

const App: React.FC = () => {
  return (
    <>
      <Card style={{ width: 300, marginTop: 16 }}>
        <Skeleton loading={true} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
};

export default App;
