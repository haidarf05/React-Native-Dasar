import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class DesignTampilan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar Desain Tampilan & Flexbox </Text>
        <View style={styles.garis} />

        {/* ISI */}
        <View style={styles.isi}>
          <Text>Flex Direction FLow (Vertical)</Text>
          <View style={styles.flexVertical}>
            <View style={styles.kotakMerah} />
            <View style={styles.kotakKuning} />
            <View style={styles.kotakHijau} />
          </View>
        </View>

        <View style={styles.isi}>
          <Text>Flex Direction Column (Horizontal)</Text>
          <View>
            <View style={styles.kotakMerah} />
            <View style={styles.kotakKuning} />
            <View style={styles.kotakHijau} />
          </View>
          <Text>Justify Content</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.kotakMerah} />
            <View style={styles.kotakKuning} />
            <View style={styles.kotakHijau} />
          </View>
          <Text>Align Item</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.kotakMerah} />
            <View style={styles.kotakKuning} />
            <View style={styles.kotakHijau} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 30},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  garis: {
    borderBottomWidth: 1,
    marginTop: 10,
  },
  isi: {
    marginTop: 10,
  },
  flexVertical: {
    flexDirection: 'row',
  },
  kotakMerah: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
  kotakHijau: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
  },
  kotakKuning: {
    width: 80,
    height: 50,
    backgroundColor: 'yellow',
  },
});
