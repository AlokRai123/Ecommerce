import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p className=''>An e-commerce website is a virtual storefront where customers can buy and sell products and services online. It's a digital platform that acts as the online equivalent of a physical store, allowing customers to browse products, make purchases, and receive customer service.</p>
             <p>Much like a traditional physical retail store, e-commerce websites allow consumers and businesses to buy and sell to one another on a designated platform. The main difference between e-commerce and physical commerce, however, is that e-commerce transactions occur entirely over the internet rather than at a brick-and-mortar location.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>E-commerce sites are similar to other types of websites in that they provide visitors with information. However, e-commerce websites allow users to make purchases online using payment processors and payment gateways.
              E-commerce websites list products, features, pricing, and CTAs that help users navigate the sales process. These websites connect to a product database containing information about the products available, including content and images.</p>
           </div>
      </div>

      <div className='text-xl py-4'>
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p>E-commerce website quality refers to how well an online store functions and delivers a positive user experience, encompassing factors like easy navigation, fast loading times, secure payment processing, high-quality product images, detailed product information, responsive design across devices, clear shipping and return policies, and seamless checkout processes, all aimed at encouraging customers to browse, select, and purchase products with minimal friction.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p>An e-commerce website provides convenience to customers by allowing them to shop for products anytime, anywhere, without needing to physically visit a store, essentially offering 24/7 access to a wide range of goods with the ability to browse and purchase items from the comfort of their own home, all with just a few clicks on their device; this eliminates geographical limitations and saves time by streamlining the buying process.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p>Though e-commerce was a buzzword some years ago, today, with digitalization, it has become a norm. We see a total transformation in the way we shop via E-commerce sites. It has made shopping so much more comfortable and more accessible that people engage in online shopping anywhere and everywhere. Just swiftly pull out your phone and start searching for products, and you are ready to shop. E-commerce is convenient for all those who wish to save travel time, parking space, and money.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
