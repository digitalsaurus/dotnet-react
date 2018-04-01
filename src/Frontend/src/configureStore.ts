import {
  createStore, 
  applyMiddleware, 
  compose, 
  combineReducers, 
  Store
} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { ApplicationState, reducers } from './store';
import { History } from 'history';

export default function configureStore(history: History, initialState?: ApplicationState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, routerMiddleware(history))
  )(createStore);

  const allReducers = combineReducers<ApplicationState>(reducers);

  const store = createStoreWithMiddleware(allReducers, initialState) as Store<ApplicationState>;
  return store;
}
