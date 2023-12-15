import PropTypes from "prop-types";
import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
