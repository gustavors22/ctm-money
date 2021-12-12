import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Hamburger',
          amount: -100,
          type: 'withdraw',
          date: new Date('2020-01-01'),
          category: 'Food',
        },
        {
          id: 2,
          title: 'Salary',
          amount: 5000,
          type: 'deposit',
          date: new Date('2020-01-01'),
          category: 'Salary',
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody).transactionInput;

      const newTransaction = {
        ...data,
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        date: Date.now(),
      }

      return schema.create('transaction', newTransaction);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
