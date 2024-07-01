import { createStore } from 'redux';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store with persisted reducer and DevTools extension
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };
