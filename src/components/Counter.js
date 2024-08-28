import { useSelector, useDispatch} from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  //assegno ad una costante la funzione di dispatch
  const dispatch = useDispatch()

  //useSelector riceve una funzione con lo state dello store e accede a parte di esso, se avessi voluto l'intero store avrei usato useStore()
  //Per questo componente React-Redux eseguirà in automatico una subscription allo store, causando una ri-esecuzione della funzione al cambio dello state
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  //dispatch va effetuato sulla action il che significa che ho un oggetto con una proprietà type, alla quale assegno un valore come quelli definiti nello store
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" })
  };

  const increaseHandler = () => {
    dispatch({ type: "INCREASE",  payload: 5})
  }

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" })
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


//come lo scriverei usando un class component visto che non posso usare gli hooks??

//importa Component from 'react' e connect from 'react-redux'

/* class Counter extends Component {
  incrementHandler() {
    this.props.increment()
  }

  decrementHandler() {
    this.props.decrement()
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    increment: () => dispatch({type: "INCREMENT"}),
    decrement: () => dispatch({type: "DECREMENT"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); */



export default Counter;
