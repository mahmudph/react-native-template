import iconImage from 'assets/index';
import app_config from 'config/application.json';
import Routes from 'config/routes';
import {ApplictionTheme} from 'config/theme';
import {LogBox} from 'react-native';

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
export {environment, ConfigApp};
