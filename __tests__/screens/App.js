import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent, waitFor, act, cleanup } from '@testing-library/react-native';
import constants from '../constants'
import Navigation from '../../src/navigation';
import MarketScreen from '../../src/screens/MarketScreen';
import { MainContextProvider } from '../../src/context/main';

// TODO: Acabar el test
describe('Testing react screens', () => {
  it.skip('Test if its mounted correctly', async () => {
    const {queryByTestId, getByTestId, toJSON } = render(
      <MainContextProvider 
        cryptos={constants.listings} 
        marketGains={9} 
        isLoading={false} 
        theme="light" 
        setTheme={() => console.log()} 
        setCryptos={()=>console.log()}
      >
        <MarketScreen />
      </MainContextProvider>
    );
    await waitFor(() => expect(queryByTestId('title-header')).toBeTruthy())
    console.log(toJSON())
  });
});