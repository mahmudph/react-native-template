import {ConfigApp} from 'config';

type props_screen = {
  [ConfigApp.Routes.SPLASHSCREEN]: undefined;
  [ConfigApp.Routes.HOME]: {
    screen_id: number;
  };
};

export default props_screen;
