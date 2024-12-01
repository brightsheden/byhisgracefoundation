"use client"
import Head from 'next/head';
import Image from 'next/image';


import Navbar from './components/Navbar';
import Link from 'next/link';
import HeroSection from './components/HeroSection';
import NewHero from './components/NewHero';

export default function Home() {
 return (
    <>
      <Head>
        <title>ByHisGrace Foundation</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com"  />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>


        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
        <link href="https://fonts.googleapis.com/css2?family=Vujahday+Script&display=swap" rel="stylesheet"/>
      </Head>
    
  
      <div>
        <Navbar/>
       


 <NewHero/>

 <div className='bg-green-50 '>
  <div className='container mx-auto flex justify-around flex-col md:flex-row p-4 md:p-8  gap-4'>
  <div>
        <h2 className='font-bold text-2xl md:text-4xl text-[#50c878]'>345 million</h2>
        <p className='font-medium text-base md:text-xl text-gray-500'>PEOPLE FACING FOOD INSECURITY</p>
    </div>

    <div>
        <h2 className='font-bold text-2xl md:text-4xl text-[#50c878]'>152 million</h2>
        <p className='font-medium text-base md:text-xl text-gray-500'>PEOPLE BHGF AIMS TO REACH IN 2024</p>
    </div>

    <div>
        <h2 className='font-bold text-2xl md:text-4xl text-[#50c878]'>$22.2 billion</h2>
        <p className='font-medium text-base md:text-xl text-gray-500'>BHFG FUNDING NEEDS IN 2024</p>
    </div>
  </div>
   

 </div>



       
      </div>


<section id='aboutus' className='flex flex-col md:flex-row bg-[#50c878] text-white p-6 gap-4'>

<div className='mt-8 text-center w-[100%] md:w-[60%] gap-4'>
<h1 className="text-3xl p-4 md:text-5xl mb-5 font-bold font-popins text-left">About Us</h1>
<p className="text-xl md:text-2xl p-2 font-popins font-normal">
    ByHisGrace Foundation was found by Dr. Bolaji Olugboja in the year 2020. The primary aim of this foundation is to foster a future where individuals have equal opportunities to thrive.
        </p>
</div>
<div className='w/2'> 

<Image  src={'https://img.freepik.com/free-photo/group-happy-african-volunteers-hugs-park-africa-volunteering-charity-people-ecology-concept_627829-328.jpg?t=st=1712653825~exp=1712657425~hmac=5e02d5af045d137e3d9df136d17986f69b45f6f3d46e008256d25007db69d33c&w=740'} width={550} height={500} alt="NGO Image" className='rounded-md' />


</div>
</section  >


<section className=" text-white my-8 ">
 <div className=" text-white gap-4  flex flex-col md:flex-row">
    <div className="text-center p-4 mt-5 md:my-8 space-y-5">
      <h1 className="text-5xl font-bold text-[#50c878]">Our Mission</h1>
      <p className='text-gray-800'>Our mission is to nourish communities by providing access to food security while empowering the next generation through education. We strive to eradicate hunger and promote academic excellence, ensuring that no child is left behind due to socioeconomic barriers. Together, we build a future where every individual has the opportunity to thrive.</p>
    </div>

    <div className='w-full  '>
        
      <Image className='object-cover h-full ' src="https://img.freepik.com/premium-photo/help-support-wheelchair-with-nurse-old-man-disability-rehabilitation-healing-retirement-physiotherapy-healthcare-with-patient-black-woman-nursing-home-medical-caregiver_590464-124292.jpg?w=740" height={500} width={500} alt="NGO Mission" />
    </div>

    <div className="text-center mt-5 p-4 md:my-8 space-y-5">
      <h1 className="text-5xl font-bold text-[#50c878]">Our Vision</h1>
      <p className='text-gray-800'>Our vision is to create a society where no one goes hungry, and every individual has access to quality education. Through our commitment to providing sustenance and educational support, we strive to build a future where every person can thrive, learn, and contribute to their fullest potential. We aim to foster a community of empowerment and opportunity for all. Additionally, we are dedicated to caring for everyone with depression and mental health issues, providing adequate help and treatment for affected individuals.
     
      </p>
      
    </div>
 </div>
</section>

<section className="container mx-auto p-4 space-y-4">
 <div className="text-center">
    <h1 className="text-5xl font-bold text-[#50c878]">Our Goals</h1>
 </div>

 <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8 ">
    <div className="p-4 border-2 border-[#50c878] hover:shadow-lg w-full  ">
      <div className="h-64">
        <Image height={500} width={500} className="rounded-md object-cover w-full h-full" src="https://img.freepik.com/free-photo/side-view-smiley-people-with-delicious-food_23-2149603462.jpg?w=740&t=st=1702571259~exp=1702571859~hmac=9e6b850dff292f5427704a77ef6cff1d0d1d6e7d8af8c30b4f6b4a8feeca619c" alt="Beyond Food" />
      </div>
      <div className="mt-4">
        <h1 className="text-[#50c878] font-bold text-xl"> Ensure Food Security</h1>
        <p className="text-sm text-gray-500 mt-2 font-medium">Provide nutritious food resources to underserved communities, with a goal of reaching a specific number of individuals or families each month.</p>
      </div>
    </div>

    <div className="p-4 border-2 border-[#50c878] hover:shadow-lg w-full  ">
      <div className="h-64">
        <Image height={500} width={500} className="rounded-md object-cover w-full h-full" src="https://img.freepik.com/free-photo/index-finger-touching-graph-with-red-arrow_1232-159.jpg?t=st=1711495727~exp=1711499327~hmac=e0b88ca8d00c357ba6c6325d427bc15c4c34b32b7ecebccf9bd0cae42c4a3a27&w=740" alt="Beyond Food" />
      </div>
      <div className="mt-4">
        <h1 className="text-[#50c878] font-bold text-xl">Expand Reach</h1>
        <p className="text-sm text-gray-500 mt-2 font-medium">Provide nutritious food resources to underserved communities, with a goal of reaching a specific number of individuals or families each month.</p>
      </div>
    </div>

    <div className="p-4 border-2 border-[#50c878] hover:shadow-lg w-full  ">
      <div className="h-64">
        <Image height={500} width={500} className="rounded-md object-cover w-full h-full" src="/images/image6.jpg" alt="Beyond Food" />
      </div>
      <div className="mt-4">
        <h1 className="text-[#50c878] font-bold text-xl">Enhance Educational Access</h1>
        <p className="text-sm text-gray-500 mt-2 font-medium">Pay school fees for children from primary to tertiary education levels, aiming to support a certain number of students each academic year.</p>
      </div>
    </div>


    <div className="p-4 border-2 border-[#50c878] hover:shadow-lg w-full  ">
      <div className="h-64">
        <Image height={500} width={500} className="rounded-md object-cover w-full h-full" src="https://img.freepik.com/premium-photo/successful-students-their-graduation-day-with-certificate-hands_115086-941.jpg?w=740" alt="Beyond Food" />
      </div>
      <div className="mt-4">
        <h1 className="text-[#50c878] font-bold text-xl">Foster Academic Excellence</h1>
        <p className="text-sm text-gray-500 mt-2 font-medium"> Implement programs to support educational success, such as providing tutoring services, study materials, or scholarships for exceptional students.</p>
      </div>
    </div>


    <div className="p-4 border-2 border-[#50c878] hover:shadow-lg w-full  ">
      <div className="h-64">
        <Image height={500} width={500} className="rounded-md object-cover w-full h-full" src="https://img.freepik.com/free-photo/agreement-team-friend-collar-white_1262-2253.jpg?t=st=1711498047~exp=1711501647~hmac=3810440bd01bf834a384db63a460b20f5ddf501506190f0e3f07d5e5a30b0b8a&w=740" alt="Beyond Food" />
      </div>
      <div className="mt-4">
        <h1 className="text-[#50c878] font-bold text-xl">Empower Communities</h1>
        <p className="text-sm text-gray-500 mt-2 font-medium">Establish partnerships with local schools, community centers, and educational institutions to create opportunities for mentorship, skill development, and vocational training.</p>
      </div>
    </div>


    <div className="p-4 border-2 border-[#50c878] hover:shadow-lg w-full  ">
      <div className="h-64">
        <Image height={500} width={500} className="rounded-md object-cover w-full h-full" src="https://img.freepik.com/free-photo/volunteers-with-gloves-handing-boxes-with-food-donation_23-2148733764.jpg?t=st=1711498368~exp=1711501968~hmac=df327db69f10abd761acdd5f899c182763efe08f5dca1daa72ed1182163c70d3&w=740" alt="Beyond Food" />
      </div>
      <div className="mt-4">
        <h1 className="text-[#50c878] font-bold text-xl">Promote Sustainability</h1>
        <p className="text-sm text-gray-500 mt-2 font-medium">Develop long-term strategies to ensure the continued availability of food resources and educational support for future generations, including initiatives focused on agriculture, entrepreneurship, and capacity building.</p>
      </div>
    </div>


    <div className="p-4 border-2 border-[#50c878] hover:shadow-lg w-full  ">
      <div className="h-64">
        <Image height={500} width={500} className="rounded-md object-cover w-full h-full" src="https://img.freepik.com/free-photo/man-building-up-tower_176474-7046.jpg?t=st=1711498566~exp=1711502166~hmac=47211630f08d407bdf93078c8566e265770539475ce6707e32e01782d8179a64&w=360" alt="Beyond Food" />
      </div>
      <div className="mt-4">
        <h1 className="text-[#50c878] font-bold text-xl">Measure Impact</h1>
        <p className="text-sm text-gray-500 mt-2 font-medium">Regularly assess the effectiveness of our programs through metrics such as academic performance, school attendance rates, community feedback, and the number of individuals lifted out of food insecurity.</p>
      </div>
    </div>

    <div className="p-4 border-2 border-[#50c878] hover:shadow-lg w-full">
 <div className="h-64">
    <Image height={500} width={500} className="rounded-md object-cover w-full h-full" src="/images/image10.jpg" alt="Beyond Food" />
 </div>
 <div className="mt-4">
    <h1 className="text-[#50c878] font-bold text-xl">Advocate for Change</h1>
    <p className="text-sm text-gray-500 mt-2 font-medium">Raise awareness about the importance of food security and education access through public outreach campaigns, lobbying efforts, and partnerships with like-minded organizations to drive systemic change at local, national, and international levels.</p>
 </div>
</div>

  

 </div>
</section>

<section> 
    {/**/}
    <div className='flex flex-col-reverse md:flex-row justify-between w-full'>
        <div className='w-full md:w-1/2'>
            <img 
            src='/images/flyer1.jpg'
            alt='we can end hunger'
          
            />
        </div>
        <div className='bg-green-100 w-full md:w-1/2 p-10' > 
        <div >
       
            <div className='text-center'>
            <h2 className='text-4xl py-5'><span className='font-bold text-5xl text-[#50c878] font-popins'>We Can</span> <span className='font-vuj'>End Hunger Forever</span> </h2>

        </div>
        
        <div className='flex justify-center font-popins font-normal test-base md:text-3xl leading-snug my-8'>
        Hunger is still one the biggest – and most solvable – problems in the world.
             We have already made incredible progress: there are 300 million fewer hungry people now than in the 90’s. BHGF is working for that every second of the day, feeding over 95 million people in urgent need and implementing programmes that tackle the causes of hunger.
             But this work depends on the support of people like you.

        </div>
          
          <div className='text-center'>
            <Link href={'/donate'}>
            <button className='bg-[#50c878] p-4 w-full md:w-80 text-white rounded-full font-bold'>
            Donate
            </button>
            </Link>
          
        
          </div>
           
            </div>
        </div>
    </div>
</section>

<selection className=" w-full" >
  <div className='bg-green-50 py-8 w-full'>
    <div className='text-center text-xl md:text-4xl font-bold font-popins mb-4 py-8'>
      <h2 className='text-[#50c878]'>Join the Movement</h2>
    </div>
  <div className='container mx-auto p-4 flex gap-4 flex-col md:flex-row'>
    <div className='shadow-lg p-4 border  border-green-500'>
      <div>
        <Image height={500} width={500} src='/images/image4.jpg' className='object-cover w-full h-60'/>
      </div>
      <div>
        <h2 className='text-3xl font-bold font-popins py-8 text-start text-[#50c878]'>
        Participate in the Dance
        </h2>
        <p>
        Join our events, the vibrant dances of change. Together, we create movements that reverberate far beyond the immediate steps.
        </p>

       

       


      </div>

      
    </div>
    <div className='shadow-lg p-4 border  border-green-500'>
      <div>
        <Image height={500} width={500} src='/images/image11.jpg' className='object-cover h-60 w-full'/>
      </div>
      <div>
        <h2 className='text-3xl font-bold font-popins p-8 text-start text-[#50c878]'>
        Contribute Melodies
        </h2>
        <p>
        Your donations compose the melody of hope. Every contribution creates a harmony that resonates through countless lives.
        </p>

        
       


      </div>

      
    </div>

    <div className='shadow-lg p-4 border  border-green-500'>
      <div className='grayscale hover:grayscale-0'>
        <Image height={500} width={500} src='https://img.freepik.com/free-photo/close-up-people-volunteer-teamwork-putting-finger-star-shapehands-togetherstack-handsunity-teamwork-world-environment-day_640221-299.jpg?t=st=1711662597~exp=1711666197~hmac=7de0f8680bd28c4805059626c5c51cfc5b9445de35030a324e611c0f0b31af10&w=740' className='object-cover h-60 w-full'/>
      </div>
      <div>
        <h2 className='text-3xl font-bold font-popins p-8 text-start text-[#50c878] '>
        Volunteer Harmony
        </h2>
        <p>
        Become a note in our symphony of change. Volunteer with us and witness the transformation your time can bring.
        </p>

        
       

      </div>

      
    </div>
  </div>

  </div>
  

</selection>

<section className="container mx-auto px-2 py-16">
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Donation Text */}
        <div className="md:w-1/2 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-popins text-[#50c878]">Join Us in the Fight Against Hunger</h2>
            <p className="text-lg font-popins font-normal text-gray-5s00">Your contribution can make a significant impact on the lives of those struggling with hunger. Together, let's create a world where no one sleeps hungry.</p>

            <div className='p-4'>
              <Link href='/donate'>
              <button className='bg-[#50c878] p-4 rounded text-white font-medium w-full md:w-80 hover:bg-gray-200 hover:text-black'>Donate</button>

              </Link>
             
            </div>
           
        </div>

        {/* Donation Image */}
        <div className="md:w-1/2">
            <Image height={500} width={500}  src="https://img.freepik.com/free-photo/smiley-volunteers-preparing-food-box-donation_23-2148732650.jpg?w=900&t=st=1702746617~exp=1702747217~hmac=a9bf09645743fd9ce0baac636eeefdbee03c1b22e991340d3077e718cdf3adbf" alt="NGO Donation Image" className="rounded-lg shadow-md border-2 border-green-400" />
        </div>
    </div>
</section>


<section className="container mx-auto px-2 py-16">
    <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Donation Text */}
        <div className="md:w-1/2 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-popins text-[#50c878]">Invest in Mental Health, Reap a Healthier Community</h2>
         

            <p className='text-lg font-popins font-normal text-gray-500'>More than 700 000 people die due to suicide every year. For every suicide there are many more people who attempt suicide due to mental and emotional stress. Suicide is the fourth leading cause of death among 15-29 year olds. 13.6% of adults 18-25 had serious thoughts of suicide in the past year (SAMHSA, 2023). Effective and evidence-based interventions can be implemented at population, sub-population and individual levels to prevent suicide and suicide attempts. There are indications that for each adult who died by suicide there may have been more than 20 others attempting suicide.
            </p>

            <p className='text-lg font-popins font-normal text-gray-500 mt-10'>Suicide is a global phenomenon; in fact, 77% of suicides occurred in low- and middle-income countries . Suicide accounted for 1.3% of all deaths worldwide, making it the 17th leading cause of death since 2019. We are dedicated in BHIF to caring for everyone with depression and mental health issues. Making sure all affected individuals are adequately taken care of and treated effectively. </p>
            <div className='p-4'>
              <Link href='/donate'>
              <button className='bg-[#50c878] p-4 rounded text-white font-medium w-full md:w-80 hover:bg-gray-200 hover:text-black'>Donate</button>

              </Link>
             
            </div>
           
        </div>

        {/* Donation Image */}
        <div className="md:w-1/2">
            <Image height={500} width={500}  src="/images/bhgfnwimg.jpg" alt="NGO Donation Image" className="rounded-lg shadow-md border-2 border-green-400" />
        </div>
    </div>
</section>


<section id='contact' className="bg-cover bg-center bg-blend-multiply bg-gray-500 text-white flex items-center py-16" style={{ backgroundImage: "url('/images/LOGO .png')" }}>
    <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        {/* Left Content: Contact Button */}
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-8">Have questions? Reach out to us.</p>
            <a href="mailto:byhisgracefoundationinc@gmail.com" className="bg-white text-[#50c878] py-2 px-6 rounded-full text-lg hover:bg-gray-200 transition duration-300">Get in Touch</a>
        </div>

        {/* Right Content: Other Information */}
        <div className="hidden md:block md:w-1/2">
            {/* Add other content here */}
            <p className="text-lg">Join us in our mission to create a hunger-free and poverty-free community. 
            You can contribute by volunteering, making donations, 
            or participating in our events. Every effort counts!.</p>
        </div>
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
 );
}