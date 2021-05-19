import darkTheme from '../themes/dark';

type CustomTheme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}