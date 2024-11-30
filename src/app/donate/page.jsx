import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

function donate() {
  return (
    <>
    <Navbar/>
    <section className="w-full py-12 md:py-2 lg:py-32 xl:py-4">
  <div className="container px-4 md:px-4">
    <div className="flex flex-col-reverse md:flex-row">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl text-[#50c878] font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Empower the Future, Nourish a Community: Donate Today
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Together, let's fight hunger and cultivate bright futures. Your donation provides access to food security and academic opportunities, ensuring no child is left behind. Donate today and be a part of building a thriving future for all.
          </p>
        </div>
       
      </div>
      <Image
        src="https://img.freepik.com/free-photo/group-happy-diverse-volunteers_53876-13553.jpg?t=st=1716197874~exp=1716201474~hmac=249c0b03354b06713cbab0867cc5771f3f46b2c7376441eb3179d2a972425c8a&w=740"
        width="550"
        height="310"
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
      />
    </div>
  </div>
</section>

<section className='container px-4 my-20'>
  <div className='text-center my-10'>
    <h2 className='text-2xl md:text-5xl font-bold text-[#50c878]'>How TO DONATE</h2>
    <span className='text-xl font-popins text-gray-500'>Follow the below steps to donate</span>
  </div>

  <div className='flex flex-col md:flex-row'>
    <div className='hidden md:block'> 
     {/* image*/}
     <Image src='https://img.freepik.com/free-photo/3d-render-hand-putting-coin-donation-box_107791-17574.jpg?t=st=1716203107~exp=1716206707~hmac=68fd645834583a493a7c3d2997848fb2617edc54484edffaf93734d979ff6488&w=740'
     
     width="550"
        height="310"
        alt='donate'
     />
    </div>

    <div>
      <h2 className='text-xl  md:text-3xl font-popins font-bold'>Donate through any of the following accounts</h2>

      <div className='mt-8'>
        <ul className='flex flex-col flex-wrap justify-between gap-6'>
    
          {/*
          <li className='flex flex-wrap space-y-4 md:flex-row items-center space-x-4'>
            <div  className='bg-green-200 rounded-full p-3 md:p-8 '>
            <Image src='paypal-seeklogo.svg' className='w-40 md:w-28' alt='zeller logo'        width="550"
        height="310"  />
         
            </div>
            <div className=''>
              <h2 className='text-xl md:text-3xl font-bold '>
              PayPal:  byhisgracefoundationinc@gmail.com
              </h2>
           
             <span>
              Transfer any amount to the paypal account ranging from $5+
             </span>

            </div>
          </li> */}

          <li className='flex flex-wrap space-y-4 md:flex-row items-center space-x-4'>
            <div className='bg-green-200 rounded-full p-3 md:p-8 '>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Zellers_2022_Logo.svg/1200px-Zellers_2022_Logo.svg.png' className='w-40 md:w-28' alt='zeller logo'        width="550"
        height="310"  />
            </div>

            <div className='text-wrap '>
              <h2 className='text-xl w-40  md:text-3xl font-bold '>
                Zelle: Byhisgracefoundationinc
                @gmail.com
              </h2>

            
           
             <span>
              Transfer any amount to the zeller account ranging from $5+
             </span>

            </div>
           

          </li>

          <li className='flex flex-wrap space-y-4 md:flex-row items-center space-x-4'>
            <div  className='bg-green-200 rounded-full p-3 md:p-8 ' >
              <Image className='w-40 md:w-28 ' src={'https://logo-marque.com/wp-content/uploads/2021/05/Bank-of-America-top-logo.jpg'} alt='bank of america'  width="550"
        height="310" />
            </div>
            <div className=''>
              <h2 className='text-xl md:text-3xl font-bold '>
              Bank of America: Account No: 446054714508
              </h2>
           
             <span>
              Transfer any amount to this bank of america account ranging from $5+
             </span>

            </div>
          </li>
        </ul>
      </div>

     



    </div>



  </div>
  <div className='my-10 text-xl text-center md:text-3xl font-light leading-tight'>
      Together, we can make a lasting impact on lives.Your generosity fuels our mission, bringing hope to communities in need.

Thank you for being a catalyst to positive change.
      </div>

</section>

<footer className="bg-green-500 text-white py-8">
    <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 font-popins">CONTACTS</h2>
        <p className="text-lg mb-2">
            Tel: <a href="tel:4103016767" className="text-white underline">4103016767</a>
        </p>
        <p className="text-lg mb-8">
            Email: <a href="mailto:byhisgracefoundationinc@gmail.com" className="text-white underline">byhisgracefoundationinc@gmail.com</a>
        </p>

        <nav className="flex justify-center space-x-4">
            <a href="#" className="text-lg underline">Home</a>
            <a href="#aboutus" className="text-lg underline">About Us</a>
            <a href="#" className="text-lg underline">Contact</a>
        </nav>

        <p className="text-lg mt-4">&copy; 2024 By His Grace Foundation. All rights reserved.</p>
    </div>
</footer>


    </>


  )
}

export default donate
