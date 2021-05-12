import React from 'react';
import { View, Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

import { Button } from '../components/Button';

const API_URL = 'https://plastic-wry-bladder.glitch.me';

export const Checkout = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = React.useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {
      paymentIntent,
      // ephemeralKey,
      // customer
    } = await response.json();

    return {
      paymentIntent,
      // ephemeralKey,
      // customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      // ephemeralKey, //customer
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      // customerId: customer,
      // customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

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
