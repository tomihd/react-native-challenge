import React from 'react'
import { View } from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Home from '../src/Home/Home';
import Feed from '../src/Feed/Feed';
import Item from '../src/Item/Item';

export const NavigationStack = StackNavigator(
    {
        Login: {
            screen: Home
        },
        Home: {
            screen: HomeStack 
        }
    }
);

// StackNavigation que contiene la pantalla de Tabs
const HomeStack = StackNavigator(
    {
    News: {
        screen: Feed
    },
    ItemDetails: {
        screen: Item
    },
    Drawer: {
        screen: DrawerNav
    }
    },
    {
        initialRouteName: 'News',
    }
);

const DrawerNav = DrawerNavigator({
    Settings: {
        screen: Settings,
    }
  });