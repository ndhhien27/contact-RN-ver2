import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
import { Button } from 'react-native'

import ContactList from './app/screens/ContactList';
import Contact from './app/screens/Contact';
import AddContact from './app/screens/AddContact';
import CallScreen from './app/screens/CallScreen';

const AppNavigator = createStackNavigator({
    Home: {
        screen: ContactList,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('AddContact')}
                    title="Add"
                />
            )
        })
    },
    Contact: Contact,
    AddContact: AddContact,
    Call: CallScreen
})

// const CallStack = createStackNavigator({
//     Call: {
//         screen: CallScreen
//     }
// })

// const AppNavigator = createStackNavigator({
//     Home: HomeStack
// })

export default AppNavigator