import * as React from 'react';
import { MainContextProvider } from './src/context/main';
import Navigation from './src/navigation';


export default function App() {
  return (
    <MainContextProvider>
      <Navigation />
    </MainContextProvider>
  );
}
