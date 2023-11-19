import { useEffect } from "react";

//
import ItemsContainer from "../assets/component/itemsContainer";
import SlideShow from "../assets/component/slideShow";
//
import "../css/homePage.css";

// test data
const data = [
  {
    url: "https://cf.shopee.vn/file/vn-50009109-3b4844af326ff3b9c1e1793d0dbda9f3_xxhdpi",
    link: "",
  },
  {
    url: "https://cf.shopee.vn/file/vn-50009109-1f18bb1d3f752570668b28ee92501320_xxhdpi",
    link: "",
  },
  {
    url: "https://cf.shopee.vn/file/vn-50009109-e568371d9aa38a64c31a18cd56e6fbaf_xxhdpi",
    link: "",
  },
];

export default function HomePage() {
  const Logout = () => {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("refreshToken");
    window.location.reload();
  };

  useEffect(() => {
    if (
      window.sessionStorage.getItem("token") == null ||
      window.sessionStorage.getItem("refreshToken") == null
    ) {
      window.location.href = "/login";
    }
    console.log("da");
  }, []);

  const userContainerOnclick = () => {
    const userContainerOption = document.querySelector(
      "#user-container-option"
    );
    if (userContainerOption.className == "user-container-option-close")
      userContainerOption.className = "user-container-option-open";
    else userContainerOption.className = "user-container-option-close";
  };

  return (
    <div id="home-container">
      <header id="home-header">
        <h1 id="home-name-shop-h1">The Shop</h1>

        <button id="user-container" onClick={userContainerOnclick}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/photography-2/512/YPS__human_avatar_portrait_photography_picture_photo-256.png"
            alt="user-icon"
            id="user-icon"
          />
          <p id="user-name-p">Nguyen Hoang Nam</p>
        </button>
        <div id="user-container-option" className="user-container-option-close">
          <ul id="user-option-list">
            <li>Account</li>
            <li>Cart</li>
            <li>Order</li>
            <li onClick={Logout}>Sigh Out</li>
          </ul>
        </div>
      </header>
      <section id="home-section">
        <header id="banner-container">
          <SlideShow data={data} scrollStep={833} />
        </header>
        <ItemsContainer />
      </section>
    </div>
  );
}
