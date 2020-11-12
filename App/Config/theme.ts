import {DefaultTheme} from '@react-navigation/native';

/* 
@ theme configuration
@ created by mahmud 
*/
/* custom color for navigation  */
const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#CC658A',
    secondary: '#4FACF7',
  },
};

/* application theme  */
const ApplictionTheme = {
  primary: '#CC658A',
  secondary: '#4FACF7',
};

export {NavigationTheme, ApplictionTheme};
