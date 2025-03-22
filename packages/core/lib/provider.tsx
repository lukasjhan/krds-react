import React, { useState } from 'react';
import { DefaultPrimitiveToken } from './colors/color-type';

export type ThemeMode = 'light' | 'dark' | 'high-contrast' | 'system';

export type PrimitiveToken = {
  [key in keyof typeof DefaultPrimitiveToken]: string;
};

export type SemanticToken = {};

export type ComponentToken = {};

export type Locale = 'ko' | 'en';

export type TextSize = 'small' | 'medium' | 'large';

export type DesignToken = {
  primitive: PrimitiveToken;
  semantic: SemanticToken;
  component: ComponentToken;
};

export type DesignTokenProps = {
  primitive?: Partial<PrimitiveToken>;
  semantic?: Partial<SemanticToken>;
  component?: Partial<ComponentToken>;
};

export type ContextProps = {
  token: DesignToken;
  mode: ThemeMode;
  locale: Locale;
  textSize: TextSize;

  setThemeMode: (mode: ThemeMode) => void;
  setLocale: (locale: Locale) => void;
  setTextSize: (textSize: TextSize) => void;
};

export const Context = React.createContext<ContextProps>({} as ContextProps);

export const ContextProvider: React.FC<{
  token: DesignTokenProps;
  mode?: ThemeMode;
  locale?: Locale;
  textSize?: TextSize;
  children: React.ReactNode;
}> = ({ token, mode, locale, textSize, children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(mode || 'system');
  const [contextLocale, setLocale] = useState<Locale>(locale || 'ko');
  const [contextTextSize, setTextSize] = useState<TextSize>(
    textSize || 'medium',
  );

  const changeTheme = (mode: ThemeMode) => {
    switch (mode) {
      case 'system': {
        // get system theme
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'high-contrast'
          : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme);
        break;
      }

      case 'dark':
      case 'high-contrast': {
        document.documentElement.setAttribute('data-theme', 'high-contrast');
        break;
      }

      case 'light': {
        document.documentElement.setAttribute('data-theme', 'light');
        break;
      }
    }
    setThemeMode(mode);
  };

  const context: ContextProps = {
    token: {
      primitive: { ...DefaultPrimitiveToken, ...token.primitive },
      semantic: { ...token.semantic },
      component: { ...token.component },
    },
    mode: themeMode,
    locale: contextLocale,
    textSize: contextTextSize,
    setThemeMode: changeTheme,
    setLocale: (locale) => setLocale(locale),
    setTextSize: (textSize) => setTextSize(textSize),
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useContext = () => {
  return React.useContext(Context);
};

export default ContextProvider;
