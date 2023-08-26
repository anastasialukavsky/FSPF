import hamburger from '../public/icons/hamburger.svg';

export default function Navbar() {
  return (
    <nav className='w-screen max-h-[11dvh] text-white sticky top-0 z-50 '>
      <div className='navigation-wrapper flex justify-between pl-[3%] pr-[5%]'>
        {/**logo */}
        <p className='font-logo text-[16vw] md:text-[7vw] leading-none'>.a</p>

        {/**mobile nav hamburger */}
        <img
          src={hamburger}
          alt='hamburger icon'
          className='w-[10vw] xs:flex md:hidden'
        />

        {/**primary nav */}
        <div className='hidden md:flex uppercase  gap-4 text-[1.1vw] absolute top-4 right-7'>
          <p className='text-white font-mono'>home</p>
          <p className='text-white font-mono'>about</p>
          <p className='text-white font-mono'>projects</p>
          <p className='text-white font-mono'>contact</p>
        </div>
      </div>
    </nav>
  );
}
