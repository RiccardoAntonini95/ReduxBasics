import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//per utilizzare lo store importo il provider e lo uso come wrapper all'intera app (o dove serve) e assegno una prop store al provider con il nostro store
//così facendo App e tutti i suoi child component posso accedere allo store e possono fare subscription e dispatch 
root.render(<Provider store={store}><App /></Provider>);

