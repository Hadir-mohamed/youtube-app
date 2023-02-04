import { FilterOutlined } from "@ant-design/icons";
import './filter.scss'

interface FilterProps {
    count: number;
}
 
const Filter: React.FC<FilterProps> = ({count}) => {
    return (  
        <div className="youtube-app__videos__wrapper__filter-menu">
        <label>About {count} filtered results</label>
        <label>
          <FilterOutlined style={{ fontSize: "16px" }} /> FILTER
        </label>
      </div>
    );
}
 
export default Filter;