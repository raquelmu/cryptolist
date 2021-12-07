import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import constants from '../constants';
import {prettyNumber} from '../helpers';

export default function CoinCard({coin, onPress, style}){
    
    return (
        <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
            <View style={{flexDirection: "row"}}>
                {/* Si tiene "platform" no es blockchain sino token */}
                {coin.platform ?
                    <Image 
                        source={{uri: `${constants.S3_BUCKET}/icons/black/${coin.platform.symbol.toLowerCase()}.png`}} 
                        style={styles.cryptoIcon}
                    />
                :
                    <Image 
                        source={{uri: `${constants.S3_BUCKET}/icons/color/${coin.symbol.toLowerCase()}.png`}} 
                        style={styles.cryptoIcon}
                    />
                }
                <View>
                    <Text>{coin.symbol}</Text>
                    <Text>{coin.name}</Text>
                </View>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>${prettyNumber(coin.quote.USD.price)}</Text>
                <Text style={{color: coin.quote.USD.percent_change_24h > 0 ? "green" : "red"}}>
                    {coin.quote.USD.percent_change_24h.toFixed(2)}%
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#efefef",
        borderBottomWidth: 1,
        borderStyle: "solid",
        paddingVertical: 10,
    },
    price: {
        fontWeight: "bold",
    },
    cryptoIcon: {
        height: 40,
        width: 40,
        marginRight: 10,
    },
    priceContainer: {
        justifyContent: "center",
        alignItems: "flex-end"
    }
})