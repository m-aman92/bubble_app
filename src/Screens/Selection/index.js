import React, {Component, createRef} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import Button from '../../Components/Button';
import MainContainer from '../../Components/MainContainer';
import {colors, fontSize, iconSize} from '../../utils/Theme';
import Age from './component/Age';
import Language from './component/Language';
import Icon from 'react-native-vector-icons/Entypo';
import Permission from './component/Permission';
import {navigate} from '../../utils/navigation';

export default class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      age: 1,
      langugae: 'en',
      gender: null,
    };
    this.scroll = createRef(null);
  }

  onNext = () => {
    const {width} = Dimensions.get('window');
    const {current} = this.state;
    if (current > 3) {
      return;
    }
    this.scroll.current?.scrollTo({x: (current + 1) * width});
    this.setState({current: current + 1});
  };
  onBack = () => {
    const {width} = Dimensions.get('window');
    const {current} = this.state;
    if (current < 1) {
      return;
    }
    this.scroll.current?.scrollTo({x: (current - 1) * width});
    this.setState({current: current - 1});
  };

  renderView = (title, showBack, children, image, onPress, button = 'Next') => {
    return (
      <View style={{height: '100%', width: Dimensions.get('window').width}}>
        <View
          style={{
            height: '7%',
            justifyContent: 'center',
            width: '95%',
            alignSelf: 'center',
          }}>
          {showBack && (
            <Icon
              name="chevron-left"
              size={iconSize.back}
              color={colors.secondary}
              onPress={this.onBack}
            />
          )}
        </View>
        <Text
          style={{
            color: colors.primary,
            fontSize: fontSize.label,
            fontWeight: 'bold',
            width: '90%',
            paddingVertical: 12,
            alignSelf: 'center',
          }}>
          {title}
        </Text>
        <View style={{flex: 1}}>
          <Image
            source={image}
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
          />
        </View>
        <View
          style={{
            flex: 1.3,
            paddingVertical: 8,
            width: '90%',
            alignSelf: 'center',
          }}>
          {children}
        </View>
        <Button
          onPress={() => {
            if (onPress) onPress();
            this.onNext();
          }}
          label={button}
          style={{width: '90%', marginVertical: 12}}
        />
      </View>
    );
  };

  render() {
    return (
      <MainContainer safeAll>
        <ScrollView
          ref={this.scroll}
          scrollEnabled={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{height: '100%'}}>
          {this.renderView(
            'Language',
            false,
            <Language />,
            require('../../assets/Images/language.png'),
          )}
          {this.renderView(
            'Age & Gender',
            true,
            <Age
              age={this.state.age}
              onAgeChange={(age) => {
                this.setState({age});
              }}
              gender={this.state.gender}
              onGenderChange={(gender) => {
                this.setState({gender});
              }}
            />,
            require('../../assets/Images/age.png'),
          )}
          {this.renderView(
            'Permission',
            true,
            <Permission />,
            require('../../assets/Images/permission.png'),
          )}
          {this.renderView(
            'All Set',

            true,
            <View>
              <Text
                style={{fontSize: fontSize.label + 20, textAlign: 'center'}}>
                Ready
              </Text>
              <Text style={{fontSize: fontSize.label, textAlign: 'center'}}>
                To Go
              </Text>
            </View>,
            require('../../assets/Images/ready.png'),
            () => {
              navigate('Home', {screen: 'Feed'});
            },
            "Let's Go",
          )}
        </ScrollView>
      </MainContainer>
    );
  }
}
