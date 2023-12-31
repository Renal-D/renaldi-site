import { HiCode } from 'react-icons/hi'
import SkillCard from './SkillCard';
import SectionHeading from './../../commons/components/elements/SectionHeading';
import SectionSubHeading from './../../commons/components/elements/SectionSubHeading';
import { STACKS } from './../../commons/constants/stacks';
export default function SkillList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Skills" icon={<HiCode className="mr-1" />}/>
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My coding skills.</p>
        </SectionSubHeading>
      </div>
      <div className="grid md:grid-cols-12 grid-cols-6 space-y-1">
              {STACKS.map((stack) => (
                <SkillCard key={stack.name} name={stack.name} icon={stack.icon}/>
              ))}
      </div>
    </section>
  )}