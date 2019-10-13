import React, { useEffect, useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

import { Input } from 'react-native-elements'

import ContactImg from '../components/ContactImg'
import { ContactContext } from '../Contexts/ContactContext'
import { theme } from '../constants/theme'

export default function Contact(props) {
    const { navigation } = props
    const info = navigation.getParam('contactInfo')
    const { editContact } = useContext(ContactContext)
    const [prevContact, setPrevContact] = useState({ ...info })

    const onHadleChange = (name, value) => {
        setPrevContact(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSaveBtn = () => {
        setPrevContact(prev => {
            let obj = { ...prev }
            editContact(obj)
            return obj
        })
    }
    useEffect(() => {
        navigation.setParams({ btn: handleSaveBtn })
    }, [])
    return [
        <View key='1' style={{ alignItems: "center", marginTop: 16 }} >
            <ContactImg name={prevContact.name} size='large' />
        </View>,
        <View key='2' style={styles.container}>
            <Input
                label='name'
                labelStyle={{ fontSize: 20 }}
                defaultValue={prevContact.name}
                onChangeText={(text) => onHadleChange('name', text)}
                inputStyle={{
                    color: theme.color.blue,
                    fontSize: 28
                }}
            />
            <Input
                label='phone'
                labelStyle={{ fontSize: 20 }}
                defaultValue={prevContact.phone}
                onChangeText={(text) => onHadleChange('phone', text)}
                inputStyle={{
                    color: theme.color.blue,
                    fontSize: 28
                }}
                containerStyle={{ marginTop: 16 }}
            />
        </View>
    ]

}

Contact.navigationOptions = ({ navigation }) => ({
    title: 'Edit',
    headerRight: (
        <Button
            title='Save'
            onPress={() => { navigation.state.params.btn(); navigation.goBack() }}
        />
    )
})

const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 1,
        borderColor: 'black',
        fontSize: 32,
        marginBottom: 16,
        paddingBottom: 8
    },
    image: {
        width: 240,
        height: 240,
    },

    container: {
        marginTop: 16,
        paddingHorizontal: 16
    }
})