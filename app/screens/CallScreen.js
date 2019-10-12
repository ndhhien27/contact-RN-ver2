import React, { useState } from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import { Icon } from 'react-native-elements'

import { theme } from '../constants/theme'
import { SwitchBtn } from '../components/base_components/SwitchBtn'
import ContactImg from '../components/ContactImg'

export default function CallScreen(props) {

  const [mute, setMute] = useState(false)
  const [speaker, setSpeaker] = useState(true)


  const { navigation } = props
  const name = navigation.getParam('contactName')
  return (
    <SafeAreaView style={{
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 30,
      flex: 1
    }}>
      <View style={{ alignItems: 'center' }}>
        <ContactImg name={name} size='large' />
        <Text style={{ fontSize: 30, marginVertical: 16 }}>{name}</Text>
        <Text style={{ fontSize: 20, color: theme.color.gray }}>Calling...</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
        <SwitchBtn
          name='microphone-off'
          state={mute}
          onPress={() => setMute(prev => { return !mute })}
          title='Mute'
        />
        <SwitchBtn
          name='volume-high'
          state={speaker}
          onPress={() => setSpeaker(prev => { return !speaker })}
          title='Speaker'
        />
      </View>

      <Icon
        type='material-community'
        name='phone-hangup'
        color='#fff'
        size={50}
        containerStyle={{
          backgroundColor: 'red',
          width: 70,
          height: 70,
          borderRadius: 35,
          justifyContent: 'center'
        }}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  )
}