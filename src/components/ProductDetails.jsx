import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { addToBasket } from '../redux/slices/basketSlice';


const ProductDetails = () => {
  const { id } = useParams();

  const { products, selectedProduct } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const { price, image, title, description } = selectedProduct;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count
    }
    dispatch(addToBasket(payload))
  }




  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div
      style={{
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginRight: '40px' }}>
        <img src={image} width={300} height={500} alt='' />
      </div>
      <div>
        <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
        <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
        <h1
          style={{
            fontSize: '50px',
            fontFamily: 'arial',
            fontWeight: 'bold',
            color: 'rgb(185, 76, 76)',
          }}
        >
          {price}$
        </h1>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CiCirclePlus
            style={{ fontSize: '2.5rem', marginRight: '15px' }}
            onClick={increment}
          />{' '}
          <span style={{ fontSize: '2.1875rem' }}> {count} </span>{' '}
          <CiCircleMinus
            style={{ fontSize: '2.5rem', marginLeft: '15px' }}
            onClick={decrement}
          />
        </div>
        <div>
          <button onClick={addBasket}
            style={{
              marginTop: '25px',
              border: 'none',
              padding: '10px',
              backgroundColor: 'rgb(185, 76, 76)',
              color: '#fff',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Add Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
