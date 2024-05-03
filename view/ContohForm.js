import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Touchable,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default class ContohForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  gantiState() {
    this.setState({
      username: '',
      password: '',
      isLogin: false,
    });
  }
  login = () => {
    if (!this.state.username || !this.state.password) {
      Alert.alert('Error', 'Usename dan Password tidak boleh kosong');
    } else {
      this.setState({
        isLogin: true,
      });
    }
  };
  render() {
    const {username, password, isLogin} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar Membuat Form </Text>
        <View style={styles.garis} />

        {/* ISI */}
        <View style={styles.wrapperInput}>
          <Text>Username :</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukan Username"
            value={username}
            onChangeText={username => this.setState({username})}></TextInput>
        </View>
        <View style={styles.wrapperInput}>
          <Text>password :</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Masukan Password"
            value={password}
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}></TextInput>
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            this.login();
          }}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
        {isLogin && (
          <Text style={{marginTop: 30}}>Selamat Datang {username}</Text>
        )}
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
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
    borderRadius: 5,
    height: 40,
  },
  wrapperInput: {
    marginTop: 10,
  },
  Button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
