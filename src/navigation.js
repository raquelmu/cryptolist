import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import MarketScreen from './screens/MarketScreen';
import SingleScreen from './screens/SingleScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

class StackNavigator extends React.Component {
  render(){
    return (
      <Stack.Navigator>
        <Stack.Screen name="MarketList" component={MarketScreen} options={{headerShown: false}} />
        <Stack.Screen name="Single" component={SingleScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    )
  }
}

export default function Navigation(){
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Market') {
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Market" component={StackNavigator} options={{headerShown: false}} />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}