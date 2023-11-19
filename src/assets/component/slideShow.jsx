import PropTypes from "prop-types";
import "../../css/slideShow.css";
//

function SlideShow({ data, scrollStep }) {
  var step = 0;
  //
  const onSlideClick = (direction) => {
    const container = document.getElementById("img-slide-container");
    const currentScroll = container.scrollLeft;

    if (direction == "left") {
      if (currentScroll <= 0)
        container.scrollLeft = scrollStep * (data.length - 1);
      else container.scrollLeft = currentScroll - scrollStep;
      step--;
    } else {
      if (currentScroll >= scrollStep * (data.length - 1))
        container.scrollLeft = 0;
      else container.scrollLeft = currentScroll + scrollStep;
      step++;
    }

    document
      .querySelectorAll(".carousel-dots")
      .forEach((element, key) =>
        key == step
          ? (element.style.backgroundColor = "black")
          : (element.style.backgroundColor = "white")
      );
    if (step >= 2) step = 1;
    else if (step <= 0) step = 2;
  };

  setInterval(() => {
    onSlideClick("right");
  }, 4000);

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
}

// xác địng kiểu dữ liệu của biến truyền vào
//có thể kiểm tra nhiều thuộc tính khác
SlideShow.propTypes = {
  data: PropTypes.array.isRequired, // hoặc PropTypes.arrayOf(PropTypes.any).isRequired
  scrollStep: PropTypes.number.isRequired,
};
//
export default SlideShow;
