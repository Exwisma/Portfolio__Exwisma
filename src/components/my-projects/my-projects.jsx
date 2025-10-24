import './my-projects.css'
import ProjectItems from './project__items';

function MyProject() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Мои <span>Проекты</span></h2>
      <ProjectItems />
    </section>
  )
}

export default MyProject;
