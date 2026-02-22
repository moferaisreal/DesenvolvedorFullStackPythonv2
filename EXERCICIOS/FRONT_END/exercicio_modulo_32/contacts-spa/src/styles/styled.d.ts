import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      card: string;

      primary: string;
      secondary: string;
      accent: string;

      danger: string;
      success: string;

      textPrimary: string;
      textSecondary: string;
      textButton: string;
    };
  }
}
