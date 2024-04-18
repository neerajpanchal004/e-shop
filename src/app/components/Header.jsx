import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='flex shadow-md py-2 px-8 items-center justify-between static'>
            <Link href="/" className='text-3xl font-serif'>E-Shop</Link>
            <div className='flex items-center gap-5'>
                
                <Image src="/images/profile.png" width={50} height={50}  alt='profile' className='rounded-full border-2 border-blue-400' />
                <Link href='/login' className="bg-blue-500 text-white py-2 px-2 sm:px-4 rounded-md hover:bg-blue-600 focus:outline-none">
                    Login
                </Link>
                <Link href="/cart"><FaShoppingCart size={30} className='hover:scale-110 transition-transform' /></Link>
            </div>

        </div>
    )
}

export default Header