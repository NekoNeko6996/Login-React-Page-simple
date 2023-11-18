import "../../css/items.css";

const testData = [
  {
    id: "23124p129312891231",
    name: "giay hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lo3tu4fxw5ujcc",
    stamp: "",
    price: 21324,
    sold: 14,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
  {
    id: "23124p12931289sd1231",
    name: "giayqwww wwwww www wwwwwwww wwww3 eqwwwwwwwwwwqw hieu",
    imgSrc:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lln8ziejh5toc4",
    stamp: "",
    price: 12312382,
    sold: 241,
  },
];

export default function ItemsContainer() {
  return (
    <section id="items-container">
      {testData.map((data) => (
        <div className="items-box" key={data.id}>
          <img src={data.imgSrc} alt="" />
          <p className="items-name">{data.name}</p>
          <span>
            <p className="items-price">₫{data.price.toLocaleString("vi-VN")}</p>
            <p className="items-sold-text">Sold:</p>
            <p className="items-sold">
              {data.sold < 1000
                ? data.sold
                : `${Math.floor(data.sold / 1000)}k`}
            </p>
          </span>
        </div>
      ))}
    </section>
  );
}
