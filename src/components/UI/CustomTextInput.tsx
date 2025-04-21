import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../utils/Schema';
import {responsiveHeight} from '../../utils/helper';
import {icons} from '../../utils/images';
import CustomImage from '../CustomImage';

const CustomTextInput = () => {
  return (
    <View style={styles.container}>
      <CustomImage source={icons.search} style={styles.iconStyle} />
      <TextInput placeholder="Search" style={styles.textInputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 'auto',
    backgroundColor: colors.white2,
    borderRadius: 5,
    padding: 5,
    gap: 5,
    alignItems: 'center',
    marginVertical: responsiveHeight(20),
  },
  textInputStyle: {
    width: '90%',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
export default CustomTextInput;
