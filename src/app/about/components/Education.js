import SectionHeading from './../../commons/components/elements/SectionHeading';
import SectionSubHeading from './../../commons/components/elements/SectionSubHeading';
import EducationCard from './EducationCard'
import { TbSchool } from "react-icons/tb";
export default function Education() {
  return (
    <>
    <div className='space-y-6'>
      <div className='space-y-2 '>
        <SectionHeading title='Education' icon={<TbSchool className='mr-1'/>}/>
        <SectionSubHeading>
          <p>My educational journey.</p>
        </SectionSubHeading>
      </div>
          <EducationCard/>
    </div></>
  )}