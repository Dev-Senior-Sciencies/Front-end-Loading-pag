import educacao from '../icons/educacao.png';
import saude from '../icons/saude.png';
import turismo from '../icons/turismo.png';
import cultura from '../icons/cultura.png';
import comunicacao from '../icons/comunicacao.png';
import './servicos.css';

function Servicos() {
    return (
      <div className="Servicos">
        <div className="container-h">
           <h4>SERVIÇOS EM</h4>
           <h1>DESTAQUE</h1>
        </div>
        <div className="container-destaque-main">
            <div className="container-destaque">
              <img src={educacao} alt="icone de educacao" />
              <i>Educação</i>
            </div>
            <div className="container-destaque">
              <img src={saude} alt="icone de saude" />
              <i>Saúde</i>
            </div>
            <div className="container-destaque">
              <img src={turismo} alt="icone de turismo" />
              <i>Turismo</i>
            </div>
            <div className="container-destaque">
              <img src={cultura} alt="icone de cultura" />
              <i>Cultura</i>
            </div>
            <div className="container-destaque">
              <img src={comunicacao} alt="icone de comunicacao" />
              <i>Comunicação</i>
            </div>
        </div>

      </div>
    );
  }
  
export default Servicos;