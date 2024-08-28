import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

//configureStore si aspetta un oggetto con una proprietà reducer in cui andiamo a definire quali action dello slice creato useremo per il nostro store
//nel caso di multipli slice possiamo usare un oggetto come valore di reducer
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export default store
