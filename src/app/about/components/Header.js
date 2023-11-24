import SectionHeading from './../../commons/components/elements/SectionHeading';
import SectionSubHeading from './../../commons/components/elements/SectionSubHeading';
export default function Header() {
  return (
    <>
    <div className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading title='About' />
        <SectionSubHeading>
          <p className='text-md dark:text-neutral-400'>A short story of me, not important but seem better than nothing.</p>
        </SectionSubHeading>
      </div>
      <div className='border-b border-dashed border-neutral-600 dark:border-neutral-500'></div>
      <p className='font-light text-md leading-7'>
      Hi, my name is Renaldi Dwi, also known as Renaldi, I am an aspiring beginner data scientist with only one month of experience. 
      He has demonstrated dedication and a keen ability to master a wide range of data analysis. Renaldi's journey started with a strong foundation in SQL, Python and 
      Statistics as well as some business understanding, enabling him to create insights from existing data.</p>
      <p className='font-light text-md leading-7'>
      What distinguishes Renaldi is his quick adaptability to new challenges, making him a promising Data Scientist. 
      Despite his limited experience, he actively seeks out resources and tutorials to stay current with data developments. 
      Renaldi's dedication and versatility make him a valuable addition to any data team, and his journey has only just begun. 
      He is on his way to becoming a skilled professional who is adept at analyzing data into useful insights for company development.</p>
      <p className='font-light text-md leading-7'>
        I stay current with industry trends and best practices to provide innovative solutions that surpass company expectations. My strong 
        problem-solving skills and attention to detail drive innovation in every project I handle.</p>
    </div>
    </>
  )
}