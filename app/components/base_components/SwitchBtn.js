import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import { theme } from '../../constants/theme'

export function SwitchBtn(props) {

  const { name, state, onPress, title } = props
  return (
    <View style={{ alignItems: 'center' }}>
      <Icon
        type='material-community'
        name={name}
        color={state ? theme.color.blue : theme.color.gray}
        size={50}
        containerStyle={{
          borderColor: state ? theme.color.blue : theme.color.gray,
          borderWidth: 2,
          width: 70,
          height: 70,
          borderRadius: 35,
          justifyContent: 'center'
        }}
        onPress={onPress}
      />
      <Text
        style={styles(props).text}
      >{title}</Text>
    </View>
  )
}

const styles = (props) => StyleSheet.create({
  text: {
    color: props.state ? theme.color.blue : theme.color.gray,
    fontSize: 18,
    marginTop: 8
  }
})