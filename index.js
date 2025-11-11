/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import splashSatu from './src/components/pages/splashSatu';
import {name as appName} from './app.json'; // ✅ tambahkan ini

AppRegistry.registerComponent(appName, () => splashSatu);
