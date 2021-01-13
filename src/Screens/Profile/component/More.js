import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Share from 'react-native-share';
import Button from '../../../Components/Button';
import {navigate} from '../../../utils/navigation';
import {colors, fontSize} from '../../../utils/Theme';

export default function More() {
  const [selOpt, setSelOpt] = useState(0);
  const [changeView, setChangeView] = useState(false);
  const [popup, setpopup] = useState(false);
  const more = [
    {
      id: 0,
      label: 'My Account',
      image: require('../../../assets/Images/settings.png'),
      onPress: () => {
        navigate('MyAccount');
      },
    },
    {
      id: 1,
      label: 'Home Town',
      image: require('../../../assets/Images/location-pin.png'),
      color: '#EC58FF',
      onPress: () => {
        navigate('HomeTown');
      },
    },
    {
      id: 2,
      label: 'Download My Data',
      image: require('../../../assets/Images/file.png'),
    },
    {
      id: 3,
      label: 'Invite Friends',
      image: require('../../../assets/Images/share.png'),
      onPress: () => {
        Share.open({
          title: 'Invite Friends',
          message: 'Invite Your Friends',
        });
      },
    },
    {
      id: 4,
      label: 'Contact Us',
      image: require('../../../assets/Images/phone.png'),
    },
    {
      id: 5,
      label: 'Delete Account',
      image: require('../../../assets/Images/delete.png'),
      onPress: () => {
        setpopup(true);
        global.showPopup(true, renderDelete(), {height: 'auto'});
      },
    },
  ];

  const options = [
    {
      id: 0,
      label: 'Irrelevent content',
    },
    {
      id: 1,
      label: 'No Activity',
    },
    {
      id: 2,
      label: 'Time Consuming',
    },
    {
      id: 3,
      label: 'Other',
    },
  ];

  useEffect(() => {
    if (popup) global.showPopup(true, renderDelete(), {height: 'auto'});
  }, [selOpt]);

  useEffect(() => {
    if (changeView) global.showPopup(true, renderDelete(), {height: 'auto'});
  }, [changeView]);

  const renderDelete = () => {
    if (changeView) {
      return (
        <View style={{width: '100%', borderRadius: 10, alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontSize.label + 4,
              color: colors.primary,
              paddingHorizontal: 20,
              textAlign: 'center',
              paddingVertical: 8,
            }}>
            Delete Account
          </Text>

          <Image
            source={require('../../../assets/Images/ready.png')}
            style={{
              width: Dimensions.get('window').width * 0.5,
              height: Dimensions.get('window').width * 0.5,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: fontSize.label,
              color: colors.black,
              paddingHorizontal: 20,
              textAlign: 'center',
              paddingVertical: 8,
            }}>
            Your account will be deleted in 48 hours
          </Text>
          <Text
            style={{
              fontSize: fontSize.label,
              color: colors.primary,
              paddingHorizontal: 20,
              textAlign: 'center',
              paddingVertical: 8,
            }}>
            Thank You
          </Text>
          <Button
            label="Ok"
            style={{width: '90%', marginVertical: 12}}
            onPress={() => {
              setpopup(false);
              setChangeView(false);
              setSelOpt(0);
              global.showPopup(false);
            }}
          />
        </View>
      );
    }
    return (
      <View style={{width: '100%', borderRadius: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: fontSize.label + 4,
            color: colors.primary,
            paddingHorizontal: 20,
            textAlign: 'center',
            paddingVertical: 8,
          }}>
          Delete Account
        </Text>
        {options.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginVertical: 16,
                marginHorizontal: 16,
              }}
              onPress={() => {
                setSelOpt(item.id);
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
                {item.id === selOpt && (
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
                )}
              </View>
              <Text
                style={{
                  fontSize: fontSize.text,
                  color: colors.primary,
                  marginLeft: 16,
                }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}

        <Button
          label="Delete Account"
          style={{width: '90%', marginVertical: 12}}
          onPress={() => {
            setChangeView(true);
          }}
        />
      </View>
    );
  };

  return (
    <>
      <ScrollView
        style={{flex: 1, backgroundColor: colors.primaryEm}}
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
        }}>
        {more.map((item, index) => {
          return (
            <TouchableOpacity
              key={'more' + item.id}
              style={{
                width: '90%',
                padding: 24,
                paddingVertical: 20,
                marginVertical: 8,
                borderRadius: 20,
                backgroundColor: colors.background,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={item.onPress}>
              <Image
                style={{width: '10%', aspectRatio: 1, tintColor: item.color}}
                source={item.image}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: fontSize.label,
                  color: colors.secondary,
                  fontWeight: 'bold',
                  marginLeft: 16,
                }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          backgroundColor: colors.primaryEm,
          width: '100%',
          justifyContent: 'center',
          paddingVertical: 8,
        }}>
        <Text
          style={{
            fontSize: fontSize.text,
            fontWeight: 'bold',
            paddingRight: 4,
            borderRightWidth: 0.5,
          }}>
          Privacy Policy
        </Text>
        <Text
          style={{
            fontSize: fontSize.text,
            fontWeight: 'bold',
            paddingLeft: 4,
            borderLeftWidth: 0.5,
          }}>
          Terms of Use
        </Text>
      </View>
    </>
  );
}
