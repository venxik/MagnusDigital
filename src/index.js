import React, {useEffect} from 'react';
import Route from './pages/Route';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import RootReducers from './redux/reducers';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['reading_list'],
};
const persistReducers = persistReducer(persistConfig, RootReducers);
const store = createStore(persistReducers, applyMiddleware(thunk));
const persist = persistStore(store);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
          <Route />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;
