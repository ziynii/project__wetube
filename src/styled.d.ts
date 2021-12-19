import 'styled-components';

declare module 'styled-component' {
  export interface DefaultTheme {
    accentColor: string;
    bgColor: string;
    mainTextColor: string;
    subTextColor: string;
  }
}
