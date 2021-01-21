import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {DeviceHeight, DeviceWidth, ios} from '../config/config_layout';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    if (username === 'magnus' && password === 'magnusaja') {
      navigation.dispatch(StackActions.replace('HomeScreen'));
    } else {
      Alert.alert('Please input correct username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{width: 100, height: 100, marginBottom: 20}}
        resizeMode="contain"
        source={require('../assets/splash_icon.png')}
      />
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="username"
          value={username}
          onChangeText={(e) => setUsername(e)}
          style={{paddingLeft: 10}, ios ? {paddingVertical: 10} : null}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(e) => setPassword(e)}
          style={{paddingLeft: 10}, ios ? {paddingVertical: 10} : null}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButtonContainer}
        onPress={() => validate()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textInputContainer: {
    paddingVertical: DeviceWidth * 0.005,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
  },
  loginButtonContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
    borderRadius: 10,
    width: '50%',
  },
  loginText: {textAlign: 'center', fontSize: 20},
});
