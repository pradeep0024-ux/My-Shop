import React from "react";

function Home(props) {
  console.log("home remove",props)
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/28/aiphone14-cov-sho-sel-1-1149107-1666957043.jpg?itok=np8d15R3" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
          <button className="remove-cart-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
