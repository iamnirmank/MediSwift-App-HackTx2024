import Image from 'next/image'
import React from 'react'

const HumanResponse = ({message}) => {
    console.log(message)
  return (
    <div className='ml-auto w-80vw md:w-[33vw] flex gap-4 items-end justify-end overflow-y-scroll'>

        <div className='responseArea flex flex-col gap-2 items-end'>
        {message?.map((msg, index)=> <div className='w-fit rounded-[32px] p-3 text-sm text-left bg-[#FFF0C2] text-[#1C3922]' key={index}>
            {msg}
        </div>)}
        
        </div>
        <Image src='/humanlogo.svg' width={50} height={50} alt="human"/>


    </div>
  )
}

export default HumanResponse;