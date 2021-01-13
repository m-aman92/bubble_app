import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fontSize, iconSize} from '../../../utils/Theme';
import Icon from 'react-native-vector-icons/Entypo';

export default function Age({age, onAgeChange, gender, onGenderChange}) {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: fontSize.text,
          textAlign: 'center',
        }}>
        Years
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: 12,
        }}>
        <Icon
          name="chevron-left"
          size={iconSize.back}
          color={colors.secondary}
          onPress={() => {
            if (age > 1) onAgeChange(age - 1);
          }}
        />
        <Text
          style={{
            fontSize: fontSize.label + 14,
            color: colors.primary,
            width: '20%',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {age}
        </Text>
        <Icon
          name="chevron-right"
          size={iconSize.back}
          color={colors.secondary}
          onPress={() => {
            onAgeChange(age + 1);
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            onGenderChange(0);
          }}
          style={{
            width: '48%',
            backgroundColor: colors.lightGray,
            aspectRatio: 1,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'flex-end',
            ...(gender === 0
              ? {
                  borderWidth: 2,
                  borderColor: colors.primary,
                  transform: [{scale: 1.1}],
                }
              : {}),
          }}>
          <Text
            style={{
              fontSize: fontSize.label,
              fontWeight: 'bold',
              marginBottom: 12,
            }}>
            Male
          </Text>
          <Image
            source={require('../../../assets/Images/man.png')}
            style={{width: '70%', height: '70%', resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onGenderChange(1);
          }}
          style={{
            width: '48%',
            backgroundColor: colors.lightGray,
            aspectRatio: 1,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'flex-end',
            ...(gender === 1
              ? {
                  borderWidth: 2,
                  borderColor: colors.primary,
                  transform: [{scale: 1.1}],
                }
              : {}),
          }}>
          <Text
            style={{
              fontSize: fontSize.label,
              fontWeight: 'bold',
              marginBottom: 12,
            }}>
            Female
          </Text>
          <Image
            source={require('../../../assets/Images/woman.png')}
            style={{width: '70%', height: '70%', resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
