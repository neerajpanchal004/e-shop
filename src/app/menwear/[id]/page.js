"use client"
import AppLayout from '@/app/components/AppLayout';
import Loader from '@/app/components/Loader';
import { add } from '@/app/store/slices/CartSlice';
import axios from 'axios';
import { useParams, } from 'next/navigation'
import React, {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';


const Page = () => {
    const [data, setData] = useState([])
 
  const { id } = useParams();
  async function fetchSingleProduct(){
    try {
        const res = await axios.get(`/api/menwear/${id}`)
        setData(res.data)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    fetchSingleProduct()
  }, [])
  const dispatch = useDispatch()

  function addToCart(data){
    alert(`${data.name} is added in your cart`)
   dispatch(add(data))
  }
 

  if (data.length === 0) {
    return <AppLayout><Loader/></AppLayout> 
  }
  const { name, company, price, image,size,rating } = data;
  let sizeofproduct = size.map((size)=>size+", ")
  return (
    <AppLayout>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:w-[80%] md:h-[500px] w-full">
        <div class="md:flex">
          <div class="md:flex-shrink-0 my-10 h-96">
            <img class="h-full w-full object-contain " src={image} alt="Product Image"/>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{company}</div>
            <p class="mt-2 text-gray-900"><b>{name}</b></p>
            <p class="mt-2 text-gray-600">Size: {sizeofproduct}</p>
            <p class="mt-2 text-gray-600">Price: ₹{price}</p>
            <span class="mt-2 text-white px-5 rounded-r-2xl bg-blue-700">{rating}</span>


            <p class="mt-2 text-gray-600">Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="mt-4 sm:flex sm:flex-col sm:gap-5">
            <button class="ml-4 sm:ml-0 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Order Now</button>

              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>addToCart(data)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      </AppLayout>


  )
}

export default Page