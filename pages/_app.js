import React from 'react';
import { WindowWidthProvider } from '../components/Context/WindowWidthContext';

const App = ({ Component, pageProps }) => (
  <WindowWidthProvider>
    <Component {...pageProps} />
  </WindowWidthProvider>
);

export default App;
