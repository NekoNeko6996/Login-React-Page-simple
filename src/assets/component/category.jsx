import "../../css/category.css";

import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types"

//
const Category = React.memo(function Category({ data }) {
  return (
    <nav id="category">
      <h3>Category</h3>
      <div id="items-category-container">
        {data.map((data, index) => (
          <Link to={`${data.link}`} key={`link-category-${index}`} id="link-category">
            <div className="items-category">
              <img src={data.imgUrl} alt="category-img" />
              <p>{data.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
});

// định kiểu dữ liệu và yêu cầu
Category.propTypes = {
    data: PropTypes.array.isRequired
}


export default Category;
