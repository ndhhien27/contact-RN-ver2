import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'

export default function ContactImg(props) {
    const { name, size } = props

    // getBackgroundColor = () => (
    //     '#' + Math.floor(Math.random() * 16777215).toString(16)
    // )

    return (
        <Avatar
            title={name.charAt(0)}
            size={size}
            rounded
            overlayContainerStyle={{ backgroundColor: '#428AF8' }}
        />

    )
}