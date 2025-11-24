/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import splashSatu from './src/components/pages/splashSatu';
//import splashDua from './src/components/pages/splashDua';
//import homepage from './src/components/pages/homepage';
import editprofil from './src/components/pages/editprofil';
import {name as appName} from './app.json'; 

AppRegistry.registerComponent(appName, () => editprofil);
