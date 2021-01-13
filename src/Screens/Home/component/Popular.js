import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import BubbleBuilder from './BubbleBuilder';
import {colors, fontSize} from '../../../utils/Theme';
import Chip from '../../../Components/Chip';

export default class Popular extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        style={{flex: 1, width: '100%', backgroundColor: colors.background}}
        contentContainerStyle={{alignItems: 'center'}}>
        <ScrollView
          style={{width: '100%'}}
          contentContainerStyle={{
            paddingHorizontal: 8,
            paddingVertical: 8,
            alignItems: 'center',
          }}
          horizontal>
          <Chip
            label="Ask Questions"
            image={require('../../../assets/Images/question.png')}
            isActive
          />
          <Chip
            label="Sports"
            image={require('../../../assets/Images/sport.png')}
          />
        </ScrollView>
        <BubbleBuilder
          type="poll"
          color="blue"
          size="large"
          data={{question: 'Testing the buuble Text'}}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <BubbleBuilder
            type="poll"
            color="green"
            size="small"
            data={{question: 'Testing the buuble Text'}}
            delay={300}
            style={{marginTop: 12}}
          />
          <BubbleBuilder
            type="text"
            color="orange"
            size="small"
            data={{header: 'Testing the buuble Text'}}
            delay={5000}
          />
        </View>
        <View
          style={{
            width: '90%',
            aspectRatio: 2,
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            source={require('../../../assets/Images/sampleAd.png')}
          />
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <BubbleBuilder
            type="image"
            color="pink"
            size="small"
            data={{header: 'Testing the buuble Text'}}
            style={{marginTop: 8}}
            delay={300}
          />
          <BubbleBuilder
            type="text"
            color="yellow"
            size="small"
            data={{header: 'Testing the buuble Text'}}
            delay={5000}
            style={{marginTop: 12}}
          />
        </View>
      </ScrollView>
    );
  }
}
