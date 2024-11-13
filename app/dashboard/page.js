import React from 'react'
import Navbar from '../_components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <Navbar/>
    
    <main className='grid grid-cols-6 grid-rows-5 w-full h-[70vh] gap-14'>
      
      <div className='col-span-2 '>
        <Image src={'/Illustration.svg'} width={400 } alt='d' height={400} className='object-contain' />
      </div>
      <div className='col-span-1 flex flex-col items-center gap-2 mt-18 row-start-2 row-end-3 col-start-3'>
        <Link href={'/report'}><Image alt="photo not loaded" src={'/first.svg'} width={250} height={250}/></Link>
        <div className='text-md hover:font-bold hover:underline cursor-pointer'>Latest Report → </div>
      </div>
      <div className='col-span-1 flex flex-col items-center gap-2 mt-18 row-start-2 row-end-3 col-start-4'>
        <Link href={'/history'}><Image alt="photo not loaded" src={'/second.svg'} width={250} height={250}/></Link>
        <div className='text-md hover:font-bold hover:underline cursor-pointer'>History → </div>
      </div>
      <div className='col-span-1 flex flex-col items-center gap-2 mt-18 row-start-2 row-end-3 col-start-5'>
        <Link href={'/reminder'}><Image alt="photo not loaded" src={'/third.svg'} width={250} height={250}/></Link>
        <div className='text-md hover:font-bold hover:underline cursor-pointer'>Set Reminder → </div>
      </div>

    <Link href={'/ask'}>
    
    <div  className='fixed bottom-12 right-12 z-10'>
      <div className='flex flex-row-reverse gap-5 justify-center items-center'>

 <Image src='/botlogo.svg' width={50} height={50} alt="bot"/> 
 <div className='bg-[#22602F] relative px-6 rounded-lg py-2 text-white' >
  <div className='absolute w-6 h-6 bg-inherit -right-2 -rotate-45 '></div>
  
  Hi, How can I help you today?</div>
      </div>
 
 
  </div>
  
  
  </Link> 
    </main>
    </>
  )
}

export default page