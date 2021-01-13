import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {colors, fontSize, iconSize} from '../utils/Theme';
import {goBack, navigate} from '../utils/navigation';

export default class Header extends Component {
  renderLogoHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={{height: '60%', aspectRatio: 3}}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
            }}
            source={require('../assets/Images/logo.png')}
          />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="location-pin"
              color={colors.grey}
              size={fontSize.label}
            />
            <Text style={{fontSize: fontSize.text, color: colors.grey}}>
              Faisalabad, Pakistan
            </Text>
            <View style={{marginLeft: 12}}>
              <MCIcon
                name="bell"
                color={colors.secondary}
                size={fontSize.label + 8}
                onPress={() => {
                  navigate('Home', {screen: 'Notifications'});
                }}
              />
              <View
                style={{
                  height: 10,
                  aspectRatio: 1,
                  borderRadius: 5,
                  backgroundColor: colors.primary,
                  position: 'absolute',
                  top: 0,
                  right: 0,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  renderLabelHeader = (label) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={{}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontSize.label + 4,
              color: colors.primary,
            }}>
            {label}
          </Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginLeft: 12}}>
              <MCIcon
                name="bell"
                color={colors.secondary}
                size={fontSize.label + 8}
                onPress={() => {
                  navigate('Home', {screen: 'Notifications'});
                }}
              />
              <View
                style={{
                  height: 10,
                  aspectRatio: 1,
                  borderRadius: 5,
                  backgroundColor: colors.primary,
                  position: 'absolute',
                  top: 0,
                  right: 0,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  renderBackHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          flex: 1,
          alignItems: 'center',
        }}>
        <Icon
          name="chevron-left"
          size={iconSize.back}
          color={colors.secondary}
          onPress={goBack}
        />
      </View>
    );
  };

  pop = () =>
    global.showPopup(
      true,
      <View
        style={{
          height: '50%',
          width: '100%',
          marginHorizontal: 16,
          marginVertical: 32,
        }}>
        <View
          style={{
            width: 80,
            height: 5,
            alignSelf: 'center',
            backgroundColor: colors.grey,
            borderRadius: 12,
            marginBottom: 32,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <Image
            source={require('../assets/Images/download.png')}
            style={{width: 20, aspectRatio: 1}}
            resizeMode="contain"
          />
          <View style={{paddingHorizontal: 16}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSize.label}}>
              Save Bubble
            </Text>
            <Text style={{color: colors.grey}}>Save this for later</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <Image
            source={require('../assets/Images/share2.png')}
            style={{width: 20, aspectRatio: 1}}
            resizeMode="contain"
          />
          <View style={{paddingHorizontal: 16}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSize.label}}>
              Share Bubble
            </Text>
            <Text style={{color: colors.grey}}>
              Share through any application
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <Image
            source={require('../assets/Images/flag.png')}
            style={{width: 20, aspectRatio: 1}}
            resizeMode="contain"
          />
          <View style={{paddingHorizontal: 16}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSize.label}}>
              Report this Bubble
            </Text>
            <Text style={{color: colors.grey}}>This is in appropriate</Text>
          </View>
        </View>
      </View>,
      {
        height: '30%',
        width: '100%',
      },
      true,
    );

  renderBackHeaderwithDots = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',

          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}>
        <Icon
          name="chevron-left"
          size={iconSize.back}
          color={colors.secondary}
          onPress={goBack}
        />
        <Text
          onPress={() => this.pop()}
          style={{fontWeight: 'bold', fontSize: 24, color: colors.darkGray}}>
          ...
        </Text>
      </View>
    );
  };

  render() {
    const {
      props: {type, label},
    } = this;
    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <View
            style={{
              width: '100%',
              height: 60 + insets.top,
              paddingTop: insets.top,
              backgroundColor: colors.background,
            }}>
            {type === 'logo' && this.renderLogoHeader()}
            {type === 'label' && this.renderLabelHeader(label)}
            {type === 'back' && this.renderBackHeader()}
            {type === '...' && this.renderBackHeaderwithDots()}
          </View>
        )}
      </SafeAreaInsetsContext.Consumer>
    );
  }
}
