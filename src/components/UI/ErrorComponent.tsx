import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fontSizes} from '../../utils/Schema';

type ErrorComponentPropsType = {
  error: string;
};
const ErrorComponent = ({error}: ErrorComponentPropsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorStyle}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorStyle: {
    fontSize: fontSizes.fs16,
    color: colors.red,
  },
});

export default ErrorComponent;
