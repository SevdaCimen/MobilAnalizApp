import React from 'react';
import { DrawerNavigator } from 'react-navigation'

import Splash from './splash'
import Home from './home/index'
import GPlayStore from './home/gplaystore'
import AppDetail from './appSend/index'

export default MainNavigatior = DrawerNavigator({
    Splash: { screen: Splash },
    Home: { screen: Home },
    GPlayStore: { screen: GPlayStore },
    AppDetail: { screen: AppDetail },
})