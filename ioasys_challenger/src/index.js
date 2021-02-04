import React from 'react';
import {View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

import {store, persistor} from '~/store';

import {Primary} from '~/helpers/palette';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor={Primary.Blue} />
          <View style={{flex: 1, backgroundColor: '#000'}}>
            <Routes />
          </View>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
