import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {prettyNumber} from '../helpers';

export default function DetailRow({title, value, valueColor}) {
  return (
    <View style={styles.row}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={{color: valueColor}}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    rowTitle: {
        fontWeight: 'bold',
    }
})