import React from 'react'
import '../styles/Product.css'
import { useNavigate } from 'react-router-dom';
const Product = ({product}) => {
    const {id, price, image,title, description} = product;

    const navigate = useNavigate();

    console.log(product);
  return (
    <div className='card'  >
     
      <img className='image'  src={product.image} alt=""  />
      <div >
        <p  style={{textAlign:'center', height:'3.125rem'}} >{title}</p>
        <h3 style={{textAlign:'center'}}   >{price}💲</h3>
      </div>
      <div className='flex-row' style={{margin:'1rem'}}>
        <button onClick={()=>navigate(`/product-details/${id}`)} className='detail-button' > View Details </button>  
        {/* onClick={() => navigate("/product=details"+id)} Alternative way using + operator */}
      </div>
    </div>
  )
}

export default Product
