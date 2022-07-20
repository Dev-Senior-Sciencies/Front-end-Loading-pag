import logoNovaSc from '../images/logo_nova_sc.png';
import hamburguer from '../icons/hamburguer.png';
import facebook from '../icons/facebook.png';
import twitter from '../icons/twitter.png';
import youtube from '../icons/youtube.png';
import instagram from '../icons/instagram.png';
import flickr from '../icons/flickr.png';
import tiktok from '../icons/tiktok.png';
import opcao from '../icons/opcao.png';

import './header.css';

function Header() {
  return (
      <header>
        <nav className="container-links">
          <div className='container-link-rede-social'>
            <img className='logoNovaSc' src={logoNovaSc} alt="" />
            <div className='links-nav'>
              <a href="#.">NOTÍCIAS</a>
              <a href="#.">SERVIÇOS</a>
              <a href="#.">DIÁRIO OFICIAL</a>
              <a href="#.">OUVIDORIA</a>
              <a href="#.">TRNSPARÊNCIA</a>
              <a href="#.">ORGÃOS DO GOVERNO</a>
            </div>
            <div className='container-i-img'>
              <i><img src={facebook} alt="facebook icon" /></i>
              <i><img src={twitter} alt="twitter icon" /></i>
              <i><img src={youtube} alt="youtube icon" /></i>
              <i><img src={instagram} alt="instagram icon" /></i>
              <i><img src={flickr} alt="flickr icon" /></i>
              <i><img src={tiktok} alt="tiktok icon" /></i>
            </div>
          </div>
          <div className='container-link-rede-buttons'>
            <a className='container-link-Portal' href="#.">
              <i><img className='container-link-hamburger' src={hamburguer} alt=""/></i>
              <p className='container-link-p'>Portal de Serviços</p>
            </a>
            <a className='container-link-entrar' href="#.">
              <i><img src={opcao} alt="opcao icon"/></i>
              <p className='container-link-E'>ENTRAR</p>
            </a>
          </div>
        </nav>
      </header>
  );
}

export default Header;