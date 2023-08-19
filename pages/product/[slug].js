import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import Wrapper from '@/components/Wrapper'
import ProductCardCarousel from '@/components/ProductCardCarousel'
import RelatedProducts from '@/components/RelatedProducts'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20' >
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
        <div  className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
          <ProductCardCarousel/>
        </div>

        <div className='flex-[1] py-3'>
            {/* PRODUCT TITLE*/ }
            <div className='text-[34px] font-semibold mb-2'>
              JORDAN RETRO 6 G
            </div>

              {/* PRODUCT SUBTITLE*/ }
              <div className='text-lg font-semibold mb-5'>
                MEN&apos;s Golf Shoes
              </div>
              {/* PRODUCT Price*/ }
              <div className='text-lg font-semibold'>
                MRP  : £850.00
              </div>
              <div className='text-md font-medium text-black/[0.5]'>
                incl. of taxes
              </div>
              <div className='text-md font-medium text-black/[0.5] mb-20'>
                {`{Also includes all applicable duties}`}
              </div>
              {/* size*/ }
              <div className='mb-10'>
                {/* heading start*/ }
                  <div className='flex justify-between mb-2'>
                    <div className='text-md font-semibold'>
                       Select size
                    </div>
                    <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                      Select Guide
                    </div>
                  </div>
                  {/* heading end*/ }
                  {/* size start*/ }
                  <div className='grid grid-cols-3 gap-2'>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK-6
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK-7
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                        UK-8
                      </div>
                      <div className='border rounded-md text-center py-3 font-medium hover:border-black   cursor-not-allowed bg-black/[0.1] opacity-50'>
                        UK-9
                      </div>
                  </div>
                  {/* show error*/}
                  <div className='text-red-600 mt-1'>
                    Size Selection is required
                  </div>     
              </div>

              <div>
                 {/*Add to cart*/}
              <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                    Add to cart
                  </button>
                  {/*Add to whishlist*/}

                  <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
                      whishlist
                      <IoMdHeartEmpty size={20}/>
                  </button>
              </div>
              <div>
                <div className='text-lg font-bold mb-5'>
                  Product Details
                </div>
                <div className='text-md mb-5'>
                  lorem ipsum

                </div>
              </div>
        </div>
        
        </div>

      <RelatedProducts/>


      </Wrapper>
      
      </div>
  )
}

export default ProductDetails