function Home() {
  return (
    <div>
      <h1>this is home components</h1>
      <div className="add-to-cart">
    <img src="https://indyme.com/wp-content/uploads/2020/11/shopping-cart-icon.png"/>
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-phone 14</span>
          <span>Price: $123243.6</span>
        </div>
        <div className="btn-wrapper item">
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
