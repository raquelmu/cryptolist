import React, { useEffect, useState, useContext } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { MainContext } from '../context/main';
import constants from '../constants';
import { Ionicons } from '@expo/vector-icons';
import CoinCard from '../components/CoinCard';
import { prettyNumber } from '../helpers';
import * as Linking from 'expo-linking';
import DetailRow from '../components/DetailRow';


export default function SingleScreen({ route, navigation }) {
  const {cryptos, marketGains, isLoading, setCryptos} = useContext(MainContext);
  const { coin } = route.params;

  if(isLoading){
      return (<View></View>)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: "center"}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" style={{marginRight: 10}}/>
          </TouchableOpacity>
          <CoinCard coin={coin} style={{flexGrow: 1}}/>
        </View>

        <View style={styles.detailedStats}>
          <DetailRow title="Rank" value={coin.cmc_rank} />
          <DetailRow 
            title="Max Supply" 
            value={!coin.max_supply ? "Infinite" : prettyNumber(coin.max_supply)}
          />
          <DetailRow 
            title="Circulating Supply" 
            value={prettyNumber(coin.circulating_supply)}
          />
          <DetailRow 
            title="Volume 24h" 
            value={`$${prettyNumber(coin.quote.USD.volume_24h)}`}
          />
          <DetailRow 
            title="Percent change 1h" 
            value={`${coin.quote.USD.percent_change_1h.toFixed(2)}%`}
            valueColor={coin.quote.USD.percent_change_1h > 0 ? "green" : "red"}
          />
          <DetailRow 
            title="Percent change 24h" 
            value={`${coin.quote.USD.percent_change_24h.toFixed(2)}%`}
            valueColor={coin.quote.USD.percent_change_24h > 0 ? "green" : "red"}
          />
          <DetailRow 
            title="Percent change 7d" 
            value={`${coin.quote.USD.percent_change_7d.toFixed(2)}%`}
            valueColor={coin.quote.USD.percent_change_7d > 0 ? "green" : "red"}
          />
          <DetailRow 
            title="Percent change 30d" 
            value={`${coin.quote.USD.percent_change_30d.toFixed(2)}%`}
            valueColor={coin.quote.USD.percent_change_30d > 0 ? "green" : "red"}
          />
          <DetailRow 
            title="Percent change 60d"
            value={`${coin.quote.USD.percent_change_60d.toFixed(2)}%`}
            valueColor={coin.quote.USD.percent_change_60d > 0 ? "green" : "red"}
          />
        </View>

        <TouchableOpacity style={styles.buyButton} onPress={() => Linking.openURL('https://coinbase.com/join/ZIXBAM')}>
          <Text style={styles.buyButtonText}>Buy {coin.name}</Text>
        </TouchableOpacity>
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
  detailedStats: {
      marginTop: 20,
      backgroundColor: '#efeffe',
      padding: 20,
      borderRadius: 10,
      display: 'flex',
  },
  buyButton: {
      backgroundColor: '#00a8ff',
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,        
  },
  buyButtonText: {
      color: '#fff',
      fontWeight: 'bold',
  }
});