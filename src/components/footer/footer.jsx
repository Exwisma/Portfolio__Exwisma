import 'boxicons/css/boxicons.min.css';
import './footer.css'

function Footer() {

  return (
        <footer className="footer" id="footer">
        <div className="footer-content"> 
            <div className="footer-text">
                <p>Copyright &copy; 2025 by Ismail Abbyasov | All Rights Reserved.</p>
            </div>

        <address className="social-media">

  
                     <a className="tooltip" aria-label="Мой Telegram" target="_blank" href="https://t.me/Exwisma">
                    <i className="bx bxl-telegram"></i>
                    <span className="tooltip-text" >Telegram</span>
                    </a>
  
                      <a className="tooltip" aria-label="Мой Github"  target="_blank" href="https://github.com/Exwisma">
                    <i className="bx bxl-github"></i>
                    <span className="tooltip-text" >Github</span>
                    </a>
  
                      <a className="tooltip" aria-label="Мой Instagram"  target="_blank" href="https://www.instagram.com/exwisma?igsh=MWsxemI3Y3RlcXlsYQ%3D%3D&utm_source=qr">
                    <i className="bx bxl-instagram-alt"></i>
                    <span className="tooltip-text" >Instagram</span>
                    </a>


                    </address>

        <div className="footer-iconTop">
            <a href="#home"><i className="bx bx-up-arrow-alt"></i></a>
        </div>
        </div>
    </footer>
  )
}

export default Footer;

