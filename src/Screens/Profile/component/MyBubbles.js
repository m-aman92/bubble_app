import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import Chip from '../../../Components/Chip';
import {colors} from '../../../utils/Theme';
import Card from './Card';

const bubbles = [
  {
    id: 0,
    type: 'image',
    source: require('../../../assets/Images/3.png'),
    time: '1h 3m',
    likes: 14,
    dislikes: 42,
    comments: 12,
  },
  {
    id: 1,
    type: 'text',
    text: 'Testing the sample bubbles',
    time: '12h 3m',
    likes: 15,
    dislikes: 42,
    comments: 12,
  },
  {
    id: 2,
    type: 'poll',
    question: 'Test Question',
    answer: [
      {
        id: 0,
        title: 'Vote A',
        votes: 30,
      },
      {
        id: 1,
        title: 'Vote B',
        votes: 60,
      },
      {
        id: 2,
        title: 'Vote C',
        votes: 10,
      },
    ],
    totalVotes: 100,
    time: '1h 3m',
    likes: 14,
    dislikes: 42,
    comments: 12,
  },
  {
    id: 10,
    type: 'image',
    source: require('../../../assets/Images/3.png'),
    time: '1h 3m',
    likes: 14,
    dislikes: 42,
    comments: 12,
  },
];

const cats = [
  {id: 0, cat: 'Active', image: require('../../../assets/Images/tick.png')},
  {id: 1, cat: 'Expired', image: require('../../../assets/Images/cancel.png')},
];

export default class MyBubbles extends Component {
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
      <FlatList
        data={bubbles}
        style={{flex: 1, backgroundColor: colors.primaryEm}}
        contentContainerStyle={{
          alignItems: 'center',
          width: '100%',
        }}
        ListHeaderComponentStyle={{width: '100%', marginVertical: 12}}
        ListHeaderComponent={() => {
          return (
            <ScrollView
              horizontal
              style={{width: '100%'}}
              contentContainerStyle={{paddingHorizontal: 8}}>
              {cats.map((cat, index) => {
                return (
                  <Chip
                    label={cat.cat}
                    image={cat.image}
                    onPress={() => {
                      this.setState({selectedCat: {id: cat.id}});
                    }}
                    isActive={selectedCat.id === cat.id}
                  />
                );
              })}
            </ScrollView>
          );
        }}
        renderItem={({item, index}) => {
          return <Card data={item} index={index} />;
        }}
      />
    );
  }
}
