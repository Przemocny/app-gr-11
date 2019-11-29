import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

// new way
import { configureStore } from '@reduxjs/toolkit'
import reducer from './stores/new_store';
import reducerPosts from './stores/async_store';

const store = configureStore({
    reducer: { bigGlobalStore: reducer, 
        posts:reducerPosts }
})

// old way
// import { countReducer } from './stores/old_store';
// import { combineReducers, createStore } from 'redux';

// const mainReducer = combineReducers({
//     bigGlobalStore: countReducer
// })

// const store = createStore(mainReducer)

const ReduxApp = ()=>{
    return (<Provider store={store}>
            <App/>
        </Provider>)
}

render(
    <ReduxApp/>,
    document.getElementById('root')
)

