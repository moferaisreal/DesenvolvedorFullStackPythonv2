import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    secColor: string;
    bgColor: string;
    bgBtn: string;
    borderColor: string;
  }
}