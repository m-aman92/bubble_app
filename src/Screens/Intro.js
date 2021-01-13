import React, {useRef, useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Text,
  ImageBackground,
} from 'react-native';
import Modal from '../Components/Modal';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../utils/Theme';
import Slider from '../Components/MySlider';
// Screen Const
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const slides = [
  {
    bgBubble: require('../assets/Images/bubble.png'),
    key: '1',
    image: require('../assets/Images/1.png'),
    backgroundColor: '#59b2ab',
    title: 'Welcome to Bubbles',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
  },
  {
    title: 'Connect with your community',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    bgBubble: require('../assets/Images/bubble.png'),
    key: '2',
    image: require('../assets/Images/2.png'),
    backgroundColor: '#febe29',
  },
  {
    title: 'Share your thoughts and enjoy',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    bgBubble: require('../assets/Images/bubble.png'),
    key: '3',
    image: require('../assets/Images/3.png'),
    backgroundColor: '#22bcb5',
  },
];

const modalData = [
  {
    title: 'Privacy Policy',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, nosea takimata sanctus est Lorem ipsum dolor sit amet. Loremipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren. ',
    image: require('../assets/Images/privacy.png'),
  },
  {
    title: 'Terms of Use',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, nosea takimata sanctus est Lorem ipsum dolor sit amet. Loremipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren',
    image: require('../assets/Images/terms.png'),
  },
];

export default class Intro extends React.Component {
  state = {
    showRealApp: false,
  };

  NavigateToSignup = async () => {
    // await AsyncStorage.setItem(APP_CONSTANTS.HAS_SEEN_INTRO, 'true');
    // return this.props.navigation.reset({
    //   index: 0,
    //   routes: [{name: ScreenConst.SignUp}],
    // });
  };

  _renderItem = ({item}) => {
    return (
        <View style={{flex: 1,}}>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={item.image}/>
          <View style={styles.textViewContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.text}</Text>
          </View>
        </View>
    );
  };
  _onDone = () => {
    this.NavigateToSignup();
  };

  renderNextButton = () => {
    return (
      <View style={[styles.buttonCircle, styles.nextButton]}>
        <Icon color={'white'} name={'right'} size={22}></Icon>
      </View>
    );
  };

  renderPrevButton = () => {
    return (
      <View style={[styles.buttonCircle, styles.prevButton]}>
        <Icon color={colors.primary} name={'left'} size={22}></Icon>
      </View>
    );
  };
  renderDoneButton = () => {
    return this.renderNextButton();
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        {/* <AppIntroSlider
          activeDotStyle={{
            backgroundColor: colors.primary,
            width: 20,
            ...styles.dotcontainer,
            backgroundColor: colors.primary,
            width:height*0.03,
          }}
          showPrevButton={true}
          renderPrevButton={this.renderPrevButton}
          dotStyle={{backgroundColor: colors.grey, ...styles.dotcontainer}}
          renderDoneButton={this.renderDoneButton}
          renderNextButton={this.renderNextButton}
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
        /> */}
        <Slider slides={slides}></Slider>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 15,
            alignSelf: 'center',
          }}>
          <Modal data={modalData[0]}>
            <Text style={styles.text}>Privacy Policy</Text>
            </Modal>
          <Text style={styles.text}> | </Text>
          <Modal data={modalData[1]}>
            <Text style={styles.text}>Terms Of Use</Text>
            </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: height * 0.4,
    height: height * 0.4,
    alignSelf: 'center',
  },
  itemTitle: {
    textAlign: 'center',
    color: colors.primary,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.07,
    marginBottom: 20,
  },
  itemDescription: {
    fontWeight: '300',
    textAlign: 'center',
    fontSize: height * 0.025,
  },
  buttonCircle: {
    width: height * 0.07,
    height: height * 0.07,
    borderRadius: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: colors.primary,
  },
  prevButton: {
    backgroundColor: 'white',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  dotcontainer: {
    marginTop: -height*0.8,
    width:height*0.02,
    height: height * 0.02,
    borderRadius:height*0.02,
  },
  textViewContainer: {
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: height * 0.1,
    marginHorizontal: width * 0.05,
    paddingTop: height * 0.06,
  },
  text:{
    fontSize:height*0.02,

  }
});
