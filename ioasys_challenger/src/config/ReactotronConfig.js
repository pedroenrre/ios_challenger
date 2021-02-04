import Reactotron from 'reactotron-react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

const tron = Reactotron.configure().useReactNative().connect();

tron.clear();

console.tron = tron;
