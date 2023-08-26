import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProgressBar from './ProgressBar';
import me from '../public/bg/me.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
  const aboutSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const skillContentRef = useRef(null);

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




      // tl.from('.frontend-div', {
      //   yPercent: 80,
      //   ease: 'expo',
      //   duration: 1,
      //   // delay: 2,
      //   scrollTrigger: {
      //     trigger: '.frontend-div',
      //     start: '90% bottom',
      //     end: 'bottom bottom',
      //     scrub: 1.5,
      //     markers: true,
      //   },
      // }).
      tl.to('.backend-div', {
        yPercent: -60,
        ease: 'expo',
        duration: 1,
        // delay: 2,
        scrollTrigger: {
          trigger: '.backend-div',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1.5,
          // markers: true,
        },
      }).to('.devops-and-deployment-div', {
        yPercent: -60,
        ease: 'expo',
        duration: 1,
        // delay: 2,
        scrollTrigger: {
          trigger: '.devops-and-deployment-div',
          start: 'top 90%',
          end: 'bottom bottom',
          scrub: 1.5,
          // markers: true,
        },
      }).to('.right-div', {
        xPercent: -200,
        ease: 'none',
        duration: 2,
        scrollTrigger: {
          trigger: '.misc-div',
          start: 'top top',
          end: 'center bottom',
          scrub: 1,
          markers: true
        }
      })
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
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
           gsap.to(projects, {
             xPercent: -100 * (projects.length - 1),
             ease: 'none',
             scrollTrigger: {
               trigger: '.projects-section',
               pin: true,
               scrub: 1,
               end: '+=2000',
             },
           });
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
    });

    return () => {
      ScrollTrigger.refresh();
      ctx.revert();
    };
  }, []);


  return (
    <main className=' w-[100vw] h-[calc(100dvh_-_11dvh)] text-white '>
      <div className='hero-section flex flex-col justify-center items-center h-full xs:-translate-y-[30%] md:-translate-y-[10%]'>
        <p className='self-end xs:pr-4 pr-[5%] font-mono xs:text-[1.8vw] md:text-[.8vw]'>
          hello, i am
        </p>
        <h1 className='font-dida text-[6.7vw] leading-none text-center'>
          fullstack developer
        </h1>
        <div className='font-mono self-start pl-[7%] lowercase xs:w-[70%] md:w-[38%] xs:text-[2.2vw] pt-[1%]  md:text-[1.2vw] '>
          <p>Crafting Digital Experiences from Front to Back</p>
          <p> Bringing Ideas to Life with Code and Creativity</p>
        </div>
      </div>

      <section className=' '>
        <div className='about-section h-[100dvh] w-full bg-white flex relative top-0'>
          <div className='flex gap-[9%] w-[80%] max-h-[70%] min-h-[60%] self-center items-center border  border-blue-800 mx-auto'>
            <div className=' about-me-details-wrapper w-full h-fit '>
              <div className='bg-[#121212] h-full'>
                <img
                  src={me}
                  alt='photo of the creator'
                  className='pic aspect-[4/5] object-cover h-fit relative -top-4 -right-8'
                />
              </div>
            </div>

            <p className='bio-text font-mono text-[#121212] w-full lowercase border pr-8 text-[1.5vw] leading-tight'>
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
          <div className='firstname-lastname flex flex-col justify-end items-end  uppercase text-black bottom-[7vw] absolute left-[10%] font-mono text-left w-fit h-fit text-[1.5vw]'>
            <p className='about'>anastasia</p>
            <p>//lukavsky</p>
          </div>
        </div>

        {/* <section className='skill-section  flex'>
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
        </section> */}

        <section className='font-mono text-[1vw] flex'>
          <div className='front-end-section bg-[#121212] flex w-full '>
            <div className='flex flex-col basis-1/2 pt-96'>
              <div className='frontend-div   min-h-[80dvh] basis-1/2 border-b'>
                <div className='flex flex-col  p-20 '>
                  <ul className='list-disc  '>//front-end development</ul>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                  <li>html</li>
                </div>
              </div>

              <div className='backend-div bg-[#121212]  min-h-[80dvh] basis-1/2 border-t'>
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

              <div className='devops-and-deployment-div bg-[#121212] min-h-[80dvh] basis-1/2 border-t'>
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

              <div className='misc-div left-div  min-h-[100dvh] basis-1/2 border-t'>
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
            <div className='right-div  h-[100dvh] basis-1/2 sticky top-0 border-l flex  items-center bg-[#121212]'>
              <p className='font-dida text-[6vw] text-center'>
                *stand by for some cool 3d shit rendered here*
              </p>
            </div>
          </div>
        </section>

        <section className='projects-section flex'>
          <div className='  flex flex-none overflow-x-scroll'>
            <div className='projects h-screen bg-pink-300 w-screen'>
              <p>//front-end development</p>
            </div>
            <div className='projects h-screen bg-sky-300 w-screen'>
              <p>//front-end development</p>
            </div>
            <div className='projects h-screen bg-green-300 w-screen'>
              <p>//front-end development</p>
            </div>
          </div>
        </section>
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
