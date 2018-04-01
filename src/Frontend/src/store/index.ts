import * as Router from 'react-router-dom';
import * as ReduxRouter from 'react-router-redux';

export interface ApplicationState {
    routing: Router.RouteProps;
}

export const reducers = {
    routing: ReduxRouter.routerReducer
};

export interface ThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
