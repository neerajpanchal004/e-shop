import Link from 'next/link'
import React from 'react'


const GridSection = () => {
    
    const ImageData = [
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/t/u/-original-imagxhd5xtjuwnqz.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/s/l/-original-imagtnqjjuc6dh6v.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/q/f/-original-imagtyw2vfzzwzgs.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/i/i/-original-imagwyhjupspqhhp.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/p/j/k/2xl-hm-st01-st06-metronaut-original-imagy2pkyy6bv33g.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/v/g/u/s-r-stbrg-stoneberg-original-imaghf7mfydfgfxg.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/t/d/9/xs-grey-101-yellow-freluro-original-imagc26vffprrbdu-bb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/c/v/m/34-el-p-cot-el-cielo-original-imaggu7jtfyrv5sc.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/u/n/5-890-wt-deals4you-multicolor-original-imagm2a2rusxeuud.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/8/r/t/5-779-womn-t-rock-multicolor-original-imag7zs5yh3crtzz-bb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/b/w/-original-imaggygyqr9hfwjd-bb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/8/c/-original-imagfxf9phhzxech-bb.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/xif0q/ball/6/8/d/300-storm-football-size-5-5-20-1-1-football-nivia-original-imaggurhz3jukjd3.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/l2f20sw0/skate/q/s/m/7-10-inline-skating-shoes-adjustable-size-led-wheels-skates-for-original-imagdr8kgas4w4n8.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/ksgehzk0/board/g/o/i/carrom-board-for-kids-26-inch-medium-size-glossy-finish-coins-original-imag6ynmdfshzngx.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/612/612/l4rd0280/bicycle-lock/i/i/h/1-12-bike-lock-cable-bike-locks-with-complimentary-mounting-original-imagfh9mjz6fe9d3.jpeg?q=70",
    ]

       
        
    
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-10 m-3 p-5 lg:p-10'>




                {ImageData.map((image, index) => {
                    let categoryHref = "/sports";

                    if (index + 1 <= 4) {
                        categoryHref = "/mobiles";
                    } else if (index + 1 <= 8) {
                        categoryHref = "/menwear";
                    } else if (index + 1 <= 12) {
                        categoryHref = "/shoes";
                    }

                    return (
                        <div className='p-3 sm:p-6 lg:p-10 shadow-lg transition-transform hover:scale-110 h-80 w-full'>
                            <Link key={index} href={categoryHref}>

                                <img src={image} className='object-contain h-[90%]' />
                            </Link>

                            <h1>Lorem ipsum, dolor sit</h1>
                            {/* <div className='flex justify-end items-end' onClick={()=>setWishList(!wishList)}>{wishList?"❤️":<CiHeart size={24}/>}</div> */}

                        </div>
                    );
                })}



            </div>
        </>
    )
}


export default GridSection