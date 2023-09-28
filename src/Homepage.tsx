import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProgressBar from './ProgressBar';
import me from '../public/bg/me.jpg';
import Navbar from './Navbar';
import vid from '../public/bg/testvid1.mp4';

import linkedin from '../public/icons/linkedin.svg';
import github from '../public/icons/github.svg';
import gmail from '../public/icons/gmail.svg';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { Canvas } from '@react-three/fiber';
import Blob2 from './Blob2';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);
// gsap.registerPlugin(AutoAlphaPlugin);

export default function Homepage() {
  const aboutSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const skillContentRef = useRef(null);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(sectionId);

    if (target instanceof HTMLElement) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useLayoutEffect(() => {
    if (
      !document.querySelector('.hero-section') ||
      !document.querySelector('.about-section')
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to('.hero-section', {
        yPercent: 100,
        ease: 'expo',
        duration: 1,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5,
        },
      });

      tl.to('.backend-div', {
        yPercent: -60,
        ease: 'expo',
        duration: 1,
        // delay: 2,
        scrollTrigger: {
          trigger: '.backend-div',
          start: 'top 90%',
          end: 'bottom bottom',
          scrub: 1.5,
          // scrub: true
          // markers: true,
        },
      })
        .to('.devops-and-deployment-div', {
          yPercent: -60,
          ease: 'expo',
          duration: 1,
          // delay: 2,
          scrollTrigger: {
            trigger: '.devops-and-deployment-div',
            start: 'top 90%',
            end: 'bottom bottom',
            scrub: 1.5,
            // scrub: true
            // markers: true,
          },
        })
        .to('.right-div', {
          xPercent: -200,
          ease: 'none',
          duration: 2,
          scrollTrigger: {
            trigger: '.misc-div',
            start: 'top top',
            end: '120% 10%',
            scrub: 1,
            // scrub: true,
            // markers: true,
          },
        });
      // .to('.devops-and-deployment-div', {
      //   yPercent: -50,
      //   ease: 'expo',
      //   duration: 1,
      //   // delay: 2,
      //   scrollTrigger: {
      //     trigger: '.devops-and-deployment-div',
      //     start: 'top 90%',
      //     end: 'bottom bottom',
      //     scrub: 1.5,
      //     markers: true,
      //   },
      // });

      // .from('.pic', {
      //   // height: '300px',
      //   // width: '400px',
      //   scale: 4.5,
      //   // position: 'relative',
      //   // top: '4%',
      //   // right: '8%',

      //   // objectFit: 'cover',
      //   // aspectRatio: '4/5',
      //   // display: 'flex',
      //   ease: 'none',
      //   duration: 1,

      //   scrollTrigger: {
      //     trigger: '.about-section',
      //     pin: true,
      //     markers: true,
      //     start: 'top top',
      //     end: 'bottom bottom',
      //     scrub: 1.6
      //   }
      // })

      // GSAP ScrollTrigger for horizontal scrolling in skill-section
      //   const skillContent = skillContentRef.current as unknown as HTMLElement;

      //   tl.to(skillContent, {
      //     x: () => -(skillContent.scrollWidth - window.innerWidth),
      //     ease: 'none',
      //     scrollTrigger: {
      //       trigger: skillContent,
      //       start: 'top top',
      //       end: 'bottom top',
      //       scrub: 1,
      //       pin: true,
      //     },
      //   });
    });

    return () => {
      ScrollTrigger.refresh();
      ctx.revert();
    };
  }, []);

  const sections = gsap.utils.toArray('.sections');
  const projects = gsap.utils.toArray('.projects');
  const aboutSec = gsap.utils.toArray('.about');

  // const cursor = document.querySelector('#cursor');
  // const text = document.querySelector('#text')?.innerHTML;
  // const letters = ['h', 'e', 'l', 'l', 'o']

  // letters.forEach((char) => {
  //   let tl = gsap.timeline({repeat: 1, yoyo: true});
  //   tl.to('text',
  //   {
  //     duration: 1, text: char
  //   })
  // })

  // const handleAnimUpdate= () => {
  //   if(text && cursor) {
  //     text.appendChild(cursor as Node)
  //   }
  // }

  useLayoutEffect(() => {
    if (!projects) {
      return;
    }
    let ctx = gsap.context(() => {
      {
        /**horizontal scroll anim */
      }
      gsap.to(projects, {
        xPercent: -100 * (projects.length - 1),
        ease: 'none',
        duration: 2,
        scrollTrigger: {
          trigger: '.projects-section',
          pin: true,
          scrub: 2,
          end: '+=4000',
        },
      });

      {
        /**bg color merge */
      }
      gsap.to('.about-section', {
        backgroundColor: '#FFFFFF',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.about-section',
          // scroller: '.container',
          scrub: true,
          start: 'top bottom',
          end: '+=100%',
        },
      });
      gsap.to('.skills-section', {
        backgroundColor: '#121212',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.skills-section',
          // scroller: '.container',
          scrub: true,
          start: 'top bottom',
          end: '+=100%',
        },
      });

      // gsap.fromTo(
      //   '.cursor',
      //   {
      //     autoAlpha: 0,
      //     x: 2,
      //   },
      //   {
      //     autoAlpha: 1,
      //     duration: 0.5,
      //    ease: 'SteppedEase.config(1)',
      //     repeat: -1,
      //   }
      // );

      // gsap.from('#text', {
      //   width: 2,
      //   duration: 2,
      //   ease: 'SteppedEase.config(20)',
      // });
      // gsap.to('.text', {
      //   // text: {
      //   //   value: 'anastasia lukavsky',
      //   // },
      //   innerHTML: 'anastasia lukavsky',
      //   // duration: 4,
      //   // delay: 1,
      //   // ease: 'none',
      //   // stagger: .5,
      //   // duration: 7,
      //   // text: 'hello',
      //   // onUpdate: handleAnimUpdate
      // });

      // gsap.to('.contact-section', {
      //   backgroundColor: '#121212',
      //   // immediateRender: false,
      //   scrollTrigger: {
      //     trigger: '.contact-section',
      //     // scroller: '.container',
      //     scrub: true,
      //     start: 'top bottom',
      //     end: '+=100%',
      //     markers: true
      //   },
      // });

      //  gsap.to(sections, {
      //     xPercent: -100 * (sections.length - 1),
      //     ease: 'none',
      //     scrollTrigger: {
      //       trigger: '.skill-section',
      //       pin: true,
      //       scrub: 1,
      //       end: '+=3000',
      //     },
      //   });

      // gsap.to('.pic-wrapper', {
      //   scale: 1.5,
      //   objectFit: 'cover',
      //   scrollTrigger: {
      //     pin: true,
      //     // scrub: 2,
      //     start: 'bottom 5%',
      //     end: '+=500',
      //   },
      //   markers: true,
      // });
    });

    return () => {
      ScrollTrigger.refresh();
      ctx.revert();
    };
  }, []);

  //   useLayoutEffect(() => {

  // gsap.to('.about-section', {
  //   backgroundColor: '#FFA500',
  //   // immediateRender: false,
  //   scrollTrigger: {
  //     trigger: '.about-section',
  //     scroller: '.container',
  //     scrub: true,
  //     start: 'top bottom',
  //     end: '+=100%',
  //   },
  // });

  // gsap.to('body', {
  //   '--color': 'red',
  //   immediateRender: false,
  //   scrollTrigger: {
  //     trigger: '.skills-section',
  //     scroller: '.container',
  //     scrub: true,
  //     start: 'top bottom',
  //     end: '+=100%',
  //   },
  // });

  // // gsap.to('body', {
  // //   '--color': 'green',
  // //   immediateRender: false,
  // //   scrollTrigger: {
  // //     trigger: '.section-3',
  // //     scroller: '.container',
  // //     scrub: true,
  // //     start: 'top bottom',
  // //     end: '+=100%',
  // //   },
  // // });
  // ScrollTrigger.refresh();
  //   }, [])

  {
    /**click handler for default email app */
  }
  const handleEmailClick = () => {
    window.location.href = 'mailto:lukavskyanastasia@gmail.com';
  };

  return (
    <main className='container w-[100vw] h-screen text-white '>
      <Navbar scrollToSection={scrollToSection} />
      <section
        id='home'
        className='hero-section flex flex-col justify-center items-center h-full xs:-translate-y-[30%] md:-translate-y-[10%]'
      >
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <Blob2 />
        </Canvas>


        
        <p className='self-end xs:pr-4 pr-[5%] font-mono xs:text-[1.8vw] md:text-[.8vw]'>
          hello, i am
        </p>
        <h1
          id='text'
          className='font-dida text-[6.7vw] leading-none text-center'
        >
          FULLSTACK DEVELOPER
        </h1>
        {/* <span id='cursor' className='cursor'>
            |
          </span> */}

        <div className='font-mono self-start pl-[7%] lowercase xs:w-[70%] md:w-[38%] xs:text-[2.2vw] pt-[1%]  md:text-[1.2vw] '>
          <p>Crafting Digital Experiences from Front to Back</p>
          <p> Bringing Ideas to Life with Code and Creativity</p>
        </div>
      </section>
      {/**about section */}
      <section id='about' className='about flex font-mono relative'>
        <p className='text-[#121212] z-50 absolute top-4 left-4 text-[5vw] md:hidden '>
          //ABOUT
        </p>
        <div className='about-section h-[100dvh] w-full bg-[#121212] flex relative top-0 '>
          <div className='md:flex  gap-[9%] w-[80%] max-h-[70%] min-h-[60%] self-center items-center mx-auto  '>
            <div className=' about-me-details-wrapper w-full h-fit'>
              <div className='bg-[#121212]  h-full'>
                <img
                  src={me}
                  alt='photo of the creator'
                  className='pic aspect-[4/5] object-cover h-fit relative xs:-right-3 -top-4 -right-8 xs:aspect-auto'
                />
              </div>
            </div>

            <p className='bio-text font-mono text-[#121212] w-full lowercase  md:pr-8 md:text-[1.5vw] leading-tight text-[2.5vw] pt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              aspernatur corporis? Eos pariatur aspernatur officiis hic tempora
              molestiae dolor natus fugiat consequatur eius iste deserunt
              commodi ex voluptate, impedit aperiam suscipit iure ipsam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              aspernatur corporis? Eos pariatur aspernatur officiis hic tempora
              molestiae dolor natus fugiat consequatur eius iste deserunt
              commodi ex
            </p>
          </div>
          <div className='firstname-lastname md:flex flex-col justify-end items-end hidden uppercase text-[#121212] bottom-[7vw] absolute left-[10%] font-mono text-left w-fit h-fit text-[1.5vw]  '>
            <p className='about'>anastasia</p>
            <p>//lukavsky</p>
          </div>
        </div>
      </section>
      {/**skills section */}
      <section
        id='skills'
        className='skills-section font-mono  md:text-[1vw] flex w-screen bg-white  '
      >
        {/* <span className='text-[5vw] h-fit md:hidden p-5 text-white'>//SKILLS</span> */}
        <div className='front-end-section text-[4vw]  md:text-[1.3vw]  flex w-[100vw]  '>
          <div className='flex flex-col w-full basis-0 md:basis-1/2 pt-20 md:pt-96 '>
            <div className='frontend-div   min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2 border-b'>
              <div className='flex flex-col   p-20 '>
                <ul className='list-disc  '>//front-end development</ul>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
              </div>
            </div>

            <div className='backend-div bg-[#121212]   min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2 border-t'>
              <div className=' ft-section flex flex-col  p-20 '>
                <ul className='list-disc '>//back-end development</ul>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
              </div>
            </div>

            <div className='devops-and-deployment-div bg-[#121212]   min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2  border-t'>
              <div className='ft-section flex flex-col  p-20 '>
                <ul className='list-disc  '>//devops and deployment</ul>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
              </div>
            </div>

            <div className='misc-div left-div    min-h-[80dvh] w-[100vw] md:w-full md:basis-1/2  border-t'>
              <div className='ft-section flex flex-col  p-20 '>
                <ul className='list-disc  '>//misc</ul>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
                <li>html</li>
              </div>
            </div>
          </div>
          <div className=' skills-section right-div h-0  md:h-[100dvh] basis-0 md:basis-1/2 hidden sticky top-0 border-l md:flex  items-center bg-white'>
            <p className='font-dida text-[6vw] text-center'>
              *stand by for some cool 3d shit rendered here*
            </p>
          </div>
        </div>
      </section>

      {/**projects section */}
      <section
        id='projects'
        className='projects-section flex pt-[11dvh] bg-white'
      >
        <div className='  flex flex-none  overflow-x-scroll'>
          <div className='projects h-screen w-[100vw] flex pt-2 justify-center'>
            <div className='w-[90vw]  h-[85dvh] md:flex  flex border border-black  gap-3 p-4'>
              <div className='bg-[#121212] md:h-full h-[40%] basis-1/2'></div>

              <div className='basis-1/2 h-fit font-mono text-[#121212] md:text-[1vw] text-[2vw] flex flex-col items-center justify-center'>
                <p className='text-center md:text-[3vw] text-[5vw] pt-5 md:pt-0'>
                  ASTORIA
                </p>
                <p className='leading-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5'>STACK</p>
                <div className='h-fit w-fit border border-[#121212] p-5'>
                  <ul>//front-end</ul>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <ul className='pt-5'>//back-end</ul>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                </div>
              </div>
            </div>
          </div>

          <div className='projects h-screen w-[100vw] flex pt-2 justify-center'>
            <div className='w-[90vw] h-[85dvh] flex  border border-black  gap-3 p-4'>
              <div className='bg-[#121212] h-full basis-1/2'></div>

              <div className='basis-1/2 h-fit font-mono text-[#121212] text-[1vw] flex flex-col items-center justify-center'>
                <p className='text-center text-[3vw]'>ASTORIA</p>
                <p className='leading-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5'>STACK</p>
                <div className='h-fit w-fit border border-[#121212] p-5'>
                  <ul>//front-end</ul>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <ul className='pt-5'>//back-end</ul>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                </div>
              </div>
            </div>
          </div>

          <div className='projects h-screen w-[100vw] flex pt-2 justify-center'>
            <div className='w-[90vw] h-[85dvh] flex  border border-black  gap-3 p-4'>
              <div className='bg-[#121212] h-full basis-1/2'></div>

              <div className='basis-1/2 h-fit font-mono text-[#121212] text-[1vw] flex flex-col items-center justify-center'>
                <p className='text-center text-[3vw]'>ASTORIA</p>
                <p className='leading-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5'>STACK</p>
                <div className='h-fit w-fit border border-[#121212] p-5'>
                  <ul>//front-end</ul>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <ul className='pt-5'>//back-end</ul>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                </div>
              </div>
            </div>
          </div>

          <div className='projects h-screen w-[100vw] flex pt-2 justify-center'>
            <div className='w-[90vw] h-[85dvh] flex  border border-black  gap-3 p-4'>
              <div className='bg-[#121212] h-full basis-1/2'></div>

              <div className='basis-1/2 h-fit font-mono text-[#121212] text-[1vw] flex flex-col items-center justify-center'>
                <p className='text-center text-[3vw]'>ASTORIA</p>
                <p className='leading-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  quaerat deleniti officia dolorum rem cupiditate animi
                  laudantium molestiae accusantium. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Non quaerat deleniti officia
                  dolorum rem cupiditate animi laudantium molestiae accusantium.
                </p>
                <p className='text-center pt-5'>STACK</p>
                <div className='h-fit w-fit border border-[#121212] p-5'>
                  <ul>//front-end</ul>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo
                  </li>
                  <li>html</li>
                  <ul className='pt-5'>//back-end</ul>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio laboriosam porro illo?
                  </li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**contact section */}
      <section id='contact' className='contact-section font-mono'>
        <div className='h-screen w-screen bg-[#121212] relative '>
          <div className='flex justify-between'>
            <video
              src={vid}
              loop={true}
              autoPlay={true}
              muted={true}
              data-sizes='auto'
              className='md:h-screen object-cover h-0 md:basis-1/2 mix-blend-luminosity'
            ></video>

            <div className=' h-screen w-full md:basis-1/2 gap-9 text-white mix-blend-difference flex flex-col items-center justify-center overflow-x-hidden'>
              <p className='md:text-[2vw] text-[5vw]'>contact me </p>
              <a
                href='https://www.linkedin.com/in/anastasialukavsky/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={linkedin} alt='' className=' md:w-[4vw] w-[10vw]' />
              </a>
              <a
                href='https://github.com/anastasialukavsky'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={github} alt='' className='md:w-[4vw] w-[10vw]' />
              </a>
              <img
                src={gmail}
                alt=''
                className=' md:w-[4vw] w-[10vw] '
                onClick={handleEmailClick}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

//    <section className='about-section h-[100dvh] w-full bg-pink-200 flex relative top-0'>
// <div className='flex gap-[9%] w-[80%] max-h-[70%] min-h-[60%] self-center items-center border  border-blue-800 mx-auto'>
//   <div className=' about-me-details-wrapper w-full h-fit '>
//     <div className='bg-[#121212] h-full'>
//       <img
//         // style={'will-change: transform, width, height; transform: translate3d(0em, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; width: 100%; height: 100%'}
//         src={me}
//         alt='photo of the creator'
//         className='pic aspect-[4/5] object-cover h-fit relative -top-4 -right-8'
//       />
//     </div>
//   </div>

// <p className='bio-text font-mono text-[#121212] w-full lowercase border pr-8 text-[1.5vw] leading-tight'>
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
// aspernatur corporis? Eos pariatur aspernatur officiis hic tempora
// molestiae dolor natus fugiat consequatur eius iste deserunt commodi
// ex voluptate, impedit aperiam suscipit iure ipsam. Lorem ipsum dolor
// sit amet consectetur adipisicing elit. Officiis, aspernatur
// corporis? Eos pariatur aspernatur officiis hic tempora molestiae
// dolor natus fugiat consequatur eius iste deserunt commodi ex
// vol

// import { useEffect, useLayoutEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ProgressBar from './ProgressBar';
// import me from '../public/bg/me.jpg';

// gsap.registerPlugin(ScrollTrigger);

// export default function Homepage() {
//   const aboutSectionRef = useRef(null);
//   const heroSectionRef = useRef(null);
//   const skillContentRef = useRef(null);

//   useLayoutEffect(() => {
//     if (
//       !document.querySelector('.hero-section') ||
//       !document.querySelector('.about-section') ||
//       !document.querySelector('.skill-section')
//     )
//       return;

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline();

//       tl.to('.hero-section', {
//         yPercent: 100,
//         ease: 'expo',
//         duration: 1,
//         scrollTrigger: {
//           trigger: '.about-section',
//           start: 'top bottom',
//           end: 'top top',
//           scrub: 1.5,
//         },
//       });
//       // .from('.pic', {
//       //   // height: '300px',
//       //   // width: '400px',
//       //   scale: 4.5,
//       //   // position: 'relative',
//       //   // top: '4%',
//       //   // right: '8%',

//       //   // objectFit: 'cover',
//       //   // aspectRatio: '4/5',
//       //   // display: 'flex',
//       //   ease: 'none',
//       //   duration: 1,

//       //   scrollTrigger: {
//       //     trigger: '.about-section',
//       //     pin: true,
//       //     markers: true,
//       //     start: 'top top',
//       //     end: 'bottom bottom',
//       //     scrub: 1.6
//       //   }
//       // })

//       // GSAP ScrollTrigger for horizontal scrolling in skill-section
//       //   const skillContent = skillContentRef.current as unknown as HTMLElement;

//       //   tl.to(skillContent, {
//       //     x: () => -(skillContent.scrollWidth - window.innerWidth),
//       //     ease: 'none',
//       //     scrollTrigger: {
//       //       trigger: skillContent,
//       //       start: 'top top',
//       //       end: 'bottom top',
//       //       scrub: 1,
//       //       pin: true,
//       //     },
//       //   });
//     });

//     return () => {
//       ScrollTrigger.refresh();
//       ctx.revert();
//     };
//   }, []);

//   const sections = gsap.utils.toArray('.sections');
//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       let cl = gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: 'none',
//         scrollTrigger: {
//           trigger: '.skill-section',
//           pin: true,
//           scrub: 1,
//           end: '+=3000',
//         },
//       });
//     });

//     return () => {
//       ScrollTrigger.refresh();
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <main className=' w-[100vw] h-[calc(100dvh_-_11dvh)] text-white '>
//       <div className='hero-section flex flex-col justify-center items-center h-full xs:-translate-y-[30%] md:-translate-y-[10%]'>
//         <p className='self-end xs:pr-4 pr-[5%] font-mono xs:text-[1.8vw] md:text-[.8vw]'>
//           hello, i am
//         </p>
//         <h1 className='font-dida text-[6.7vw] leading-none text-center'>
//           fullstack developer
//         </h1>
//         <div className='font-mono self-start pl-[7%] lowercase xs:w-[70%] md:w-[38%] xs:text-[2.2vw] pt-[1%]  md:text-[1.2vw] '>
//           <p>Crafting Digital Experiences from Front to Back</p>
//           <p> Bringing Ideas to Life with Code and Creativity</p>
//         </div>
//       </div>

//       <section className=' '>
//         <div className='about-section h-[100dvh] w-full bg-white flex relative top-0'>
//           <div className='flex gap-[9%] w-[80%] max-h-[70%] min-h-[60%] self-center items-center border  border-blue-800 mx-auto'>
//             <div className=' about-me-details-wrapper w-full h-fit '>
//               <div className='bg-[#121212] h-full'>
//                 <img
//                   src={me}
//                   alt='photo of the creator'
//                   className='pic aspect-[4/5] object-cover h-fit relative -top-4 -right-8'
//                 />
//               </div>
//             </div>

//             <p className='bio-text font-mono text-[#121212] w-full lowercase border pr-8 text-[1.5vw] leading-tight'>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
//               aspernatur corporis? Eos pariatur aspernatur officiis hic tempora
//               molestiae dolor natus fugiat consequatur eius iste deserunt
//               commodi ex voluptate, impedit aperiam suscipit iure ipsam. Lorem
//               ipsum dolor sit amet consectetur adipisicing elit. Officiis,
//               aspernatur corporis? Eos pariatur aspernatur officiis hic tempora
//               molestiae dolor natus fugiat consequatur eius iste deserunt
//               commodi ex
//             </p>
//           </div>
//           <div className='firstname-lastname flex flex-col justify-end items-end  uppercase text-black bottom-[7vw] absolute left-[10%] font-mono text-left w-fit h-fit text-[1.5vw]'>
//             <p className='about'>anastasia</p>
//             <p>//lukavsky</p>
//           </div>
//         </div>

//         <section className='skill-section  flex'>
//           <div className='skill-content flex-none flex overflow-x-scroll '>
//             <div className='sections h-screen bg-[#121212] w-[80vw]'>
//               <p>//front-end development</p>
//             </div>
//             <div className='sections  w-[80vw] h-screen bg-blue-300'>
//               <p>//back-end development</p>
//             </div>
//             <div className='sections w-[80vw] h-screen bg-green-300'>
//               <p>//devops and deployment</p>
//             </div>
//             <div className='sections  w-[80vw] h-screen bg-sky-300'>
//               <p>//other skills</p>
//             </div>
//           </div>
//         </section>
//       </section>
//     </main>
//   );
// }

{
  /* <section className='skill-section  flex'>
          <div className='skill-content flex-none flex overflow-x-scroll '>
          <div className='sections h-screen bg-[#121212] w-[80vw]'>
          <p>//front-end development</p>
          </div>
          <div className='sections  w-[80vw] h-screen bg-blue-300'>
          <p>//back-end development</p>
          </div>
          <div className='sections w-[80vw] h-screen bg-green-300'>
          <p>//devops and deployment</p>
              </div>
              <div className='sections  w-[80vw] h-screen bg-sky-300'>
              <p>//other skills</p>
              </div>
              </div>
            </section> */
}

//  <div className='hero-section flex flex-col justify-center items-center h-full xs:-translate-y-[30%] md:-translate-y-[10%]'>
//    <p className='self-end xs:pr-4 pr-[5%] font-mono xs:text-[1.8vw] md:text-[.8vw]'>
//      hello, i am
//    </p>
//    <h1 className='font-dida text-[6.7vw] leading-none text-center'>
//      fullstack developer
//    </h1>
//    <div className='font-mono self-start pl-[7%] lowercase xs:w-[70%] md:w-[38%] xs:text-[2.2vw] pt-[1%]  md:text-[1.2vw] '>
//      <p>Crafting Digital Experiences from Front to Back</p>
//      <p> Bringing Ideas to Life with Code and Creativity</p>
//    </div>
//  </div>;

//  {
//    /**about section */
//  }
//  <section id='about' className='about flex'>
//    <div className='about-section h-[100dvh] w-full bg-[#121212] flex relative top-0 '>
//      <div className='md:flex  gap-[9%] w-[80%] max-h-[70%] min-h-[60%] self-center items-center mx-auto  '>
//        <div className=' about-me-details-wrapper w-full h-fit'>
//          <div className='bg-[#121212]  h-full'>
//            <img
//              src={me}
//              alt='photo of the creator'
//              className='pic aspect-[4/5] object-cover h-fit relative xs:-right-3 -top-4 -right-8 xs:aspect-auto'
//            />
//          </div>
//        </div>

//        <p className='bio-text font-mono text-[#121212] w-full lowercase  md:pr-8 md:text-[1.5vw] leading-tight text-[2.5vw] pt-5'>
//          Lorem ipsum dolor sit amet consectetur adipisicing elit.
//          Officiis, aspernatur corporis? Eos pariatur aspernatur officiis
//          hic tempora molestiae dolor natus fugiat consequatur eius iste
//          deserunt commodi ex voluptate, impedit aperiam suscipit iure
//          ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
//          Officiis, aspernatur corporis? Eos pariatur aspernatur officiis
//          hic tempora molestiae dolor natus fugiat consequatur eius iste
//          deserunt commodi ex
//        </p>
//      </div>
//      <div className='firstname-lastname md:flex flex-col justify-end items-end hidden uppercase text-[#121212] bottom-[7vw] absolute left-[10%] font-mono text-left w-fit h-fit text-[1.5vw]  '>
//        <p className='about'>anastasia</p>
//        <p>//lukavsky</p>
//      </div>
//    </div>
//  </section>;

//  {
//    /**skills section */
//  }
//  <section
//    id='skills'
//    className='skills-section font-mono text-[1vw] flex w-screen bg-white'
//  >
//    <span className='text-[5vw] md:hidden p-5 text-white'>//SKILLS</span>
//    <div className='front-end-section text-[1.3vw]  flex w-full'>
//      <div className='flex flex-col w-full basis-0 md:basis-1/2 pt-96'>
//        <div className='frontend-div   min-h-[80dvh] basis-1/2 border-b'>
//          <div className='flex flex-col  p-20 '>
//            <ul className='list-disc  '>//front-end development</ul>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//          </div>
//        </div>

//        <div className='backend-div bg-[#121212]  min-h-[80dvh] basis-1/2 border-t'>
//          <div className=' ft-section flex flex-col  p-20 '>
//            <ul className='list-disc '>//back-end development</ul>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//          </div>
//        </div>

//        <div className='devops-and-deployment-div bg-[#121212] min-h-[80dvh] basis-1/2 border-t'>
//          <div className='ft-section flex flex-col  p-20 '>
//            <ul className='list-disc  '>//devops and deployment</ul>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//          </div>
//        </div>

//        <div className='misc-div left-div  min-h-[100dvh] basis-1/2 border-t'>
//          <div className='ft-section flex flex-col  p-20 '>
//            <ul className='list-disc  '>//misc</ul>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//            <li>html</li>
//          </div>
//        </div>
//      </div>
//      <div className=' skills-section right-div h-0  md:h-[100dvh] basis-0 md:basis-1/2 hidden sticky top-0 border-l md:flex  items-center bg-white'>
//        <p className='font-dida text-[6vw] text-center'>
//          *stand by for some cool 3d shit rendered here*
//        </p>
//      </div>
//    </div>
//  </section>;

//  {
//    /**projects section */
//  }
//  <section id='project' className='projects-section flex'>
//    <div className='  flex flex-none overflow-x-scroll'>
//      <div className='projects h-screen w-[100vw] '>
//        <div className='w-[100vw] h-[100dvh] flex    gap-3 p-10'>
//          <div className='bg-[#121212] h-[500px] basis-1/2'></div>

//          <div className='basis-1/2 h-full font-mono text-[#121212] text-[1.2vw] flex flex-col'>
//            <p className='text-center text-[3vw]'>ASTORIA</p>
//            <p className=''>
//              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
//              quaerat deleniti officia dolorum rem cupiditate animi
//              laudantium molestiae accusantium. Lorem ipsum dolor sit amet
//              consectetur adipisicing elit. Non quaerat deleniti officia
//              dolorum rem cupiditate animi laudantium molestiae
//              accusantium.
//            </p>
//            <p className='text-center pt-5'>STACK</p>
//            <div className='h-fit w-fit border border-[#121212] p-5'>
//              <ul>//front-end</ul>
//              <li>html</li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo
//              </li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo
//              </li>
//              <li>html</li>
//              <ul className='pt-5'>//back-end</ul>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo?
//              </li>
//              <li>html</li>
//              <li>html</li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo?
//              </li>
//              <li>html</li>
//              <li>html</li>
//              <li>html</li>
//            </div>
//          </div>
//        </div>
//      </div>

//      <div className='projects h-screen w-[100vw] '>
//        <div className='w-[100vw] h-[100dvh] flex    gap-3 p-10'>
//          <div className='bg-[#121212] h-[500px] basis-1/2'></div>

//          <div className='basis-1/2 h-full font-mono text-[#121212] text-[1.2vw] flex flex-col'>
//            <p className='text-center text-[3vw]'>ASTORIA</p>
//            <p className=''>
//              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
//              quaerat deleniti officia dolorum rem cupiditate animi
//              laudantium molestiae accusantium. Lorem ipsum dolor sit amet
//              consectetur adipisicing elit. Non quaerat deleniti officia
//              dolorum rem cupiditate animi laudantium molestiae
//              accusantium.
//            </p>
//            <p className='text-center pt-5'>STACK</p>
//            <div className='h-fit w-fit border border-[#121212] p-5'>
//              <ul>//front-end</ul>
//              <li>html</li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo
//              </li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo
//              </li>
//              <li>html</li>
//              <ul className='pt-5'>//back-end</ul>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo?
//              </li>
//              <li>html</li>
//              <li>html</li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo?
//              </li>
//              <li>html</li>
//              <li>html</li>
//              <li>html</li>
//            </div>
//          </div>
//        </div>
//      </div>

//      <div className='projects h-screen w-[100vw] '>
//        <div className='w-[100vw] h-[100dvh] flex    gap-3 p-10'>
//          <div className='bg-[#121212] h-[500px] basis-1/2'></div>

//          <div className='basis-1/2 h-full font-mono text-[#121212] text-[1.2vw] flex flex-col'>
//            <p className='text-center text-[3vw]'>ASTORIA</p>
//            <p className=''>
//              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
//              quaerat deleniti officia dolorum rem cupiditate animi
//              laudantium molestiae accusantium. Lorem ipsum dolor sit amet
//              consectetur adipisicing elit. Non quaerat deleniti officia
//              dolorum rem cupiditate animi laudantium molestiae
//              accusantium.
//            </p>
//            <p className='text-center pt-5'>STACK</p>
//            <div className='h-fit w-fit border border-[#121212] p-5'>
//              <ul>//front-end</ul>
//              <li>html</li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo
//              </li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo
//              </li>
//              <li>html</li>
//              <ul className='pt-5'>//back-end</ul>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo?
//              </li>
//              <li>html</li>
//              <li>html</li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo?
//              </li>
//              <li>html</li>
//              <li>html</li>
//              <li>html</li>
//            </div>
//          </div>
//        </div>
//      </div>

//      <div className='projects h-screen w-[100vw] '>
//        <div className='w-[100vw] h-[100dvh] flex    gap-3 p-10'>
//          <div className='bg-[#121212] h-[500px] basis-1/2'></div>

//          <div className='basis-1/2 h-full font-mono text-[#121212] text-[1.2vw] flex flex-col'>
//            <p className='text-center text-[3vw]'>ASTORIA</p>
//            <p className=''>
//              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
//              quaerat deleniti officia dolorum rem cupiditate animi
//              laudantium molestiae accusantium. Lorem ipsum dolor sit amet
//              consectetur adipisicing elit. Non quaerat deleniti officia
//              dolorum rem cupiditate animi laudantium molestiae
//              accusantium.
//            </p>
//            <p className='text-center pt-5'>STACK</p>
//            <div className='h-fit w-fit border border-[#121212] p-5'>
//              <ul>//front-end</ul>
//              <li>html</li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo
//              </li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo
//              </li>
//              <li>html</li>
//              <ul className='pt-5'>//back-end</ul>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo?
//              </li>
//              <li>html</li>
//              <li>html</li>
//              <li>html</li>
//              <li>
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                Distinctio laboriosam porro illo?
//              </li>
//              <li>html</li>
//              <li>html</li>
//              <li>html</li>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </section>;
