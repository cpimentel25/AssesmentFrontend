import './style.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.marketplace.data[id]);
  console.log(product);

  return (
    <div className='product'>
      <div className='productbyid'>
        <div className='productbyid-info'>
          <div className='productbyid-info-header'>
            <h3 className='productbyid-info-header_title'>
              {product.title}
            </h3>
            <p className='productbyid-info-header_category'>
              Category: {product.category}
            </p>
          </div>
          <div className='productbyid-info-data'>
            <p className='productbyid-info-data_price'>Price: ${product.price}</p>
            <p className='productbyid-info-data_rate'>Rate: {product.rating.rate}</p>
          </div>
          <div className='productbyid-info-description'>
            <p className='productbyid-info-description_desc'>{product.description}</p>
          </div>
        </div>
        <div className='productbyid-image'>
          <img className='productbyid-image_img' key={product.image} alt='img' src={product.image} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
