import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>


    <div className='flex flex-row justify-between py-8 items-center px-12 ' >

       <Link href={'/ask'}><Image src={'/logo.svg'} width={64} height={64} alt='logo' className=''/>   </Link> 
        
         <div className='flex items-center'> 

            <Link href={'/dashboard'}>
            <div>
               <button className='w-32 h-23 px-6 py-5 font-semibold'>Dashboard</button>
            </div>
            </Link> 

            <Link href={'/notifications'}>
            <div>
<Image src={'/notifications.svg'} className='mx-2' width={24} height={24} alt='unable to load image'/>
            </div>
            </Link>
       <Link href={'/account'}>
            <div>
<Image src={'/account_circle.svg'} className='mx-2' width={24} height={24} alt='unable to load image'/>
            </div>
       </Link>   
         </div>
         </div>

    </nav>
  )
}

export default Navbar