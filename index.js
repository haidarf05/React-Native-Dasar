/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './view/App';
import {name as appName} from './app.json';
import CoreComponent from './view/CoreComponent';
import DesignTampilan from './view/Tampilan';
import StateProps from './view/StateProps';
import ContohForm from './view/ContohForm';
AppRegistry.registerComponent(appName, () => ContohForm);
