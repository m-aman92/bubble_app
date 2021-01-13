// How to Call this component :
// import Slider from './src/Components/Slider';

import React, { useState, useRef, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../utils/Theme';
import { navigate } from '../utils/navigation';

import Swiper from 'react-native-swiper'


const { width, height } = Dimensions.get('window');

export default class Slider extends Component {

  state = {
    index: 0
  }


  renderNextButton = () => {
    return (
      <TouchableOpacity onPress={() => this.slider.scrollTo(this.state.index + 1)}>
        <View style={[styles.buttonCircle, styles.nextButton]}>
          <Icon color={'white'} name={'right'} size={20}></Icon>
        </View>
      </TouchableOpacity>
    );
  };

  renderPrevButton = () => {
    return (
      <TouchableOpacity onPress={() => this.slider.scrollTo(this.state.index - 1)}>
        <View style={[styles.buttonCircle, styles.prevButton]}>
          <Icon color={colors.primary} name={'left'} size={20}></Icon>
        </View>
      </TouchableOpacity>
    );
  };
  renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigate('Selection')}>
        <View style={[styles.buttonCircle, styles.nextButton]}>
          <Icon color={'white'} name={'right'} size={20}></Icon>
        </View>
      </TouchableOpacity>
    );
  };

  renderRightButton = () => {
    if (this.state.index < 2) {
      return this.renderNextButton();
    }
    else {
      return this.renderDoneButton();
    }
  }

  renderLeftButton = () => {
    if (this.state.index !== 0) {
      return this.renderPrevButton();
    }
    else return <View></View>
  }



  render() {

    return (
      <Swiper
        scrollEnabled={false}
        ref={(ref => this.slider = ref)}
        loop={false}
        showsPagination={false}
        onIndexChanged={(index) => this.setState({ index: index })}
        nextButton={this.renderNextButton()}
      >
        {this.props.slides.map((item, index) => {


          const { image, title, text } = item;
          return (
            <View style={{ flex: 1, marginBottom: 50 }}>
              <Image source={image} style={styles.image} />
              <View style={styles.dotsContainer}>
                {this.props.slides.map((item, index) => {
                  const color = this.state.index == index ? colors.primary : colors.lightGray;
                  const width = this.state.index == index ? height * 0.03 : height * 0.02;
                  return (
                    <View style={{ ...styles.dots, width: width, backgroundColor: color }}></View>
                  )
                })}
              </View>
              <View style={{ paddingHorizontal: '3%' }}>
                <Text style={styles.itemTitle}>{title}
                </Text>
                <Text style={styles.itemDescription}>
                  {text}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: '2%' }}>
                {this.renderLeftButton()}
                {this.renderRightButton()}
              </View>
            </View>
          )
        })}
      </Swiper>

    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '2%'
  },
  dots: {
    width: height * 0.02,
    height: height * 0.02,
    margin: 8,
    backgroundColor: colors.primary,
    borderRadius: height * 0.02
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
});
