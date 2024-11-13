"use client";
import React, { useState } from 'react'
import Prompt from '../_components/Prompt'

import ChatThread from '../_components/ChatThread'
import Navbar from '../_components/Navbar'
const Page = () => {
  const [toggle,setToggle]=useState(false);
  return (
    <>
    <Navbar/>

    <main className='px-12'> 
< ChatThread trigger={toggle } />
<Prompt onToggle={setToggle} toggle={toggle } />
    </main>
    </>
  )
}

export default Page;