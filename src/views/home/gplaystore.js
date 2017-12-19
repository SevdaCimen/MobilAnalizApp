import React, { Component } from 'react'
import {
    Dimensions,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
    View,
    ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { SearchBar, List, ListItem } from 'react-native-elements'
const { height, width } = Dimensions.get('window')

import Header from '../../components/header'
export default class Home extends Component {
    state = {
        data: [],
        search: ''
    }
    constructor(props) {
        super(props)
        this.SearchApi = this.SearchApi.bind(this)
        this.AppNavigate = this.AppNavigate.bind(this)
    }
    SearchApi = (text) => {
        fetch('http://192.168.1.104:3000?search=' + text).then((res) => res.json()).then((res) => {
            this.setState({ data: res, search: text })
        })
    }
    AppNavigate = (app) => {
        this.props.navigation.navigate('AppDetail', app)
    }
    render() {
        return (
            <View>
                <Header name="Google Play Store" />
                <TextInput
                    style={{
                        backgroundColor: 'rgba(230, 228, 228, 0.6)',
                        margin: 10,
                        marginBottom: 5,
                        borderRadius: 10,
                        borderColor: '#3498db',
                        borderWidth: 1
                    }}
                    onChangeText={(text) => this.SearchApi(text)}
                    placeholder='Google Play Store"dan Ara ' />

                <ScrollView>
                    <List containerStyle={{ marginBottom: 20 }}>
                        {
                            this.state.data.map((app, index) => (
                                <ListItem
                                    avatar={{ uri: 'https:' + app.icon }}
                                    key={index}
                                    title={app.title}
                                    onPress={() =>this.AppNavigate(app)}
                                />
                            ))
                        }
                    </List>
                </ScrollView>

            </View>
        )
    }
}