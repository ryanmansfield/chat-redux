// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Reducers
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/slected_channel_reducer';


const initialState = {
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['general', 'react', 'chicago'],
  currentUser: prompt('What is your username?') || `anonymous${Math.floor(10+ (Math.random() * 90))}`,
  selectedChannel:'general'
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {initialState})}>
    <App />
  </Provider>,
  document.getElementById('root')
);
