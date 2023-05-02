/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import { App } from 'main';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
