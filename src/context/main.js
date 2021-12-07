import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

const MainContext = createContext();

function MainContextProvider({children}) {
    const [isLoading, setIsLoading] = useState(true);
    const [marketGains, setMarketGains] = useState(false);
    const [cryptos, setCryptos] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get('https://crypto.raquelmuniesa.com/v1/cryptocurrency/listings/latest');
            const responseData = response.data.data;
            setCryptos(responseData);
            
            // No es lo mismo las ganancias de BTC con una cuota de mercado del 45% que una que tenga un 1%
            let gains = 0;
            for(let i = 0; i < responseData.length; i++) {
                let quote = responseData[i].quote.USD;
                let result = (quote.percent_change_24h * quote.market_cap_dominance) / 100;
                gains += result;
            }

            setMarketGains(gains)
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <MainContext.Provider value={{ isLoading, cryptos, marketGains, theme, setTheme, setCryptos}}>
            {children}
        </MainContext.Provider>
    );
}

export { MainContext, MainContextProvider };