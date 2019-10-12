import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';
export const ContactContext = createContext();

export default function ContactProvider(props) {

  const initialContacts = [
    { id: 1, name: 'Nguyen Duc Hien', phone: '0964581619' },
    { id: 2, name: 'Đặng Xuân Thắng', phone: '0964581619' },
    { id: 3, name: 'Hiển Nguyễn Đức', phone: '0964581619' },
    { id: 4, name: 'Alan Turing', phone: '312093813' },
    { id: 5, name: 'Tim Cook', phone: '123192030' },
    { id: 6, name: 'Vo Trung', phone: '3120391238' },
  ]

  const [contacts, setContacts] = useState([]);



  const loadContact = async () => {
    try {
      const data = await AsyncStorage.getItem('contact')
      console.log(data)
      const parseData = JSON.parse(data)
      setContacts(prev => {
        return parseData || []
      })
    } catch (error) {
      console.log(error)
    }
  }

  const storeContact = async (newContacts) => {
    try {
      await AsyncStorage.setItem('contact', JSON.stringify([...newContacts]))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadContact()
    console.log('load')
  }, [])

  useEffect(() => {
    storeContact(contacts)
    console.log('store')
  }, [contacts])


  const addContact = (contact) => {
    setContacts(prevContacts => {
      return ([
        ...prevContacts,
        {
          id: prevContacts.length + 1,
          ...contact
        }
      ])
    })
  }

  const editContact = (newContact) => {
    setContacts(prev => {
      return prev.map(contact =>
        contact.id !== newContact.id ? { ...contact } : { ...newContact })
    })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: contacts,
        addContact: addContact,
        editContact: editContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}
