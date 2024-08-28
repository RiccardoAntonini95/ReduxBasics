import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //assegno ad una costante la funzione di dispatch
  const dispatch = useDispatch()

  //useSelector riceve una funzione con lo state dello store e accede a parte di esso, se avessi voluto l'intero store avrei usato useStore()
  //Per questo componente React-Redux eseguirà in automatico una subscription allo store, causando una ri-esecuzione della funzione al cambio dello state
  const counter = useSelector(state => state.counter)

  //dispatch va effetuato sulla action il che significa che ho un oggetto con una proprietà type, alla quale assegno un valore come quelli definiti nello store
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" })
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" })
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
