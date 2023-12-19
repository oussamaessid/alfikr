import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Toolbar = ({ title, onBackPress, rightButton }) => {
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightButton}>{rightButton}</View>
    </View>
  );
};


const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    justifyContent: 'center'
  },
  rightButton: {
    width: 40,
  },
});

export default Toolbar;
