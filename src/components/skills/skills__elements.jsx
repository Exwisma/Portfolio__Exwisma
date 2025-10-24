import './skills.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const skills = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Vite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "NPM", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },  
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
];



function SkillsElements() {
    return(
       <AliceCarousel
        items={skills.concat(skills).map((element, index) => (
              <div className="skills-box" key={index}>
                <img src={element.img} alt={element.name} />
                <h3>{element.name}</h3>
              </div>
              ))}
        autoPlay                    // Включает автоматическую прокрутку слайдов
  autoPlayInterval={0}        // Интервал между прокрутками в миллисекундах (2000 = 2 сек)
  infinite                    // Бесконечная прокрутка, после последнего слайда идёт первый
  animationDuration={3000}    // Продолжительность анимации прокрутки (в мс)
  animationType="slide"       // Тип анимации: "slide" или "fade"
  autoPlayDirection="ltr"     // Направление автопрокрутки: "ltr" (слева направо) или "rtl" (справа налево)
  stopAutoPlayOnHover={false} // Отключаем остановку при hover
  autoPlayStrategy="none"     // отключаем паузу на hover
  // ----------------- КОНТРОЛЬ -----------------
  disableDotsControls         // Отключает точки навигации (pagination dots)
  disableButtonsControls      // Отключает стрелки навигации (prev/next buttons)
  // ----------------- АДАПТИВНОСТЬ -----------------
  responsive={{
    0: { items: 1 },        // экраны от 0px — 1 элемент
    500: { items: 2 },      // экраны от 500px — 2 элемента
    700: { items: 3 },      // экраны от 700px — 3 элемента
    900: { items: 4 },      // экраны от 900px — 4 элемента
    1200: { items: 5 },     // экраны от 1200px — 5 элемента
  }}

  // ----------------- ДРУГОЕ -----------------
  disableSlideInfo             // Не показывает индекс текущего слайда (info)
  keysControl                  // Включает управление стрелками клавиатуры
        />
    )
}

export default SkillsElements;