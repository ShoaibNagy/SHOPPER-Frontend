import './Breadcrum.css';
import breadcrum_arrow_icon from '../../assets/Frontend_Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className="breadcrum">
      HOME <img src={breadcrum_arrow_icon} alt="Breadcrumb Arrow Icon" /> SHOP <img src={breadcrum_arrow_icon} alt="Breadcrumb Arrow Icon" /> {product.category} <img src={breadcrum_arrow_icon} alt="Breadcrumb Arrow Icon" /> {product.name}
    </div>
  );
};

export default Breadcrum;