import {LogBox} from 'react-native';
import Routes from './routes';
import iconImage from 'appAssets';
import {width, height} from './layout';
import app_config from './application.json';
import {ApplictionTheme, NavigationTheme} from './theme';

/* config by environment  */
type IenvironmentTipe = 'development' | 'production';

//@ts-ignore
const current_environment: IenvironmentTipe = app_config.application_mode;

/* configuration for dealing error */
if (current_environment === 'development') {
  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested',
    'Non-serializable values were found in the navigation state',
  ]);
} else if (current_environment === 'production') {
  LogBox.ignoreAllLogs();
}

/* setting configuration environment  */
const environment = {
  app_menu: app_config.application_menu,
  env: app_config.env[current_environment],
  theme: ApplictionTheme,
  Routes: Routes,
  iconApp: iconImage?.logo,
};

/* config used for whole app */
const ConfigApp = {
  Routes: Routes,
  theme: ApplictionTheme,
  env: app_config.env[current_environment],
  iconApp: iconImage?.logo,
};

/* export it  */
export {environment, NavigationTheme, ConfigApp, width, height};
export {default as Routes} from './routes';
