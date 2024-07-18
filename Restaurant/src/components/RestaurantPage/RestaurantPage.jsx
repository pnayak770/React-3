import PropTypes from "prop-types";

const RestaurantPage = ({ name , rating ,type_of_food,address}) => {
  return (
    <div>
      {name}
      {rating}
      {type_of_food}
      {address}
    </div>
  );
};

RestaurantPage.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  type_of_food: PropTypes.string,
  address: PropTypes.string,
};

export default RestaurantPage;