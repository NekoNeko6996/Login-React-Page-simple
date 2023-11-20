import PropTypes from "prop-types";
import "../../css/slideShow.css";
import { useCallback, useEffect, useRef } from "react";
import React from "react";
//

const SlideShow = React.memo(function SlideShow({ data, scrollStep }) {
  const step = useRef(0);
  //
  const onSlideClick = useCallback(
    (direction) => {
      const container = document.getElementById("img-slide-container");
      const currentScroll = container.scrollLeft;

      if (direction == "left") {
        if (currentScroll <= 0) {
          container.scrollLeft = scrollStep * (data.length - 1);
          step.current = data.length - 1;
        } else {
          container.scrollLeft = currentScroll - scrollStep;
          step.current--;
        }
      } else {
        if (currentScroll >= scrollStep * (data.length - 1)) {
          container.scrollLeft = 0;
          step.current = 0;
        } else {
          container.scrollLeft = currentScroll + scrollStep;
          step.current++;
        }
      }

      document
        .querySelectorAll(".carousel-dots")
        .forEach((element, key) =>
          key == step.current
            ? (element.style.backgroundColor = "black")
            : (element.style.backgroundColor = "white")
        );
    },
    [data.length, scrollStep]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      onSlideClick("right");
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [onSlideClick]);

  return (
    <div id="slideShow-container">
      <div id="slide-btn-left" onClick={() => onSlideClick("left")}></div>
      <div id="img-slide-container">
        {data.map((data) => (
          <img
            src={data.url}
            alt="img slide show"
            key={data.url}
            className="img-slide-elements"
          />
        ))}
      </div>
      <div id="slide-btn-right" onClick={() => onSlideClick("right")}></div>
      <div id="stardust-carousel-dots">
        {data.map((data, index) => (
          <span
            key={index}
            id={`carousel-dots-${index}`}
            className="carousel-dots"
          ></span>
        ))}
      </div>
    </div>
  );
});

// xác địng kiểu dữ liệu của biến truyền vào
//có thể kiểm tra nhiều thuộc tính khác
SlideShow.propTypes = {
  data: PropTypes.array.isRequired, // hoặc PropTypes.arrayOf(PropTypes.any).isRequired
  scrollStep: PropTypes.number.isRequired,
};
//
export default SlideShow;
