import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontSize} from '../../../utils/Theme';
import * as Animatable from 'react-native-animatable';
import {Bar} from 'react-native-progress';
import {navigate} from '../../../utils/navigation';

const bubble = {
  blue: require('../../../assets/Images/blue-bubble.png'),
  green: require('../../../assets/Images/green-bubble.png'),
  pink: require('../../../assets/Images/pink-bubble.png'),
  yellow: require('../../../assets/Images/yellow-bubble.png'),
  orange: require('../../../assets/Images/orange-bubble.png'),
};
const sizes = {large: '70%', small: '47%'};

type Data = {
  header: string,
  likes: number,
  dislikes: number,
  comments: number,
  isLike: boolean,
  isDislike: boolean,
  isComment: boolean,
};

const renderButtons = (size, image, isActive, onPress) => {
  return (
    <TouchableOpacity
      style={{width: size === 'large' ? '20%' : '20%', aspectRatio: 1}}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
          tintColor: isActive ? colors.primary : colors.black,
        }}
        source={image}
      />
    </TouchableOpacity>
  );
};

const renderPollButtons = (size, label, isActive, onPress) => {
  return (
    <TouchableOpacity
      style={{
        width: size === 'large' ? '20%' : '20%',
        aspectRatio: 1,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: isActive ? colors.primary : colors.black,
        backgroundColor: isActive ? colors.primaryTrans : 'transparent',
      }}>
      <Text
        style={{
          fontSize: size === 'large' ? fontSize.text : fontSize.text - 4,
          color: isActive ? colors.primary : colors.black,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const renderSub = (number, size, type) => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text
            style={{
              fontSize: size === 'large' ? fontSize.text : fontSize.text - 3,
              color: colors.black,
              fontWeight: 'bold',
              marginRight: size === 'large' ? 2 : 1,
            }}>
            {number}
          </Text>
          <Text
            style={{
              fontWeight: 'normal',
              fontSize:
                size === 'large' ? fontSize.text - 1 : fontSize.text - 4,
            }}>
            {type}
          </Text>
        </View>
      </View>
    </View>
  );
};

const renderText = (data: Data, size) => {
  return (
    <View style={{width: '80%', aspectRatio: 1, alignItems: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: size === 'large' ? fontSize.label + 4 : fontSize.label,
            color: colors.black,
            textAlign: 'center',
          }}>
          {data.text}
        </Text>
      </View>
      <View
        style={{
          height: size === 'large' ? '35%' : '25%',
          width: '100%',
          alignItems: 'center',
          marginBottom: 8,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            padding: size === 'large' ? 8 : 4,
            borderRadius: 10,
            width: '95%',
            backgroundColor: colors.lightGray,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {renderSub(data.likes, size, 'Likes')}
          {renderSub(data.dislikes, size, 'Dislikes')}
          {renderSub(data.comment, size, 'Comments')}
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            marginTop: 8,
            justifyContent: 'space-evenly',
          }}>
          {renderButtons(
            size,
            require('../../../assets/Images/like.png'),
            data.isLiked,
          )}
          {renderButtons(size, require('../../../assets/Images/pin.png'))}
          {renderButtons(
            size,
            require('../../../assets/Images/comment.png'),
            data.isCommented,
          )}
        </View>
      </View>
    </View>
  );
};

const renderImage = (data: Data, size) => {
  return (
    <View style={{width: '80%', aspectRatio: 1, alignItems: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center', marginBottom: 8}}>
        <View
          style={{
            height: '100%',
            aspectRatio: 1,
            borderRadius: 100,
            overflow: 'hidden',
          }}>
          <Image
            source={data.image}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      </View>
      <View
        style={{
          height: size === 'large' ? '35%' : '25%',
          width: '100%',
          alignItems: 'center',
          marginBottom: 8,

          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            padding: size === 'large' ? 8 : 4,
            borderRadius: 10,
            width: '95%',
            backgroundColor: colors.lightGray,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {renderSub(data.likes, size, 'Likes')}
          {renderSub(data.dislikes, size, 'Dislikes')}
          {renderSub(data.comment, size, 'Comments')}
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: size === 'large' ? '60%' : '50%',
            marginTop: 8,
            justifyContent: 'space-evenly',
          }}>
          {renderButtons(
            size,
            require('../../../assets/Images/like.png'),
            data.isLiked,
          )}
          {renderButtons(size, require('../../../assets/Images/pin.png'))}
          {renderButtons(
            size,
            require('../../../assets/Images/comment.png'),
            data.isCommented,
          )}
        </View>
      </View>
    </View>
  );
};

const renderPoll = (data: Data, size) => {
  return (
    <View
      style={{
        width: '80%',
        aspectRatio: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: size === 'large' ? fontSize.label : fontSize.text,
            color: colors.black,
            textAlign: 'center',
            marginTop: 8,
            fontWeight: 'bold',
            paddingHorizontal: 8,
          }}
          numberOfLines={2}>
          {data.question}
        </Text>
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          {data.answer?.map((ans) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize:
                      size === 'large' ? fontSize.text : fontSize.text - 2,
                    marginRight: 12,
                  }}>
                  {ans.label}
                </Text>
                <Bar
                  progress={ans.votes / data.totalVotes}
                  color={colors.black}
                  style={{height: size === 'large' ? 6 : 4}}
                  height={size === 'large' ? 6 : 4}
                  width={
                    size === 'large'
                      ? Dimensions.get('window').width * 0.25
                      : Dimensions.get('window').width * 0.15
                  }
                />
                <Text
                  style={{
                    fontSize:
                      size === 'large' ? fontSize.text : fontSize.text - 2,
                    marginLeft: 12,
                  }}>
                  {(ans.votes * 100) / data.totalVotes}%
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View
        style={{
          height: size === 'large' ? '35%' : '25%',
          width: '100%',
          alignItems: 'center',
          marginBottom: 8,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            padding: size === 'large' ? 8 : 4,
            borderRadius: 10,
            width: '95%',
            backgroundColor: colors.lightGray,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {renderSub(data.likes, size, 'Likes')}
          {renderSub(data.dislikes, size, 'Dislikes')}
          {renderSub(data.comment, size, 'Comments')}
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: size === 'large' ? '60%' : '50%',
            marginTop: 8,
            justifyContent: 'space-evenly',
          }}>
          {data.answer?.map((ans) => {
            console.log(ans);
            return renderPollButtons(size, ans.alias, ans.id === data.yourAns);
          })}
        </View>
      </View>
    </View>
  );
};

const renderViews = {
  poll: renderPoll,
  image: renderImage,
  text: renderText,
};

export default function BubbleBuilder({
  type,
  color,
  size,
  data,
  style,
  delay,
}: {
  type: 'text' | 'image' | 'poll',
  color: 'blue' | 'green' | 'pink' | 'yellow' | 'orange',
  size: 'small' | 'large',
  data: Data,
}) {
  const selectedBubble = bubble[color];
  const selectedWidth = sizes[size];
  const renderView = renderViews[type];
  console.log(renderView);
  return (
    <TouchableOpacity
      style={{
        width: selectedWidth,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      onPress={() => {
        if (type === 'poll') {
          navigate('Poll', {data: data});
        } else navigate('Comment', {data: data});
      }}>
      <Animatable.View
        useNativeDriver
        // animation={{
        //   0: {
        //     transform: [{translateX: 0}, {translateY: 0}, {scale: 1}],
        //   },
        //   0.2: {
        //     transform: [{translateX: 5}, {translateY: 5}, {scale: 0.95}],
        //   },
        //   0.4: {
        //     transform: [{translateX: 3}, {translateY: -2}, {scale: 0.9}],
        //   },
        //   0.6: {
        //     transform: [{translateX: 0}, {translateY: -2.5}, , {scale: 0.95}],
        //   },
        //   0.8: {
        //     transform: [{translateX: -5}, {translateY: 5}, {scale: 0.95}],
        //   },
        //   1: {
        //     transform: [{translateX: 0}, {translateY: 0}, {scale: 1}],
        //   },
        // }}
        // delay={delay}
        // easing="linear"
        // duration={10000}
        // iterationCount={100}
        style={{
          width: '100%',
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
          ...style,
        }}>
        <Image
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            position: 'absolute',
          }}
          source={selectedBubble}
        />
        {renderView(data, size)}
      </Animatable.View>
    </TouchableOpacity>
  );
}
