import facebook from '../iconsTwo/facebook.png';
import twitter from '../iconsTwo/twitter.png';
import youtube from '../iconsTwo/youtube.png';
import instagram from '../iconsTwo/instagram.png';
import flickr from '../iconsTwo/flickr.png';
import tiktok from '../iconsTwo/tiktok.png';
import logoNovaSc from '../images/logo_nova_sc.png';
import mapa from '../images/mapa.png';

import './footer.css';

function Footer() {
    return (
      <div className="footer">
        <div className="footer-main">
          <div className="footer-container-local">
            <img src={logoNovaSc} alt="logo do estado de SC" />
            <p>Centro Administrativo do Governo </p>
            <p> Rod. SC 401 - km.15, nº 4.600.</p>
            <p> Florianópolis | CEP:88032-000</p><br /><br />
            <p>Horário de Expediente: Das 12h às</p>
            <p> 19h,de segunda à sexta-feira</p>
            <p>(Decreto Nº1.410 de 18 de Dezembro</p>
            <p> de 2017)</p>
            <a href="#.">Politica de Privacidade</a>
          </div>
          <div className="footer-container-links">
            <h3 className="footer-container-links-menu">MENU</h3>
            <div className="footer-container-links-menu-a">
              <a href="#.">INÍCIO</a>
              <a href="#.">SERVIÇOS</a>
              <a href="#.">SERVIÇOS POR CATEGORIA</a>
              <a href="#.">APLICATIVOS DO GOVERNO</a>
              <a href="#.">CONTATO</a>
            </div>
            <h3 className="footer-container-links-externos">LINKS EXTERNOS</h3>
            <div className="footer-container-links-externos-a">
              <a href="#.">NOTÍCIAS</a>
              <a href="#.">SERVIÇOS</a>
              <a href="#.">DIÁRIO OFICIAL</a>
              <a href="#.">OUVIDORIA</a>
              <a href="#.">TRANSPARÊNCIA</a>
              <a href="#.">ORGÃOS DO GOVERNO</a>
            </div>
          </div>
          <div className="footer-container-ouvidoria">
            <img src={mapa} alt="imagem do mapa" />
            <span><h1>0800-644-8500</h1></span>
          </div>
        </div>
        <div className="footer-container-redeSo">
          <h5>Copyright © 2022 Todos os Direitos Reservados SC - Governo de Santa Catarina | Desenvolvedor - SEA/DITI/GESIN</h5>
          <img src={facebook} alt="icone de facebook" />
          <img src={twitter} alt="icone de twitter" />
          <img src={youtube} alt="icone de youtube" />
          <img src={instagram} alt="icone de instagram" />
          <img src={flickr} alt="icone de flickr" />
          <img src={tiktok} alt="icone de tiktok" />
        </div>
      </div>
    );
  }
  
export default Footer;