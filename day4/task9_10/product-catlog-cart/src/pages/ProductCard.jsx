import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from "../redux/slice/productDataSlice";
import { Card } from '../components/Card';
import "../Allcss/ProductCard.css";
import { Loder } from '../components/Loder';

export const ProductCard = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productData);
  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProductData());
    }
  }, [dispatch,products.length]);

  if (loading) {
    return (
      <div className="container d-flex justify-content-center mt-5">
        <Loder />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-between gap-3">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="col-md-3 col-6 mb-3">
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating} 
              />
            </div>
          ))}
      </div>
    </div>
  );
};
