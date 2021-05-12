import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import { Checkout } from '../screens/Checkout';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="List" component={List} />
    <MainStack.Screen
      name="Checkout"
      component={Checkout}
      options={{ headerTitle: 'Checkout' }}
    />
  </MainStack.Navigator>
);
