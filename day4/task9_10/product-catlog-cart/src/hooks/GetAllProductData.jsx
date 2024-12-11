import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from '../redux/slice/productDataSlice';

export const GetAllProductData = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const products = useSelector((state) => state.productData.products);

    useEffect(() => {
        if (products.length === 0) {
            const fetchData = async () => {
                await dispatch(fetchProductData());
                setLoading(false);
            };
            fetchData();
        } else {
            setLoading(false);
        }
    }, [dispatch, products]);

    return { products, loading };
};
