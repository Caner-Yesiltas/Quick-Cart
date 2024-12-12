import React from 'react'
import '../styles/Product.css'
const Product = ({product}) => {
    const {id, price, image,title, description} = product;
    console.log(product);
  return (
    <div className='card'  >
     
      <img className='image'  src={product.image} alt=""  />
      <div >
        <p  style={{textAlign:'center', height:'3.125rem'}} >{title}</p>
        <h3 style={{textAlign:'center'}}   >{price}💲</h3>

      </div>
    </div>
  )
}

export default Product
