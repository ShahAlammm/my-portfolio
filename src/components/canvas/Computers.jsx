import img from '../../../public/profile.png';
import {SectionWrapper} from '../../hoc';

const Computers = () => {
  return (
    <div className='flex justify-end'>
     <img src={img} alt="profile"  className='w-40 h-50 md:w-[400px] md:h-[500px] mt-28 z-[-10]'/>
    </div>
  );
};

export default SectionWrapper(Computers, "");
