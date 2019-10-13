import React, { useContext, useState, useEffect } from 'react'

import { SearchBar, ListItem } from 'react-native-elements';
import { SafeAreaView, FlatList, Text, Alert } from 'react-native';

import { ContactContext } from '../Contexts/ContactContext'
import ContactImg from '../components/ContactImg'
import { theme } from '../constants/theme'

import { removeAccents } from '../helpers/string'

export default function ContactList(props) {

  const { navigation } = props;
  const [search, setSearch] = useState('');

  const { contacts } = useContext(ContactContext)
  const [listContact, setListContact] = useState([])

  useEffect(() => {
    console.log('list')
    setListContact(contacts)
  }, [contacts])

  const handleSearch = text => {
    setSearch(prev => { return text })
    // if (!text) setListContact(prev => { return contacts })
    setListContact(prev => {
      return contacts.filter(contact => {
        let contactConverted = removeAccents(contact.name)
        return contactConverted.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      })
    })
  }


  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      titleStyle={{ fontSize: 24 }}
      bottomDivider={true}
      roundAvatar
      leftAvatar={<ContactImg name={item.name} size='medium' />}
      onPress={() => navigation.navigate('Contact', {
        contactInfo: item
      })}
      rightIcon={{
        name: 'phone',
        onPress: () => navigation.navigate('Call', {
          contactName: item.name
        }),
        color: theme.color.blue,
        size: 30
      }}
    />
  )

  return (
    <SafeAreaView>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={handleSearch}
        lightTheme
        value={search}
        platform='ios'
      />
      <FlatList
        data={listContact}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
}