import React from "react";

const ThemeContext = React.createContext({
    light: {
    foreground: '#000000',
    background: '#eeeeee',
    },
    dark: {
    foreground: '#ffffff',
    background: '#222222',
    },
    setTheme: () => {}
  });


export default ThemeContext;