import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from '../../components/Product'

const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
     fetch('https://dummyjson.com/products')
     .then(response => response.json())
     .then(data => setProduct(data.products))
    },[])

    // console.log(product, 'opppppppppppppppppp');
  return (
    <div className='max-w-container m-auto py-8 px-2.5 '>
      PRODUCTS
      <div className='flex flex-wrap justify-between'>
        {
            product.map(productItem => (
                <Link to={`/products/${productItem.id}`}>
                <Product productItem={productItem}></Product>
                </Link>
            ))
        }
      </div>
      
    </div>
  )
}

export default Products
