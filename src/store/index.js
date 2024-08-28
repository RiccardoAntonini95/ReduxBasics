import { createStore } from "redux";
//inizializzo il counter a zero di default nello state così al primo render non mi dà undefined
const counterReducer = (state = {counter : 0}, action) => {
    if(action.type === "INCREMENT"){
        return{
            counter: state.counter + 1
        }
    }

    if(action.type === "DECREMENT"){
        return{
            counter: state.counter - 1
        }
    }

    return state
}

const store = createStore(counterReducer)

export default store