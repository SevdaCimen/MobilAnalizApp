import React,{Component} from 'react'
import {
    Dimensions,
    TouchableOpacity,
    Text,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const { height,width } = Dimensions.get('window')

import Header from '../../components/header'
export default class Home extends Component{
    render(){
        return(
            <View>
                <Header name="Analiz" />
                
                <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('GPlayStore')}
                 style={{height:height/4,backgroundColor:'#3498db', margin:10,justifyContent:'center'}}>
                <Icon name="play" style={{textAlign:'center',color:'#2ecc71',fontSize:32}} /><Text style={{textAlign:'center',color:'white',fontSize:24}}>Google Play Store'dan Ara</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{height:height/4,backgroundColor:'#2c3e50', margin:10,justifyContent:'center'}}>
                <Icon name="file" style={{textAlign:'center',color:'white',fontSize:32}} /><Text style={{textAlign:'center',color:'white',fontSize:24}}>Uygulama Dosyası Yükle</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{height:height/4,backgroundColor:'#95a5a6', margin:10,justifyContent:'center'}}>
                <Icon name="list" style={{textAlign:'center',color:'white',fontSize:32}} /><Text style={{textAlign:'center',color:'white',fontSize:24}}>Önceki Analiz Sonuçları</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}