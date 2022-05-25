import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {Portal} from '@gorhom/portal';
import styles from './styles';
import {Colors} from '../../constants';

const ModalLoading = () => {
  return (
    <Portal>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.secondary} />
      </View>
    </Portal>
  );
};

export default ModalLoading;
