import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'store',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = preloadedState => createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
);

let store = configureStore({});
let persistor = persistStore(store);

const exportStorage = { store, persistor };

sagaMiddleware.run(rootSaga);

export default exportStorage;
