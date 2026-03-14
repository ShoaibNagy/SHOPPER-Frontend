import './ProductDisplay.css';
import star_icon from '../../assets/Frontend_Assets/star_icon.png';
import star_dull_icon from '../../assets/Frontend_Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
  const {product} = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>

          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>

          <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit in repellat? Quibusdam adipisci alias amet consectetur, enim minus, facere libero tenetur cum similique nisi perferendis! Ratione commodi odit asperiores?
          </div>

          <div className="productdisplay-right-sizes-container">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          
          <button>ADD TO CART</button>
          <p className="productdisplay-right-category"><span>Category: </span> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;