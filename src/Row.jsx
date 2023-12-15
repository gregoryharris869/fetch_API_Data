import PropTypes from "prop-types";
import Cell from "./Cell";

const Row = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <Cell key={key} cellData={JSON.stringify(value)} />;
      })}
    </tr>
  );
};

Row.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Row;
