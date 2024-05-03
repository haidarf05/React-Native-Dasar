import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Operan from './Operan';

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sekolah: 'Tes1',
    };
  }
  gantiState() {
    this.setState({
      sekolah: 'Tes2',
    });
  }
  render() {
    const {sekolah} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar State & Props </Text>
        <View style={styles.garis} />

        {/* ISI */}
        <View style={styles.isi}>
          <Text>Ini Adalah State :{sekolah}</Text>
          <Operan sekolah={sekolah} />
          <TouchableOpacity
            style={styles.tombol}
            onPress={() => {
              this.gantiState();
            }}>
            <Text style={{textAlign: 'center'}}>Ganti State</Text>
          </TouchableOpacity>
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
  tombol: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
});
