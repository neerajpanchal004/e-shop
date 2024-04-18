"use client";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Image from 'next/image'
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

const Page = () => {
  const url = '/api/sports'
  const [data, setData] = useState([])
  async function fetchData() {
    try {
      const res = await axios.get(url)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchData()
  }, [])
  if (data.length == 0) {
    return <AppLayout><Loader /></AppLayout> 
  }
  return (
    <AppLayout>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-10 p-10 gap-5'>
        {data.map((product) => {
          const { id, image, name, price, company, rating, size } = product;
          return<Link href={`/sports/${id}`}><div className='p-3 shadow-2xl h-full' key={id}>
            <img src={image}  alt='product-image' className='w-72 h-64'/>
            <h2 className='font-extralight'>{company}</h2>
            <p className=''>{name}</p>
            <h2 className='text-red-600'>₹{price}</h2>

          </div></Link> 
        })}
      </div>

    </AppLayout>
  )
}

export default Page