import React, {useState} from 'react';
import {Text, TouchableOpacity, Dimensions} from 'react-native';
import {styles} from './DefaultButtonStyles';

const DefaultButton = ({
  children,
  onPress,
  style,
  swapColors,
  specifiedColor,
  specifiedFontColor,
  specifiedFontSize,
  big
}) => {
  const [buttonColor, changeButtonColor] = useState('#F7F4E1');
  const [textColor, changeTextColor] = useState('#8C9999');

  const buttonClicked = () => {
    if (onPress) onPress();
    if (swapColors) {
      if (buttonColor === '#F7F4E1') {
        changeButtonColor('#0599A8');
        changeTextColor('white');
      } else {
        changeButtonColor('#F7F4E1');
        changeTextColor('#8C9999');
      }
    }
  };

  const bigStyle = {width: Dimensions.get('window').width*0.9,borderRadius:0,margin:0};

  return (
    <TouchableOpacity
      style={[
        {
          alignSelf: 'flex-start',
          margin: 10,
          padding: 10,
          backgroundColor: specifiedColor ? specifiedColor : buttonColor,
          borderRadius: 20,
          height: 40,
          justifyContent: 'center',
          ...(big?bigStyle:{})
        },
        style,
      ]}
      onPress={buttonClicked}
      activeOpacity={0.5}>
      <Text
        style={{
          textAlign: 'center',
          color: specifiedFontColor ? specifiedFontColor : textColor,
          fontWeight: 'bold',
          fontSize: specifiedFontSize ? specifiedFontSize : 18,
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
