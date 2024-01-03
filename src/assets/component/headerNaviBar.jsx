import React from "react";

const HeaderNavBar = React.memo(function HeaderNavBar() {


    


  return (
    <header id="home-header">
      <h2 id="home-name-shop-h2">The Shop No Care</h2>
      <SearchBar />
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
  );
});

export default HeaderNavBar;
