import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/App';
import store from '../client/store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store}/>, div);
});