import 'boxicons/css/boxicons.min.css';
import './header-section.css'
import myPhoto from '../../assets/my-photo/Мое фото№1.jpg'
import React from 'react';
import Typed from 'typed.js';


function HeaderSection() {

 // Create reference to store the DOM element containing the animation
  const element = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ['Frontend-разработчик'],
      typeSpeed: 100, 
      backSpeed: 100, 
      backDelay: 1000, 
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
      <section className="home" id="home">
        <div className="home-content">
            <h3>Привет, меня зовут</h3>
            <h1>Исмаил </h1>
            <h3>И я <span className="multiple-text" ref={element}></span></h3>
            <p>Я являюсь фронтенд-разработчиком, cоздаю современные и удобные веб-приложения с адаптивным дизайном и чистым, структурированным кодом</p>
                    <address className="social-media">
                    <a className="tooltip" aria-label="Мой Telegram" target="_blank" rel="noopener noreferrer" href="https://t.me/Exwisma">
                    <i className="bx bxl-telegram"></i>
                    <span className="tooltip-text" >Telegram</span>
                    </a>
                   
                    <a className="tooltip" aria-label="Мой Github"  target="_blank" rel="noopener noreferrer" href="https://github.com/Exwisma">
                    <i className="bx bxl-github"></i>
                    <span className="tooltip-text" >Github</span>
                    </a>

                    <a className="tooltip" aria-label="Мой Instagram"  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/exwisma?igsh=MWsxemI3Y3RlcXlsYQ%3D%3D&utm_source=qr">
                    <i className="bx bxl-instagram-alt"></i>
                    <span className="tooltip-text" >Instagram</span>
                    </a> 
                    {/* <a className='tooltip' target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/%D0%B4%D0%B6%D0%B0%D0%B2%D0%BE%D1%85%D0%B8%D1%80-%D0%B0%D0%BD%D0%BD%D0%B0%D0%BA%D1%83%D0%BB%D0%BE%D0%B2-54130a261/">
                    <i className="bx bxl-linkedin"></i>
                     <span className="tooltip-text" >Linkedin</span>
                    </a>  */}
                    

            </address>

        </div>

        <div className="home-img">
            <img src={myPhoto} alt="Фото Фронтенд-Разработчика"/>
        </div>
    </section>
  )
}

export default HeaderSection;

