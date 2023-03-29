import { FC, useState } from 'react';
import { ThemeContext } from './contexts/theme-context';
import Layout from './layout';
import moon from './images/moon.png';
import sun from './images/sun.png';

import './styles/main.scss';

function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Layout>
          Hi
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
