export default function Homepage() {
  return (
    <main className=' w-screen h-[calc(100dvh_-_11dvh)] text-white'>
      <div className='flex flex-col justify-center items-center h-full -translate-y-[10%]'>
        <p className='self-end xs:pr-4 pr-[5%] font-mono xs:text-[1.8vw] md:text-[.8vw]'>hello, i am</p>
        <h1 className='font-dida text-[6.7vw] leading-none text-center'>
          fullstack developer
        </h1>
        <div className='font-mono self-start pl-[7%] lowercase xs:w-[70%] md:w-[38%] xs:text-[2.2vw] pt-[1%]  md:text-[1.2vw] '>
          <p>Crafting Digital Experiences from Front to Back</p>
          <p> Bringing Ideas to Life with Code and Creativity</p>
        </div>
      </div>
    </main>
  );
}
