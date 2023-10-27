import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams()
    console.log(params);
    const id = params.id;
    console.log(id);
    
    const [product, setProduct] = useState([]);
    const [image, setImage] = useState([]);
    const [quantity, setQuantity] = useState(0)
    useEffect(()=>{
     fetch(`https://dummyjson.com/products/${id}`)
     .then(response => response.json())
     .then(data => {
      setProduct(data);
      setImage(data.images)
     })
    },[])

    const handleQuantity = () =>{
      if(quantity > 0){
        setQuantity(quantity - 1)
      }
    }
  return (
    <div className='max-w-container m-auto py-8 px-2.5 '>
       <h1 className='font-Sans text-[30px] font-bold mb-[20px]'>Product All Images:</h1>
       {/* <div className='flex justify-between flex-wrap'>
       {
        product?.images?.map((item)=> (
          <img src={item} alt="" className='w-[370px] h-[370px] object-cover'/>
        ))
       }
       </div> */}

       <div className='flex justify-between flex-wrap'>
        {
          image.map((item)=>(
            <img src={item} alt="" className='w-[370px] h-[370px] object-cover'/>
          ))
        }
       </div>
    
      <h1 className='font-Sans text-[30px] font-bold mt-[20px]'>ProductDetails:</h1>
      <div className='mt-[30px] ml-[20px]'>
        <h3 className='font-Sans text-[18px] mt-[10px]'> <span className='font-bold text-[20px] mr-[10px]'>Title: </span> {product.title}</h3>
        <h3 className='font-Sans text-[18px] mt-[10px]'><span className='font-bold text-[20px] mr-[10px]'>Brand: </span> {product.brand}</h3>
        <h3 className='font-Sans text-[18px] mt-[10px]'><span className='font-bold text-[20px] mr-[10px]'>Category: </span>{product.category}</h3>
        <h3 className='font-Sans text-[18px] mt-[10px]'><span className='font-bold text-[20px] mr-[10px]'>Description: </span>{product.description}</h3>
        <h3 className='font-Sans text-[18px] mt-[10px]'><span className='font-bold text-[20px] mr-[10px]'>Price: </span> ${product.price}</h3>
        
        <div className='flex items-center mt-[10px]'>
          <p className='font-Sans text-[20px] font-bold mr-[10px]'>QUANTITY: </p>
          <div className='w-[200px] border-2 border-[#767676] '>
            <div className='flex gap-x-[10px] items-center justify-around'>
            <button onClick={()=> setQuantity(quantity + 1)} className='text-[30px]'>+</button>
            <div className='font-bold text-[20px]'>{quantity}</div>
             <button onClick={handleQuantity} className='text-[30px]'>-</button>
            </div>
          </div>
        </div>

        <button className='mt-[20px] border px-[40px] py-[20px] bg-secondary text-white'>ADD TO CART</button>

      </div>
    </div>
  )
}

export default ProductDetails
