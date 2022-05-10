import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import RouterPages from './Routes/RouterPages';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


//init state
const globalState = {
    people : '4 orang',
    tipe : 'Manual',
    year : 'Tahun 2020',
    status : 'Pilih mobil',
    data : [],
}

//reducer functions
const rootReducer = (state = globalState,action) => {
    console.log(state);
    if(action.type === 'CHANGE_STATUS'){
        if(action.status === 1){
            return {
                ...state,
                status: 'Lanjutkan Pembayaran'
            }
        }else{
            return {
                ...state,
                status: 'Pilih mobil'
            }
        }
    }else if(action.type === 'FETCH_DATA'){
        return {
            ...state,
            data : action.payload
        }
    }

    return state;
}

const store = createStore(rootReducer,applyMiddleware(thunk));

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App/> */}
   
//     <Home/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterPages/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
