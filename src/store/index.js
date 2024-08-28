import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = {
    counter: 0,
    showCounter: true
}

const initialAuthState = {
    isAuth: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++ 
            //anche se sto modificando direttamente lo state invece di crearne uno nuovo e sovrascrivere come ho fatto sotto, redux toolkit tramite l'utilizzo
            //interno di un altro pacchetto di nome imgur, in automatico clona lo state esistente, ne crea uno nuovo e lo sovrascrive in modo immutabile
            //quindi anche se non si potrebbe fare, posso scrivere modifiche dirette perchè la libreria se ne occupa per me
        },
        //se necessario possiamo accettare anche la action in ingresso, per sfruttare dati extra che ci vengono passati, ad esempio qua per aumentare di 5
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrement(state) {
            state.counter--
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers:{
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        }
    }
})

//configureStore si aspetta un oggetto con una proprietà reducer in cui andiamo a definire quali action dello slice creato useremo per il nostro store
//nel caso di multipli slice possiamo usare un oggetto come valore di reducer
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

//createSlice in automatico ci fornisce le action con unique identifier, senza doverle definire prendendole da counterSlice.reducers, 
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions


export default store




//ESEMPIO REDUX SENZA LIBRERIA TOOLKIT

//inizializzo il counter a zero di default nello state così al primo render non mi dà undefined
/*
import { createStore } from "redux";

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


    const store = createStore(counterReducer)
} */