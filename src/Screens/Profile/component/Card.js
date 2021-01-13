import React from 'react';
import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import {Bar} from 'react-native-progress';
import {colors, fontSize} from '../../../utils/Theme';

const renderImage = (source) => {
  return (
    <View
      style={{width: '100%', flex: 1, borderRadius: 15, overflow: 'hidden'}}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={source}
        resizeMode="cover"
      />
    </View>
  );
};

const renderText = (text) => {
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        borderRadius: 15,
        overflow: 'hidden',
        paddingHorizontal: 16,
      }}>
      <Text style={{fontSize: fontSize.label, color: colors.black}}>
        {text}
      </Text>
    </View>
  );
};

const renderPoll = (question, answer, total) => {
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        borderRadius: 15,
        overflow: 'hidden',
        paddingHorizontal: 16,
      }}>
      <Text
        style={{
          fontSize: fontSize.label,
          color: colors.black,
          fontWeight: 'bold',
        }}
        numberOfLines={2}>
        {question}
      </Text>
      <ScrollView style={{width: '100%'}} nestedScrollEnabled>
        {answer.map((ans, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginVertical: 4,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: fontSize.label,
                  color: colors.black,
                }}
                numberOfLines={2}>
                {ans.title}
              </Text>
              <Bar
                progress={ans.votes / total}
                color={colors.black}
                style={{height: 6}}
                height={6}
                width={(Dimensions.get('window').width * 0.9 - 32) * 0.45}
              />
              <Text
                style={{
                  fontSize: fontSize.label,
                  color: colors.black,
                }}
                numberOfLines={2}>
                {(ans.votes * 100) / total}%
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default function Card({data, index}) {
  //   console.log(item);
  const {width, height} = Dimensions.get('window');
  return (
    <View
      style={{
        width: width * 0.85,
        height: height * 0.3,
        backgroundColor: colors.background,
        marginVertical: 8,
        borderRadius: 20,
        padding: 16,
      }}>
      {data.type === 'image' && renderImage(data.source)}
      {data.type === 'text' && renderText(data.text)}
      {data.type === 'poll' &&
        renderPoll(data.question, data.answer, data.totalVotes)}
      <View
        style={{
          width: '100%',
          height: '15%',
          marginTop: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
            }}>
            <Image
              style={{
                height: height * 0.02,
                width: height * 0.02,
                resizeMode: 'contain',
                tintColor: colors.secondary,
              }}
              source={require('../../../assets/Images/like.png')}
            />
            <Text style={{fontSize: fontSize.text, marginLeft: 2}}>
              {data.likes}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
              marginHorizontal: 12,
            }}>
            <Image
              style={{
                height: height * 0.02,
                width: height * 0.02,
                resizeMode: 'contain',
                tintColor: colors.secondary,
                transform: [{scale: -1}],
              }}
              source={require('../../../assets/Images/like.png')}
            />
            <Text style={{fontSize: fontSize.text, marginLeft: 2}}>
              {data.dislikes}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: '100%',
            }}>
            <Image
              style={{
                height: height * 0.02,
                width: height * 0.02,
                resizeMode: 'contain',
                tintColor: colors.secondary,
              }}
              source={require('../../../assets/Images/comment.png')}
            />
            <Text style={{fontSize: fontSize.text, marginLeft: 2}}>
              {data.comments}
            </Text>
          </View>
        </View>
        <Text style={{fontSize: fontSize.text}}>{data.time}</Text>
      </View>
    </View>
  );
}
