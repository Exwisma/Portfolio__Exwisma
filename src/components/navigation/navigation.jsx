import './navigation.css';
import { useState, useEffect } from 'react';

function Navigation() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => setMenuActive(!menuActive);

  // 🟢 Автоматическая подсветка активного раздела
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // немного выше для точности
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = `#${section.getAttribute('id')}`;
        }
      });
      if (current) setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🟣 Плавная прокрутка при клике
  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
      setMenuActive(false); // закрыть меню на мобильном
    }
  };

  return (
    <div className="navigation">
      <a className="logo" href="#">Портфолио</a>

      <i
        onClick={toggleMenu}
        className={`bx bx-menu ${menuActive ? 'bx-x' : ''}`}
        id="menu-icon"
      ></i>

      <nav className={`navbar${menuActive ? ' active' : ''}`}>
        <a
          href="#home"
          className={activeLink === '#home' ? 'active' : ''}
          onClick={(e) => handleClick(e, '#home')}
        >
          Главное
        </a>
        <a
          href="#skills"
          className={activeLink === '#skills' ? 'active' : ''}
          onClick={(e) => handleClick(e, '#skills')}
        >
          Навыки
        </a>
        <a
          href="#portfolio"
          className={activeLink === '#portfolio' ? 'active' : ''}
          onClick={(e) => handleClick(e, '#portfolio')}
        >
          Проекты
        </a>
        <a
          href="#contact"
          className={activeLink === '#contact' ? 'active' : ''}
          onClick={(e) => handleClick(e, '#contact')}
        >
          Связь
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
