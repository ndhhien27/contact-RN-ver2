import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

import ContactImg from './ContactImg'

import man from '../assets/man.png';
import phone from '../assets/telephone.png';

export default function ContactListItem(props) {

    const { contact, onPress } = props
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
        >
            <View style={styles.container}>
                <ContactImg name={contact.name} style={{ width: 36, height: 36 }} />
                <Text style={styles.text} numberOfLines={1}>{contact.name}</Text>
                <Image source={phone} style={{ width: 16, height: 16, marginLeft: 16 }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 8,
        flexDirection: 'row',
        borderBottomColor: '#c9d6df',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 4
    },
    image: {
        width: 48,
        height: 48
    },
    text: {
        marginHorizontal: 8,
        fontSize: 24,
        fontWeight: '400',
        width: 240,
        marginLeft: 16,
        flex: 1
    }
})