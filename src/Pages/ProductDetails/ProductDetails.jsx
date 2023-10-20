import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams()
    console.log(params);
    const id = params.id;
    console.log(id);
    
    const [product, setProduct] = useState([])
    useEffect(()=>{
     fetch(`https://dummyjson.com/products/${id}`)
     .then(response => response.json())
     .then(data => setProduct(data.products))
    },[])

    console.log(product,'priddfdgdg');
  return (
    <div className='max-w-container m-auto py-8 px-2.5 '>
      ProductDetails

      <h1>TITILE:</h1>
    </div>
  )
}

export default ProductDetails
