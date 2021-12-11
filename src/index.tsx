import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', (schema, request) => {
      return [
        {
          id: 1,
          title: 'Hamburger',
          amount: -100,
          type: 'withdraw',
          date: '2020-01-01',
          category: 'Food',
        },
        {
          id: 2,
          title: 'Salary',
          amount: 5000,
          type: 'deposit',
          date: '2020-01-01',
          category: 'Salary',
        }
      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
