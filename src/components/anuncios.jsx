import enfermagem from '../images/enfermagem.png';
import engenharia from '../images/engenharia.png';
import estudante from '../images/estudante.png';
import psicologia from '../images/psicologia.png';
import './anuncios.css';

const start = () => {
  const time = 15000;
  const images = document.querySelectorAll('#slider img');
  
  const p = document.querySelectorAll('#slider-p p');
  
  const maxImg = images.length;
  const maxP = p.length;

  let currentImageIndex = 0;

  const next = () => {
    images[currentImageIndex].classList.remove('selected');
    p[currentImageIndex].classList.remove('selected');

    currentImageIndex ++;

    if(currentImageIndex >= maxImg) {
      currentImageIndex = 0;
    }

    if(currentImageIndex >= maxP) {
      currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add('selected')
    p[currentImageIndex].classList.add('selected')
  }

  setInterval(() => {
    next();
  }, time)
}
window.addEventListener('load', start)
function Anuncios() {

    return (
      <div className="anuncios-container">
        <div className='container-main'>
          <form>
            <div id='slider-p'>
              <p className='selected'>
                "A Enfermagem é uma profissão voltada para 
                os cuidados de saúde focada no indivíduo, 
                famílias e comunidades para que possam promover 
                manter ou recuperar a saúde e a qualidade de 
                vidas ideais. Enfermeiros, Técnicos de Enfermagem
                e Auxiliar de Enfermagem, podem ser diferenciados
                de outros"
              </p>
              <p>
                "Para além da certificação como engenheiro propriamente
                dito, em alguns países existe a certificação como técnico 
                de engenharia ou engenheiro técnico, associada aos profissionais
                com uma habilitação correspondente a um curso superior de 1º ciclo 
                na área da engenharia"
              </p>
              <p>
                "Para o estudante sério, 'ciência' é o 
                nome de um conjunto de métodos e estratégias 
                em constante auto-revisão e aperfeiçoamento, 
                para o conhecimento da realidade, para o 
                típico pseudo-intelectual que as universidades
                produzem, é um conjunto de crenças inabaláveis,
                garantidas pelo consenso dos doutores"
              </p>
              <p>
                "Psicologia é a ciência que estuda o 
                comportamento humano e seus processos 
                mentais. Melhor dizendo, a Psicologia 
                estuda o que motiva o comportamento 
                humano – o que o sustenta, o que o 
                finaliza e seus processos mentais, 
                que passam pela sensação, emoção, 
                percepção, aprendizagem, inteligência"
              </p>
            </div>
            <div id='slider'>
              <img className='selected' src={enfermagem} alt="" />
              <img src={engenharia} alt="" />
              <img src={estudante} alt="" />
              <img src={psicologia} alt="" />
            </div>
          </form>
        </div>
      </div>
    );
  }
  
export default Anuncios;