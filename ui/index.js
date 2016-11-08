import createSaturnStore from 'saturn-framework/app/store';
import createApp from 'saturn-framework/app';

import count from './reducers/count';

// @TODO Remove this when window.__data is working.
const dehydratedState = __CLIENT__ ? JSON.parse(decodeURI(window.__APOLLO_STATE__)) : {}
console.log(dehydratedState)
const createStore = ({ client }) =>
  createSaturnStore({
    client, reducers: { count },
    state: dehydratedState,
  });

import routes from './routes';

createApp({ routes, createStore });
