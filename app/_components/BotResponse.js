import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BotResponse = ({message, action=false, actionMessage, actionLink=""}) => {
  console.log(actionMessage)
  return (
    <div className='w-80vw md:w-[33vw] flex gap-4 items-start overflow-y-scroll'>
        <Image src='/botlogo.svg' width={50} height={50} alt="bot"/>

        <div className='responseArea flex flex-col gap-2'>
        {message?.map((msg, index)=> <section key={index}>
          
          <div className='w-fit text-sm rounded-[32px] p-3 text-left bg-[#22602F] text-white' >
            {msg}


        </div>
        {action && (
            <div className=" cursor-pointer border-black border-2 my-2 !bg-white w-fit text-black text-sm rounded-[32px] p-3 text-left">
              <Link href={actionLink} target="_blank" className="text-black">
                {actionMessage}
              </Link>
            </div>
          )}
          </section>)}
       
        
        </div>

    </div>
  )
}

export default BotResponse