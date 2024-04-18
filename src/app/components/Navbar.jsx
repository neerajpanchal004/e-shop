import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      {/* shoes */}
      <div className='bg-blue-300 my-5 flex justify-around items-center shadow-xl '>
        <Link href='/shoes'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>

            <Image src="/images/shoes-icon.png" alt='nav-image' width={100} height={100} className='hidden sm:block' />

            <h3>
              Shoes
            </h3>

          </div>
        </Link>



        {/* menwear */}

        <Link href='/menwear'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>
            <Image src="/images/menwear-icon.png" alt='nav-image' width={80} height={10} className='hidden sm:block' />

            <h3>
              Menwear              </h3>

          </div>
        </Link>




        {/* sports */}

        <Link href='/sports'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>
            <Image src="/images/sports-icon1.png" alt='nav-image' width={95} height={10} objectFit='contain' className='hidden sm:block' />

            <h3>
              Sports              </h3>

          </div>
        </Link>

        {/*  mobiles*/}
        <Link href='/mobiles'>
          <div className='flex flex-col items-center hover:shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] p-5 hover:scale-110 transition-transform  '>
            <Image src="/images/mobile-icon.png" alt='nav-image' width={85} height={100} className='hidden sm:block' />

            <h3>
              Mobiles
            </h3>

          </div>
        </Link>




      </div>
    </>
  )
}

export default Navbar