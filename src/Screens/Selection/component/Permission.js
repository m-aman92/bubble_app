import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {colors, fontSize} from '../../../utils/Theme';

export default function Permission() {
  const renderView = (label, source, onPress, isTrue) => {
    return (
      <TouchableOpacity
        style={{
          width: '90%',
          backgroundColor: colors.lightGray,
          padding: 16,
          borderRadius: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{width: '10%', aspectRatio: 1, resizeMode: 'contain'}}
          source={source}
        />
        <Text style={{fontSize: fontSize.text, marginLeft: 12}}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
      {renderView(
        'Location Permission',
        require('../../../assets/Images/location-pin.png'),
      )}
      {renderView(
        'Storage Permission',
        require('../../../assets/Images/folder.png'),
      )}
      {renderView(
        'Camera Permission',
        require('../../../assets/Images/camera.png'),
      )}
    </View>
  );
}
