import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import * as screens from '../screens'
import { useTheme } from 'styled-components/native'

const Stack = createStackNavigator()

const screenOptions = theme => ({
  headerStyle: {
    backgroundColor: theme.pallete.primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
})

export default function HomeStack() {

    const theme = useTheme()

    return (
        <NavigationContainer>
            <Stack.Navigator
                  screenOptions={screenOptions(theme)}
            >
                <Stack.Screen name="home" component={screens.Home} />
                <Stack.Screen name="details" component={screens.Details} />
                <Stack.Screen name="articles" component={screens.Articles} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
