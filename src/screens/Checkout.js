import React from 'react';
import { View, Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

import { Button } from '../components/Button';

const API_URL = 'https://plastic-wry-bladder.glitch.me';

export const Checkout = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [clientSecret, setClientSecret] = React.useState();

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent } = await response.json();

    return {
      paymentIntent,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
    });
    if (!error) {
      setClientSecret(paymentIntent);
    }
  };

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const { error } = await presentPaymentSheet({ clientSecret });

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  React.useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <Button onPress={openPaymentSheet}>Checkout</Button>
    </View>
  );
};
