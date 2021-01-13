import React, {Component} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import MainContainer from '../../Components/MainContainer';
import {colors, fontSize} from '../../utils/Theme';

const notifs = [
  {
    id: 0,
    title: 'Comment',
    message: 'Testing the notifs or rvryittle thing',
    time: '1hr ago',
    isRead: true,
  },
  {
    id: 1,
    title: 'Dislike',
    message: 'Testing the notifs or rvryittle thing',
    time: '1hr ago',
    isRead: true,
  },
  {
    id: 2,
    title: 'Like',
    message: 'Testing the notifs or rvryittle thing',
    time: '1hr ago',
    isRead: false,
  },
  {
    id: 3,
    title: 'Comment',
    message: 'Testing the notifs or rvryittle thing',
    time: '1hr ago',
    isRead: false,
  },
  {
    id: 4,
    title: 'Comment',
    message: 'Testing the notifs or rvryittle thing',
    time: '1hr ago',
    isRead: false,
  },
  {
    id: 5,
    title: 'Comment',
    message: 'Testing the notifs or rvryittle thing',
    time: '1hr ago',
    isRead: false,
  },
];

const render = {
  Comment: {
    icon: require('../../assets/Images/comment.png'),
    color: '#45A300',
  },
  Like: {
    icon: require('../../assets/Images/like.png'),
    color: colors.primary,
  },
  Dislike: {
    icon: require('../../assets/Images/dislike.png'),
    color: '#FF5555',
  },
};

export default class Notification extends Component {
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
            source={require('../../assets/Images/cross.png')}
            style={{width: 20, aspectRatio: 1}}
            resizeMode="contain"
          />
          <View style={{paddingHorizontal: 16}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSize.label}}>
              Remove
            </Text>
            <Text style={{color: colors.grey}}>This Notification</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <Image
            source={require('../../assets/Images/remove.png')}
            style={{width: 20, aspectRatio: 1}}
            resizeMode="contain"
          />
          <View style={{paddingHorizontal: 16}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSize.label}}>
              Turn off notification
            </Text>
            <Text style={{color: colors.grey}}>For this post</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <Image
            source={require('../../assets/Images/flag.png')}
            style={{width: 20, aspectRatio: 1}}
            resizeMode="contain"
          />
          <View style={{paddingHorizontal: 16}}>
            <Text style={{fontWeight: 'bold', fontSize: fontSize.label}}>
              Report issue
            </Text>
            <Text style={{color: colors.grey}}>its having some issue</Text>
          </View>
        </View>
      </View>,
      {
        height: '30%',
        width: '100%',
      },
      true,
    );
  render() {
    return (
      <MainContainer headerComponent="back">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 36,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontSize.label + 4,
              color: colors.primary,
            }}>
            Notifications
          </Text>
          <Text
            style={{
              marginHorizontal: 0,
              fontSize: fontSize.text,
              alignSelf: 'center',
            }}>
            Clear All
          </Text>
        </View>
        {notifs.map((item) => {
          let myRender = [];

          if (item.title === 'Comment') myRender = render.Comment;
          else if (item.title === 'Like') myRender = render.Like;
          else if (item.title === 'Dislike') myRender = render.Dislike;

          return (
            <TouchableOpacity
              onPress={() => {
                item.isRead = true;
                this.forceUpdate();
              }}
              style={{
                backgroundColor: item.isRead
                  ? colors.background
                  : colors.primaryTrans,
                width: '85%',
                marginVertical: 8,
                borderRadius: 12,
                alignSelf: 'center',
                paddingHorizontal: 12,
                paddingVertical: 12,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: colors.background,
                  borderRadius: 32,
                  width: 50,
                  aspectRatio: 1,
                  justifyContent: 'center',
                }}>
                <Image
                  source={myRender.icon}
                  style={{
                    tintColor: myRender.color,
                    alignSelf: 'center',
                    height: '50%',
                    aspectRatio: 1,
                  }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 4,
                  paddingVertical: 4,
                  paddingTop: 12,
                }}>
                <Text
                  onPress={this.pop}
                  style={{
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    top: -14,
                    fontWeight: 'bold',
                    fontSize: fontSize.label,
                  }}>
                  ...
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: myRender.color}}>{item.title}</Text>
                  <Text style={{color: colors.grey}}>{item.time}</Text>
                </View>
                <Text>{item.message}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <FlatList />
      </MainContainer>
    );
  }
}
