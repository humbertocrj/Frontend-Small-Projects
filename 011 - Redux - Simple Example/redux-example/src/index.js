import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'


//Reducers,a function that always has two parameters state and action
const counter =(state, action)=>{
  switch(action.type){
    case 'INCREMENT':
      return {count:state.count+2, payload:"data"}
    case 'DECREMENT':
      return state-1
    default:
      return state
  }
}

//Store - concentrate all states
const initialState = {
  count:3
}

const store = createStore(
  counter,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  // const {count} = store.getState()
  const state = store.getState()

  // store.subscribe(()=>{console.log(count)})
  store.subscribe(()=>{console.log(state.count)})

  store.dispatch(increment())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
