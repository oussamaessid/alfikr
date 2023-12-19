import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToolbarHome = ({ title }) => {
  return (
    <View style={styles.toolbar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#ECB43A',
    paddingHorizontal: 10,
  },
  backButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    color: 'white',
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  rightButton: {
    width: 40,
  },
});

export default ToolbarHome;
