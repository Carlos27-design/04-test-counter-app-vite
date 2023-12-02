import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleSum = () => {
    // console.log(event);

    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleSum}>Incrementar +</button>
      <button onClick={handleSubtract}>Disminuir -</button>
      <button aria-label='btn-reset' onClick={handleReset}>
        Resetear
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
