import { useState } from "react";
import data from "../../db/Data";
import RestaurantPage from "../RestaurantPage/RestaurantPage";
import "../Restaurant/Restaurant.css"
const Restaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderList = () => {
    const list = data.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const mappedArray = list.map((restaurant) => (
      <li key={restaurant._id.$oid} className="card">
        <div>
          <h3>{restaurant.name}</h3>
          <p>Rating: {restaurant.rating}</p>
          <p>Type of Food: {restaurant.type_of_food}</p>
          <p>Address: {restaurant.address}</p>
        </div>
      </li>
    ));

    return mappedArray;
  };

  return (
    <div className="restaurant-container">
      <input
        className="inputBox"
        placeholder="Search restaurant"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

<section className="restaurant-list">{renderList()}</section>
    </div>
  );
};

export default Restaurant;