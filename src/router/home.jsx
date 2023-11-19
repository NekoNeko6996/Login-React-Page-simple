import { useEffect, lazy } from "react";
import ReactPaginate from "react-paginate";
//css bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

//
const ItemsContainer = lazy(() => import("../assets/component/itemsContainer"));
const SlideShow = lazy(() => import("../assets/component/slideShow"));
const Category = lazy(() => import("../assets/component/category"));
const SearchBar = lazy(() => import("../assets/component/searchBar"));
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
  {
    url: "https://cf.shopee.vn/file/vn-50009109-2eb798374b65de905510aa91380aaf62_xxhdpi",
    link: "",
  },
];
// 
const data_category = [
  {
    name: "ao",
    imgUrl:
      "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn&quot",
    link: "#",
  },
  {
    name: "phu kien dien thoai",
    imgUrl:
      "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn&quot",
    link: "#",
  },
  {
    name: "may tinh",
    imgUrl:
      "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d_tn&quot",
    link: "#",
  },
  {
    name: "phu kien",
    imgUrl: "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn&quot",
    link: "#",
  },
  {
    name: "do trang tri",
    imgUrl: "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn&quot",
    link: "#",
  },
  {
    name: "do dung nha biep",
    imgUrl: "https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn&quot",
    link: "#",
  },
];


// ///////////////////////////////////////////////////////////////////////////////
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

  const handlePageClick = () => {
    console.log()
  }
  const pageCount = 15;

  return (
    <div id="home-container">
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
      <section id="home-section">
        <header id="banner-container">
          <SlideShow data={data} scrollStep={833} />
        </header>
        <Category data={data_category}/>
        <ItemsContainer />
      </section>
      <footer id="home-footer">
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      </footer>
    </div>
  );
}
