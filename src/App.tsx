import { useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Html } from '@react-three/drei'
import Navbar from './Navbar.tsx'
import Homepage from './Homepage.tsx'

import Blob from'./Blob.tsx'


import './App.css'

function App() {


  return (
    <div className='h-screen w-screen bg-[#121212]'>

<div className='absolute z-10'>
      <Navbar />

      <Homepage/>
</div>
      <div className='absolute top-0 right-0 bg-transparent z-0'>
      {/* <Blob/> */}
      </div>
    </div>
  );
}

export default App
