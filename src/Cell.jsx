import PropTypes from "prop-types";

const Cell = ({ cellData }) => {
  return <td>{cellData}</td>;
};

Cell.propTypes = {
  cellData: PropTypes.string.isRequired,
};

export default Cell;
