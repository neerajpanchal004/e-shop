import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";



const Footer = () => {
    return (
        <>

            <div className='p-5 mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10'>
                    <div className='flex flex-col gap-1 my-5 sm:my-0'>
                        <p><b>Get to Know Us</b></p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>About Us</p>
                        <p>Investor Relations</p>

                    </div>


                    <div className='flex flex-col gap-1 my-5 sm:my-0'>
                        <p><b>Make Money with Us</b></p>
                        <p>Sell products</p>
                        <p>Become an Affiliate</p>
                        <p>Self-Publish with Us</p>
                        <p>Advertise Your Products</p>

                    </div>


                    <div className='flex flex-col gap-1 my-5 sm:my-0'>
                        <p><b>Let Us Help You</b></p>
                        <p>Your Account</p>
                        <p>Shipping Rates & Policies</p>
                        <p>Returns & Replacements</p>
                        <p>Help</p>

                    </div>


                    <div className='flex flex-col gap-1 my-5 sm:my-0'>
                        <p><b>Privacy</b></p>
                        <p>Reload Balance</p>
                        <p>Conditions Of Use</p>
                        <p>Privacy Notes</p>
                        <p>Help</p>

                    </div>
                </div>
                <div className='flex justify-center gap-10 py-5 items-center border-b-[1px] border-black mt-5 '>
                    <p className='text-xl '><b>Social links</b></p>
                    <Link href="https://github.com/neerajpanchal004">
                         <FaGithub size={30} className='hover:scale-125 transition-transform'/>
                    </Link>

                    <Link href="https://www.linkedin.com/in/neeraj-panchal-b327ba24a/">
                         <FaLinkedinIn size={30}className='hover:scale-125 transition-transform'/>
                    </Link>

                    <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FNeerajpanchal_4">
                         <FaTwitter size={30}className='hover:scale-125 transition-transform'/>
                    </Link>

                    <Link href="mailto:neerajpanchal004@gmail.com">
                         <MdOutlineMail size={30}className='hover:scale-125 transition-transform'/>
                    </Link>


                </div>
                <div className='text-center pt-5 text-xl '>
                <Link href="https://github.com/neerajpanchal004" >Made with❤️ by <span className='underline text-blue-600'>Neeraj panchal</span></Link>

                </div>

            </div>
        </>
    )
}

export default Footer