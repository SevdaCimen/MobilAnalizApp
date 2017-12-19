import React, { Component } from 'react'
import { Text, StatusBar, StyleSheet, View } from 'react-native';

export default class Header extends Component{
    render(){
        const { name } = this.props
        return(
            <View style={styles.toolbar}>
                <StatusBar backgroundColor='#34495e' />
                <Text style={styles.toolbarButton}></Text>
                <Text style={styles.toolbarTitle}>{name}</Text>
                <Text style={styles.toolbarButton}></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbar:{
        paddingTop:10,
        backgroundColor:'#34495e',
        paddingBottom:10,
        flexDirection:'row',
        marginBottom:10,
    },
    toolbarButton:{
        width:50,
        textAlign:'center'
    },
    toolbarTitle:{
        textAlign:'center',
        fontWeight:'bold',
        flex:1,
        color:'white',
        fontSize:20
    }
})