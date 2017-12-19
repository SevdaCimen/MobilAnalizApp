import React, { Component } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


export default class App extends Component<{}> {
  componentDidMount(){
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/img/img1.png')} />
        <Text style={styles.welcome}>
           Güvenlik Analizi
        </Text>
        <Text style={styles.instructions}>
          Mobil Uygulama
        </Text>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize:10,
    marginBottom: 5,
  },
});

