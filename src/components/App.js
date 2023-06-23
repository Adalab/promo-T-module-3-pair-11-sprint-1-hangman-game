import { useState } from 'react';
import '../styles/main.scss';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, i) => {
      //Un li vacío si la letra de word no está en userLetters 
      console.log(letter);
      if (userLetters.includes(letter)) {
        return (
          <li className='letter' key={i}>
            {letter}
          </li>
        )
      } else {
        return <li className='letter' key={i}></li>;
      }
    });
  };
  const handleClick = (event) => {
    console.log(numberOfErrors);
    setNumberOfErrors(numberOfErrors + 1);
  };
  const handleLetter = (ev) => {
    const pattern = new RegExp('^[a-zA-Z]+$');
    console.log(ev.target.value);
    if (pattern.test(ev.target.value) || ev.target.value === '') {
      setLastLetter(ev.target.value);
      if (ev.target.value !== '') {
        setUserLetters([...userLetters, ev.target.value]);
      }
    }
  };

  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <button onClick={handleClick}>Incrementar</button>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>

            <ul className='letters'>{renderSolutionLetters()}</ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              <li className='letter'>f</li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li>
            </ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              onChange={handleLetter}
              value={lastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
