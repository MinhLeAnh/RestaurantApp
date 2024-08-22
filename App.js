import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Home from './home';
import Inbox from './inbox';

function Profile() {
  return (
    < View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nothing</Text>
    </View>
  );
}

function Order() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nothing</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#4A43EC"
      labelStyle={{ fontSize: 12, }}
      barStyle={{ backgroundColor: '#fff' }}
      style={{ backgroundColor: 'green' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={26} />
          ),
          tabBarLabel: 'HOME'
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-handle-outline" color={color} size={26} />
          ),
          tabBarLabel:'ORDER'
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" color={color} size={26} />
          ),
          tabBarLabel:'INBOX'
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={26} />
          ),
          tabBarLabel:'PROFILE'
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image:{
    width: 200,
    height: 200,
    marginBottom:20
  },
  tabBarLabel:{
    fontFamily:'Poppins'
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
