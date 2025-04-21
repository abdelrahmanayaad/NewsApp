import React, {JSX} from 'react';
import {
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '../utils/Schema';
import GlobalTextComponent from './GlobalTextComponent';

type CustomButtonPropsLocal = {
  text?: string;
  isOpacity?: boolean;
  textStyle?: StyleProp<TextStyle>;
  renderRight?: () => JSX.Element;
  renderLeft?: () => JSX.Element;
};
export type CustomButtonProps = CustomButtonPropsLocal &
  PressableProps &
  TouchableOpacityProps;

const CustomButton = ({
  renderLeft,
  renderRight,
  children,
  text,
  style,
  textStyle,
  disabled = false,
  isOpacity,
  ...props
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={isOpacity ? 0.8 : 0.9}
      style={[disabled && styles.disabled, style]}
      disabled={disabled}
      {...props}>
      {renderLeft && renderLeft()}
      {text && (
        <GlobalTextComponent
          text={text}
          style={[textStyle, disabled && styles.disabledText]}
        />
      )}
      {children}
      {renderRight && renderRight()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabledText: {
    color: colors.white,
  },
  disabled: {
    backgroundColor: colors.disabledColor,
  },
});
export default CustomButton;
