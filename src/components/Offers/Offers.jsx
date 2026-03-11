import exclusive_image from "../../assets/Frontend_Assets/exclusive_image.png";
import './Offers.css';

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON THE BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
}

export default Offers;
