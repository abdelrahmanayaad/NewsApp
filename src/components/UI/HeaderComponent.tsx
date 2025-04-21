import React from 'react';
import {StyleSheet, View} from 'react-native';
import {responsiveSize} from '../../utils/helper';
import {icons} from '../../utils/images';
import {colors, fontSizes, fontWeights} from '../../utils/Schema';
import CustomImage from '../CustomImage';
import GlobalTextComponent from '../GlobalTextComponent';

const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <GlobalTextComponent text="Insight Now" style={styles.titleStyle} />
      <View style={styles.notificationIconViewStyle}>
        <CustomImage
          source={icons.notification}
          style={styles.notificationIconStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: fontSizes.fs18,
    fontWeight: fontWeights.medium,
  },
  notificationIconViewStyle: {
    width: responsiveSize(40),
    height: responsiveSize(40),
    borderRadius: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white2,
  },
  notificationIconStyle: {
    width: responsiveSize(25),
    height: responsiveSize(25),
  },
});

export default HeaderComponent;
