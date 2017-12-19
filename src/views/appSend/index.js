import React, { Component } from 'react'
import {
    Dimensions,
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const { height, width } = Dimensions.get('window')

import Header from '../../components/header'
export default class AppDetail extends Component {
    state = {
        bColor: '#3498db',
        sendIcon: "send",
        sendText: " Uygulamayı Analize Gönder"
    }
    constructor(props) {
        super(props)
        this.SendAppUrl = this.SendAppUrl.bind(this)
    }
    SendAppUrl = (url) => {
        fetch('http://192.168.56.101/sites/index.php?command=' + url).then((res) => res.json()).then((res) => this.setState({
            bColor: '#2ecc71',
            sendIcon: "check",
            sendText: " Uygulama Analize Gönderildi."
        })).catch(() => this.setState({
            bColor: '#e74c3c',
            sendIcon: "times",
            sendText: " Uygulama Analize Gönderilemedi."
        }))
    }
    render() {
        const { icon, title, summary, url } = this.props.navigation.state.params
        return (
            <View>
                <Header name={title} />
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Image source={{ uri: 'https:' + icon }} style={{ height: 150, width: 150 }} />
                    <Text style={{ width: 150, padding: 10 }}> {summary}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => this.SendAppUrl(url)}
                    style={{ height: 50, backgroundColor: this.state.bColor, margin: 10, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}><Icon name={this.state.sendIcon} style={{ textAlign: 'center', color: 'white', fontSize: 18 }} /> {this.state.sendText}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}