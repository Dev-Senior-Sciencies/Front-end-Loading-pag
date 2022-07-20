import React, { useState } from 'react';
import plus from '../icons/plus.png';

import './indicadores.css';



function Indicadores() {
  const [quant, setQuant] = useState(0);
  const [numb, setNumb] = useState(0);
  const [aval, setAval] = useState(0);

  const timeOne = 10;
  const timeTwo = 400;
  const timeTry = 500;


  const handleChangerQ = () => {
   setTimeout(setQuant(quant +1), timeOne);

  }
  const handleChangerN = () => {
    setTimeout(setNumb(numb +1), timeTwo);
   }

  const handleChangerA = () => {
    setTimeout(setAval(aval +1), timeTry);
  }

  const getDateQ = () => {
    handleChangerQ();
  }

  const getDateN = () => {
    handleChangerN();
  }

  const getDateA = () => {
    handleChangerA();

  }

  setTimeout(() => {
    const limitOfQuant = 490;
    if(quant === limitOfQuant){
      console.log(`o limite do numero e ${limitOfQuant +1}`);
    } else {
      getDateQ();
    };
  }, timeOne)

  setTimeout(() => {
    const limitOfNumb = 196;
    if(numb === limitOfNumb) {
      console.log(`o limite do numero e ${limitOfNumb +1}`);
    } else {
      getDateN()
    };
  }, timeOne)

  setTimeout(() => {

    const limitOfAval = 84;
    if(aval === limitOfAval) {
      console.log(`o limite do numero e ${limitOfAval +1}`);
    } else {
      getDateA()
    }

  }, timeOne)

    return (
      <div className='Indicadores'>
        <div className='Indicadores-h'>
          <h4>
              INDICADORES DE
          </h4>
          <h1>
              SERVIÇOS
          </h1>
        </div>
        <div className='Indicadores-container-main'>
          <div className='Indicadores-quant'>
            <div>
               {quant}
            </div>
            <h4>
              QUANTIDADE DE <br />
              SERVIÇOS
            </h4>
          </div>
          <div className='Indicadores-numb'>
            <div>
              {numb}
            </div>
            <h4>
              NÚMERO DE SERVIÇOS<br />
              DIGITAIS
            </h4>
          </div>
          <div className='Indicadores-ava'>
            <div>
              {aval}%
            </div>
            <h4>
              AVALIAÇÕES<br />
              POSITIVAS
            </h4>
          </div>
        </div>
        <div className='Indicadores-plus'>
          <button>MAIS INDICADORES</button>
          <img src={plus} alt="icone de plus" />
        </div>
      </div>
    );
  }
  
export default Indicadores;