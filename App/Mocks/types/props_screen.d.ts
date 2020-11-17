import {ConfigApp} from 'appConfig';

declare type props_screen = {
  [ConfigApp.Routes.SPLASHSCREEN]: undefined;
  [ConfigApp.Routes.HOME]: {
    screen_id: number;
  };
};
