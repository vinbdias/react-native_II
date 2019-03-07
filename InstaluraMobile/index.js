/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Login from './src/screens/Login';
import Feed from './src/components/Feed';

AppRegistry.registerComponent(appName, () => Login);
