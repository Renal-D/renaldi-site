
import Coffee from "./elements/Coffee"


export default function HeaderHome() {
  return (
    <div className="flex flex-col">
      <div className='flex flex-row justify-between'>
      <h1 className="md:text-3xl text-2xl font-medium flex gap-1">Hi, I'm Renaldi <p className="animate-shake">👋</p></h1>
        <Coffee/>
      </div>
      <ul className='flex md:space-x-8 space-x-0 px-5 py-2 md:flex-row flex-col '>
        <li className='list-disc text-md'>Beginner Data Scientist</li>
        <li className='list-disc text-md'>Based in Sidoarjo 🇮🇩</li>
      </ul>
      <p className='my-2 md:leading-9 leading-7 text-sm'>An enthusiastic and experienced junior Data Scientist with a strong focus on Data Analytics. Proficient in data and has a deep understanding of all aspects of technology. Collaborative team player dedicated to generating good insights from data.</p>
      
    </div>
  )
}