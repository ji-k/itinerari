import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/modal';
import { getItineraries, postItinerary } from './store/itineraries'

const store = configureStore();

// for testing purposes
if (process.env.NODE_ENV === 'development') {
  window.dispatch = store.dispatch;
  window.getItineraries = getItineraries;
  window.postItinerary = postItinerary;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
