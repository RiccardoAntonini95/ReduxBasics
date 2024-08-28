import { createStore } from "redux";
const initialState = {
    counter: 0,
    showCounter: true
}

//inizializzo il counter a zero di default nello state così al primo render non mi dà undefined
const counterReducer = (state = initialState, action) => {
    if(action.type === "INCREMENT"){
        return{
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === "INCREASE"){
        return{
            counter: state.counter + action.payload,
            showCounter: state.showCounter
        }
    }

    if(action.type === "DECREMENT"){
        return{
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === "TOGGLE"){
        return{
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state
}

const store = createStore(counterReducer)

export default store