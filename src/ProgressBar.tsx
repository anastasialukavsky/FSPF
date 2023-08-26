import whiteDot from '../public/icons/white_dot.svg';
import blackDot from '../public/icons/black_dot.svg';

export default function ProgressBar() {
  return (
    <div className='progress-bar mix-blend-difference z-50  h-[10000px] bg-white w-[1px] left-[.9%]  absolute top-3/4'>
      <span className='   left-5 ' />
      {/* <img src={whiteDot} alt='white dot' className='w-10 ' /> */}
    </div>
  );
}
