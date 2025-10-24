import './skills.css'
import SkillsElements from './skills__elements';

function Skills() {
        
  return (
     <section className="services" id="skills">
        <h2 className="heading">Мои <span>Технологии:</span></h2>

        <div className="skills-container">
           <SkillsElements />
        </div>
     </section> 
  )
}

export default Skills;
