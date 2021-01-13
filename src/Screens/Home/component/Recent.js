import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import BubbleBuilder from './BubbleBuilder';
import {colors, fontSize} from '../../../utils/Theme';
import Chip from '../../../Components/Chip';

const cats = [
  {
    id: 0,
    label: 'Ask Questions',
    image: require('../../../assets/Images/question.png'),
  },
  {
    id: 1,
    label: 'Sports',
    image: require('../../../assets/Images/question.png'),
    image: require('../../../assets/Images/sport.png'),
  },
];

const bubbles = [
  {
    id: 0,
    type: 'text',
    color: 'blue',
    size: 'large',
    data: {
      text: 'Sample text to test the bubbles',
      likes: 14,
      dislikes: 12,
      comment: 13,
      isLiked: false,
      isCommented: true,
    },
  },
  {
    id: 1,
    type: 'image',
    color: 'green',
    size: 'small',
    data: {
      image: require('../../../assets/Images/2.png'),
      likes: 14,
      dislikes: 12,
      comment: 13,
      isLiked: false,
      isCommented: true,
    },
  },
  {
    id: 2,
    type: 'poll',
    color: 'pink',
    size: 'small',
    data: {
      question: 'This is a sample test question for bubble',
      likes: 14,
      dislikes: 12,
      comment: 13,
      answer: [
        {
          id: 0,
          label: 'Vote A',
          votes: 30,
          alias: 'A',
        },
        {
          id: 1,
          label: 'Vote B',
          votes: 60,
          alias: 'B',
        },
        {
          id: 2,
          label: 'Vote C',
          votes: 10,
          alias: 'C',
        },
      ],
      totalVotes: 100,
      yourAns: 0,
    },
  },

  {
    id: 4,
    type: 'image',
    color: 'orange',
    size: 'small',
    data: {
      image: require('../../../assets/Images/2.png'),
      likes: 14,
      dislikes: 12,
      comment: 13,
      isLiked: false,
      isCommented: true,
    },
  },
  {
    id: 5,
    type: 'poll',
    color: 'yellow',
    size: 'small',
    data: {
      question: 'This is a sample test question for bubble',
      likes: 14,
      dislikes: 12,
      comment: 13,
      answer: [
        {
          id: 0,
          label: 'Vote A',
          votes: 30,
          alias: 'A',
        },
        {
          id: 1,
          label: 'Vote B',
          votes: 60,
          alias: 'B',
        },
        {
          id: 2,
          label: 'Vote C',
          votes: 10,
          alias: 'C',
        },
      ],
      totalVotes: 100,
      yourAns: 0,
    },
  },
];

export default class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: {
        id: 0,
      },
    };
  }

  render() {
    const {
      state: {selectedCat},
    } = this;

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
          {cats.map((item, index) => {
            return (
              <Chip
                label={item.label}
                image={item.image}
                isActive={selectedCat.id === item.id}
                onPress={() => {
                  this.setState({selectedCat: {id: item.id}});
                }}
              />
            );
          })}
        </ScrollView>
        {bubbles.map((item, index) => {
          if (item.size === 'large') {
            return (
              <BubbleBuilder
                type={item.type}
                color={item.color}
                size={item.size}
                data={item.data}
              />
            );
          }
          if (item.size === 'small' && index % 2 !== 0) {
            return (
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <BubbleBuilder
                  type={item.type}
                  color={item.color}
                  size={item.size}
                  data={item.data}
                />
                {bubbles.length - 1 >= index + 1 &&
                  bubbles[index + 1].type !== 'ad' && (
                    <BubbleBuilder
                      type={bubbles[index + 1].type}
                      color={bubbles[index + 1].color}
                      size={bubbles[index + 1].size}
                      data={bubbles[index + 1].data}
                    />
                  )}
              </View>
            );
          }
        })}

        <View
          style={{
            width: '90%',
            aspectRatio: 2,
            borderRadius: 10,
            overflow: 'hidden',
            marginVertical: 12,
          }}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            source={require('../../../assets/Images/sampleAd.png')}
          />
        </View>
      </ScrollView>
    );
  }
}
