import PropTypes from "prop-types";
import Row from "./Row";

const Table = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Table;
