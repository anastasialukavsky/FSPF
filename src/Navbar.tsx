import { useEffect, useState } from 'react';
import hamburger from '../public/icons/hamburger.svg';
import x from '../public/icons/x.svg';

type ScrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  sectionId: string
) => void;

interface NavbarProps {
  scrollToSection: ScrollToSection;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //prevent scroll on overflow
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);


  return (
    <nav className='w-screen max-h-[11dvh] text-white fixed top-0 left-0 z-50 mix-blend-difference border-b '>
      <div className='navigation-wrapper flex justify-between pl-[3%] pr-[5%] relative'>
        {/**logo */}
        <p className='font-logo text-[16vw] md:text-[7vw] leading-none'>.a</p>

        {/**mobile nav hamburger */}
        {isMenuOpen ? (
          <img
            src={x}
            alt='x icon'
            className='w-[10vw] xs:flex md:hidden z-[150] p-3'
            onClick={closeMenu}
          />
        ) : (
          <img
            src={hamburger}
            alt='hamburger icon'
            className='w-[10vw] xs:flex md:hidden'
            onClick={toggleMenu}
          />
        )}

        {/**mobile nav dropdown */}
        {isMenuOpen && (
          <div className='md:hidden absolute  top-0 left-0 h-screen w-screen  bg-[#121212] z-[100]'>
            <div className='flex flex-col items-center justify-center h-full'>
              
              <a
                href='#home'
                className='font-mono text-[7vw] border-b'
                onClick={(e) => {
                  scrollToSection(e, '#home');
                  toggleMenu();
                }}
              >
                <span className='self-start text-[3vw] pr-2 '>00</span>
                HOME
              </a>

              <a
                href='#about'
                className='font-mono text-[7vw] border-b'
                onClick={(e) => {
                  scrollToSection(e, '#about');
                  toggleMenu();
                }}
              >
                <span className='self-start text-[3vw] pr-2 '>01</span>
                ABOUT
              </a>

              <a
                href='#projects'
                className='font-mono text-[7vw] border-b'
                onClick={(e) => {
                  scrollToSection(e, '#projects');
                  toggleMenu();
                }}
              >
                <span className='self-start text-[3vw] pr-2'>02</span>
                PROJECTS
              </a>
              <a href='#skills' className='font-mono text-[7vw] border-b '>
                <span className='self-start text-[3vw] pr-2'>03</span>
                SKILLS
              </a>

              <a
                href='#contact'
                className='font-mono text-[7vw] border-b '
                onClick={(e) => {
                  scrollToSection(e, '#contact');
                  toggleMenu();
                }}
              >
                <span className='self-start text-[3vw] pr-2'>04</span>
                CONTACT
              </a>
            </div>
          </div>
        )}

        {/**primary nav */}
        <div className='hidden md:flex uppercase  gap-4 text-[1.1vw] absolute top-4 right-7'>
          <a
            href='#home'
            onClick={(e) => scrollToSection(e, '#home')}
            className='text-white font-mono'
          >
            home
          </a>
          <a
            href='#about'
            onClick={(e) => scrollToSection(e, '#about')}
            className='text-white font-mono'
          >
            about
          </a>

          <a
            href='#skills'
            onClick={(e) => scrollToSection(e, '#skills')}
            className='text-white font-mono'
          >
            skills
          </a>

          <a
            href='#projects'
            onClick={(e) => scrollToSection(e, '#projects')}
            className='text-white font-mono'
          >
            projects
          </a>

          <a
            href='#contact'
            onClick={(e) => scrollToSection(e, '#contact')}
            className='text-white font-mono'
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
}
