import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});

const screens = [
  {
    title: 'Checkout',
    subtitle: 'Start checkout',
    target: 'Checkout',
  },
];

export const List = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={screens}
      keyExtractor={item => item.title}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.subtitle}
          onPress={() => navigation.push(item.target)}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
      ListHeaderComponent={ListSeparator}
      ListFooterComponent={ListSeparator}
    />
  );
};
