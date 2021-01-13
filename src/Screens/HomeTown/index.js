import React from 'react';
import {View, Text, Modal, Image} from 'react-native';
import Button from '../../Components/Button';
import MainContainer from '../../Components/MainContainer';
import {colors, fontSize} from '../../utils/Theme';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeTown() {
  const renderPopup = () => {
    return (
      <View style={{flex: 1, overflow: 'hidden', borderRadius: 10}}>
        <Image
          source={require('../../assets/Images/map.png')}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            resizeMode: 'cover',
          }}
        />
        <Button
          label="Set Location"
          style={{position: 'absolute', bottom: 12, width: '90%'}}
          onPress={() => {
            global.showPopup(false);
          }}
        />
      </View>
    );
  };

  return (
    <MainContainer headerComponent="back">
      <View style={{marginHorizontal: 16}}>
        <Text
          style={{
            fontSize: fontSize.label,
            color: colors.primary,
            fontWeight: 'bold',
          }}>
          Home Town
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 16,
            marginHorizontal: 16,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 12,
              aspectRatio: 1,
              borderWidth: 1,
              borderColor: colors.primary,
              borderRadius: 16,
              justifyContent: 'center',
            }}>
            <View
              style={{
                position: 'absolute',
                width: 7,
                aspectRatio: 1,
                backgroundColor: colors.primary,
                borderRadius: 16,
                alignSelf: 'center',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: fontSize.text,
              color: colors.black,
              paddingHorizontal: 8,
            }}>
            Faisalabad, Pakistan
          </Text>
          <Text
            style={{
              fontSize: fontSize.text,
              color: colors.primary,
              paddingHorizontal: 8,
              fontWeight: 'bold',
              flex: 1,
              textAlign: 'right',
            }}>
            Active
          </Text>
        </View>

        <Button
          label="Add More"
          type="unfilled"
          style={{
            width: '100%',
            backgroundColor: colors.background,
            borderColor: colors.primary,
            borderWidth: 1,
            borderStyle: 'dotted',
            marginVertical: 12,
          }}
          onPress={() => {
            global.showPopup(true, renderPopup());
          }}
        />
      </View>
    </MainContainer>
  );
}
