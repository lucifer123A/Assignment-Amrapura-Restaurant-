import React from 'react';
import Main from './components.js/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/ConfigureStore';

function App() {
  const store= ConfigureStore();
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div>
      <Main/>
    </div>
    </BrowserRouter>
    </Provider>
  );
}


export default App;
