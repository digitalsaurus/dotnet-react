import { createStore, applyMiddleware, compose, combineReducers, GenericStoreEnhancer, Store, StoreEnhancerStoreCreator, ReducersMapObject } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as StoreModule from './store';
import { ApplicationState, reducers } from './store';
import { History } from 'history';

export default function configureStore(history: History, initialState?: ApplicationState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    // If devTools is installed, connect to it
    const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension as () => GenericStoreEnhancer;
    const createStoreWithMiddleware = compose(
        applyMiddleware(thunk, routerMiddleware(history)),
        devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next
    )(createStore);

    // Combine all reducers and instantiate the app-wide store instance
    const allReducers = buildRootReducer(reducers);
    console.log(initialState);
    
    const store = createStoreWithMiddleware(allReducers, initialState) as Store<ApplicationState>;

    return store;
}

function buildRootReducer(allReducers: ReducersMapObject) {
    return combineReducers<ApplicationState>(Object.assign({}, allReducers, { routing: routerReducer }));
}
