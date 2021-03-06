import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StripeProvider } from '@stripe/stripe-react-native';

import { Main } from './navigation/Main';

export default function App() {
  return (
    <>
      <StripeProvider publishableKey="pk_test_51IqOpfLKrWeB7uQwCghIN0oBWNpzNdWhpADZoPutAZqjk27NL9j8SEm6M3jFE8i2RseqpgPOKfhzOHCPhjdyCF7R009MH7s3hb">
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </StripeProvider>
    </>
  );
}
