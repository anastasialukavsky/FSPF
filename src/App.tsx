import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Html } from '@react-three/drei';
import Navbar from './Navbar.tsx';
import Homepage from './Homepage.tsx';
import Lenis from '@studio-freight/lenis';
import ProgressBar from './ProgressBar.tsx';

import Blob from './Blob.tsx';

import './App.css';

function App() {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // orientation: 'vertical',
      // gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      // lerp: 3,
      // duration: 1,
      smoothWheel: true
    });

    // lenis.on('scroll', ScrollTrigger.update);

  // lenis.on('scroll', (e: any) => {
  //   // console.log(e);
  // });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div className='h-screen w-screen bg-[#121212] relative'>
     
      {/* <ProgressBar /> */}
        {/* <Navbar /> */}

        <Homepage />
 
      {/* <div className='absolute top-0 right-0 bg-transparent z-0'> */}
        {/* <Blob/> */}
      {/* </div> */}
    </div>
  );
}

export default App;
