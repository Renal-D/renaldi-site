import Link from 'next/link'
import {BiRocket} from 'react-icons/bi'

export default function ResumeCard() {
  return (
    <div className='space-y-6'>
    <div className="rounded-xl transition-all duration-300 flex items-center gap-5 p-8 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800">
      <div className='space-y-6'>
        <div className='flex gap-2 items-center'>
          <BiRocket size={26}/>
          <p className='md:text-xl text-lg'>Lets work together!</p>
        </div>
        <div><p className='font-light'>I'm open for freelance projects and part/full time worker, you can see my resume here.</p></div>
        <div><Link href='https://drive.google.com/file/d/18VVYwyXc083ljAxdPC4hiCdiSL0F46sN/view?usp=sharing' className='py-2 px-4 bg-neutral-600 hover:bg-neutral-900 text-neutral-200 rounded-lg' target='_blank'>View My Resume</Link></div>
      </div>
    </div>
    </div>
  )
}