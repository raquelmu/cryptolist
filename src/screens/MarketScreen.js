import React, { useEffect, useState, useContext } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import { MainContext } from '../context/main';
import constants from '../constants';
import { Ionicons } from '@expo/vector-icons';
import CoinCard from '../components/CoinCard';


export default function MarketScreen({navigation}) {
  const {cryptos, marketGains, isLoading} = useContext(MainContext);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredCryptos(cryptos);
  }, [cryptos]);

  const onChangeText = (text) => {
    setSearch(text);
    let copyCryptos = [...cryptos];
    copyCryptos = copyCryptos.filter(crypto => crypto.name.toLowerCase().includes(text.toLowerCase()));
    console.log(copyCryptos);
    setFilteredCryptos(copyCryptos);
  }

  if(isLoading){
    return (<View></View>)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            {marketGains &&
              <>
                <View testID="title-header">
                  <Text style={styles.titleSmall}>in the past 24h</Text>
                  <Text style={styles.title}>Market is {marketGains > 0 ? "up" : "down"}</Text>
                </View>
                <View>
                  <Text style={{fontSize: 16, color: marketGains > 0 ? "green" : "red"}}>{marketGains.toFixed(2)}%</Text>
                </View>
              </>
            }
          </View>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={24} color={"#7cb342"} />
            <TextInput
              style={styles.searchInput}
              value={search}
              onChangeText={(text) => onChangeText(text)}
            ></TextInput>
          </View>
          {filteredCryptos ?
            <>
              {filteredCryptos.map((crypto, index) => {
                return (
                  <CoinCard 
                    coin={crypto} 
                    key={index}
                    onPress={() => {
                      navigation.navigate('Single', {coin: crypto});
                    }}
                  />
                )
              })}
            </>
          :
            <Text style={{textAlign: 'center', marginTop: 40}}>No results</Text>
          }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchBar: {
    backgroundColor: '#eee',
    borderRadius: 8,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  searchInput: {
    height: 40,
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleSmall: {
    fontSize: 14,
    color: "#ccc"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  }
});
