import { Select, Space } from "antd";
import './filter.scss';


const Filter: React.FC = () => {
  return (
    <div className="youtube-app__videos__wrapper__filter-menu-mobile">

    <Space wrap>
      <Select
        style={{ width: 120 }}
        placeholder="All"
        options={[]}
        />
      <Select
        style={{ width: 120 }}
        placeholder="Any time"
        options={[]}
        />
    </Space>
        </div>
  );
};

export default Filter;
