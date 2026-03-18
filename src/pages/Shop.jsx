import Hero from "../components/Hero/Hero";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Offers from "../components/Offers/Offers";
import Popular from "../components/Popular/Popular";
import './css/Shop.css';

const Shop = () => {
  return (
    <div className="shopping-main-content">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Shop;
