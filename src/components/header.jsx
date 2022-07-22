import logoNovaSc from "../images/logo_nova_sc.png";
import Hamburger from "../icons/hamburguer.png";
import facebook from "../icons/facebook.png";
import twitter from "../icons/twitter.png";
import youtube from "../icons/youtube.png";
import instagram from "../icons/instagram.png";
import flickr from "../icons/flickr.png";
import tiktok from "../icons/tiktok.png";
import opcao from "../icons/opcao.png";

import "./header.css";

function Header() {
  return (
    <header className="flex justify-center h-full max-h-40 w-screen">
      <nav className="flex flex-col max-h-48 max-w-5xl h-full w-full">
        <div className="flex flex-row justify-center items-center self-center max-w-5xl w-full h-3/5 ">
          <img className="flex h-16 w-60" src={logoNovaSc} alt="" />
          <div className="flex justify-center h-full w-11/12 max-h-10 relative ln no-underline">
            <a
              className="text-xs font-light relative crm hover:text-red-700"
              href="#."
            >
              NOTÍCIAS
            </a>
            <a
              className="text-xs font-light relative crm hover:text-red-700"
              href="#."
            >
              SERVIÇOS
            </a>
            <a
              className="text-xs font-light relative crm hover:text-red-700"
              href="#."
            >
              DIÁRIO OFICIAL
            </a>
            <a
              className="text-xs font-light relative crm hover:text-red-700"
              href="#."
            >
              OUVIDORIA
            </a>
            <a
              className="text-xs font-light relative crm hover:text-red-700"
              href="#."
            >
              TRNSPARÊNCIA
            </a>
            <a
              className="text-xs font-light relative crm hover:text-red-700"
              href="#."
            >
              ORGÃOS DO GOVERNO
            </a>
          </div>
          <div className="flex justify-center items-center relative bottom-3 max-h-6 h-full w-48 right-20">
            <i>
              <img
                className="max-h-3 h-full mr-4"
                src={facebook}
                alt="facebook icon"
              />
            </i>
            <i>
              <img
                className="max-h-3 h-full mr-4"
                src={twitter}
                alt="twitter icon"
              />
            </i>
            <i>
              <img
                className="max-h-3 h-full mr-4"
                src={youtube}
                alt="youtube icon"
              />
            </i>
            <i>
              <img
                className="max-h-3 h-full mr-4"
                src={instagram}
                alt="instagram icon"
              />
            </i>
            <i>
              <img className="max-h-3 h-full" src={flickr} alt="flickr icon" />
            </i>
            <i>
              <img className="max-h-3 h-full" src={tiktok} alt="tiktok icon" />
            </i>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between max-w-screen-lg">
          <a className="flex flex-row w-full h-full left-6" href="#.">
            <i>
              <img
                className="h-10r relative top-0.5"
                src={Hamburger}
                alt="Menu do Hamburger icon"
              />
            </i>
            <p className="h-full font-normal ml-2 text-3xl cP">
              Portal de Serviços
            </p>
          </a>
          <a className="flex flex-row" href="#.">
            <i>
              <img
                className="h-3 mr-4 relative right-16 top-3.5"
                src={opcao}
                alt="opcao icon"
              />
            </i>
            <p className="h-8 mr-2 relative text-sm right-16 top-1/4 colorP">
              ENTRAR
            </p>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
