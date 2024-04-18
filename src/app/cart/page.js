"use client";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header';
import { remove } from '../store/slices/CartSlice';
import { useRouter } from 'next/navigation';

const page = () => {
    const cartValue = useSelector((state)=>state.cart);
    const dispatch = useDispatch()
    function removeToCart(id){
      alert("Really you want to remove it")
      dispatch(remove(id))
    }
    const auth = useSelector((state)=>state.auth)
    if(auth){
    }
  return (
    <>
    <Header/>
    <p className='text-center text-xl sm:text-2xl lg:text-4xl mt-5 lg:mt-10'>Your Cart {cartValue.length==0?"is empty ...":''}</p>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-5 gap-10'>
      {cartValue.map((product)=>{
        const {id,title,price,description,category,image} = product;
        return <div key={id} className='p-2 rounded-lg shadow-lg'>
          <img src={image} alt='product-image'/>
          <p>{title}</p>
          <p>price: ₹{price}</p>
          <button className='bg-slate-400 rounded p-2 hover:bg-slate-300 m-2'>Order Now</button>
          <button onClick={()=>removeToCart(id)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Remove</button>

        </div>
      })}
    </div>
    {cartValue.length>0?<div className='flex justify-center w-full'><button className='bg-red-500 rounded-lg my-10  px-3 sm:px-5 lg-px-10  py-3 text-white'>Order all products</button></div>: ""}
    
    </>
  )
}

export default page