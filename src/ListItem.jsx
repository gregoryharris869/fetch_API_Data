import PropTypes from "prop-types";

const ListItem = ({ item }) => {
  return <li>{JSON.stringify(item)}</li>;
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItem;
