import React, { useEffect, useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

import man from '../assets/man.png'
import ContactImg from '../components/ContactImg'
import { ContactContext } from '../Contexts/ContactContext'

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
        alert('DONE')
    }
    useEffect(() => {
        navigation.setParams({ btn: handleSaveBtn })
    }, [])
    return [
        <View key='1' style={{ alignItems: "center", marginTop: 16 }} >
            <ContactImg name={prevContact.name} size='xlarge' />
        </View>,
        <View key='2' style={styles.container}>
            <TextInput
                defaultValue={prevContact.name}
                style={styles.textInput}
                onChangeText={(text) => onHadleChange('name', text)}
            />
            <TextInput
                defaultValue={prevContact.phone}
                style={styles.textInput}
                onChangeText={(text) => onHadleChange('phone', text)}
            />
        </View>
    ]

}

Contact.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('contactName'),
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