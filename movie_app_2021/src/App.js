import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "http://img.khan.co.kr/news/2016/12/09/l_2016120901001299800104967.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "ramen",
    image:
      "http://visit-minato-city.com/ko/wp-content/uploads/2018/01/C657002E-A255-4C2A-97EB-F64D4DF89B1A.jpeg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "pasta",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/04/01/f8b3042c80a214dd7cc60fa2027cdc9d1.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "pizza",
    image: "http://img.segye.com/content/image/2020/07/09/20200709515774.png",
    rating: 4.7,
  },
];

function Food({ name, picture, rating }) {
  console.log(name);
  return (
    <div>
      <h1>I Like {name} !! </h1>
      <h4>{rating} / 5.0</h4>
      <img src={picture} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      <h1>Bold Hello</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
      ;
    </div>
  );
}

export default App;
