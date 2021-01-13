import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {colors, fontSize} from '../../utils/Theme';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Header from '../../Components/Header';
import MainContainer from '../../Components/MainContainer';

const comments = [
  {
    index: 1,
    comment:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ',
    parentIndex: null,
    time: '24m',
  },
  {
    index: 2,
    comment: 'This is my message',
    parentIndex: null,
    time: '24m',
  },
  {
    index: 3,
    comment: 'This is reply',
    parentIndex: 2,
    time: '24m',
  },
  {
    index: 4,
    comment:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ',
    parentIndex: null,
    time: '24m',
  },
  {
    index: 5,
    comment:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ',
    parentIndex: 1,
    time: '24m',
  },
  {
    index: 6,
    comment: 'Lorem ipsum',
    parentIndex: 1,
    time: '24m',
  },
];

export default function Comment({
  route: {
    params: {data},
  },
}) {
  const [selectedImage, setselectedImage] = useState('');

  return (
    <MainContainer
      headerComponent="..."
      style={{backgroundColor: colors.primaryEm}}>
      <ScrollView>
        {data.text ? (
          <Text
            style={{
              width: '85%',
              height: Dimensions.get('window').height * 0.23,
              alignSelf: 'center',
              borderRadius: 12,
              marginVertical: 12,
              fontSize: fontSize.label,
              paddingHorizontal: 12,
              borderWidth: 1,
              borderColor: colors.primary,
            }}>
            {data.text}
          </Text>
        ) : (
          <Image
            style={{
              width: '85%',
              height: Dimensions.get('window').height * 0.23,
              alignSelf: 'center',
              borderRadius: 12,
              marginVertical: 12,
            }}
            source={data.image}
          />
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '85%',
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: fontSize.label,
                color: colors.black,
              }}>
              {data.likes}
            </Text>
            <Text
              style={{
                fontSize: fontSize.label - 2,
                color: colors.darkGray,
                marginLeft: 4,
                marginRight: 8,
                alignSelf: 'center',
              }}>
              Likes
            </Text>
            <Text
              style={{
                fontSize: fontSize.label,
                color: colors.black,
              }}>
              {data.dislikes}
            </Text>
            <Text
              style={{
                fontSize: fontSize.label - 2,
                color: colors.darkGray,
                marginLeft: 4,
                marginRight: 8,
                alignSelf: 'center',
              }}>
              Dislikes
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image source={require('../../assets/Images/like.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{marginLeft: 12}}
                source={require('../../assets/Images/dislike.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            fontSize: fontSize.label,
            color: colors.black,
            marginVertical: 12,
            marginHorizontal: 34,
          }}>
          View {data.comment - 5} previous comments..
        </Text>
        {comments.map((item) => {
          if (!item.parentIndex)
            return (
              <View style={{marginLeft: 50, marginRight: 24}}>
                <Text
                  style={{
                    fontSize: fontSize.label,
                    color: colors.black,
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    backgroundColor: colors.background,
                    borderRadius: 12,
                    overflow: 'hidden',
                    // width: 'auto',
                    // backgroundColor: colors.background,
                  }}>
                  {item.comment}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 12,
                    marginLeft: 8,
                    // borderWidth: 1,
                  }}>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontSize.text,
                      alignSelf: 'center',
                      marginRight: 24,
                    }}>
                    {item.time}
                  </Text>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontSize.text,
                      alignSelf: 'center',
                      marginRight: 24,
                    }}>
                    Like
                  </Text>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontSize.text,
                      alignSelf: 'center',
                      marginRight: 24,
                    }}>
                    Dislike
                  </Text>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: fontSize.text,
                      alignSelf: 'center',
                      marginRight: 24,
                    }}>
                    Reply
                  </Text>
                  <View
                    style={{
                      justifyContent: 'flex-end',

                      // borderWidth: 1,
                      flex: 1,
                      right: 8,
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: fontSize.text,
                        alignSelf: 'center',
                        marginRight: 4,
                      }}>
                      2
                    </Text>
                    <Image
                      style={{
                        tintColor: colors.primary,
                        width: 10,
                      }}
                      source={require('../../assets/Images/like.png')}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                {comments.map((childItem) => {
                  if (childItem.parentIndex === item.index)
                    return (
                      <View style={{marginLeft: 46}}>
                        <Text
                          style={{
                            fontSize: fontSize.label,
                            color: colors.black,
                            paddingVertical: 8,
                            paddingHorizontal: 8,
                            backgroundColor: colors.background,
                            borderRadius: 12,
                            overflow: 'hidden',
                          }}>
                          {childItem.comment}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginBottom: 12,
                            // borderWidth: 1,
                          }}>
                          <Text
                            style={{
                              color: colors.black,
                              fontSize: fontSize.text,
                              alignSelf: 'center',
                              marginRight: 24,
                            }}>
                            {childItem.time}
                          </Text>
                          <Text
                            style={{
                              color: colors.black,
                              fontSize: fontSize.text,
                              alignSelf: 'center',
                              marginRight: 24,
                            }}>
                            Like
                          </Text>
                          <Text
                            style={{
                              color: colors.black,
                              fontSize: fontSize.text,
                              alignSelf: 'center',
                              marginRight: 24,
                            }}>
                            Dislike
                          </Text>
                          <Text
                            style={{
                              color: colors.black,
                              fontSize: fontSize.text,
                              alignSelf: 'center',
                              marginRight: 24,
                            }}>
                            Reply
                          </Text>
                          <View
                            style={{
                              justifyContent: 'flex-end',

                              // borderWidth: 1,
                              flex: 1,
                              right: 16,
                              flexDirection: 'row',
                            }}>
                            <Text
                              style={{
                                color: colors.primary,
                                fontSize: fontSize.text,
                                alignSelf: 'center',
                                marginRight: 4,
                              }}>
                              2
                            </Text>
                            <Image
                              style={{
                                tintColor: colors.primary,
                                width: 10,
                              }}
                              source={require('../../assets/Images/like.png')}
                              resizeMode="contain"
                            />
                          </View>
                        </View>
                      </View>
                    );
                })}
              </View>
            );
        })}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 12,
            backgroundColor: colors.primaryTrans,
            padding: 16,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 20,
          }}>
          <TextInput placeholder="Write your comment..." />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                launchImageLibrary(
                  {mediaType: 'photo', quality: 0.8},
                  (res) => {
                    if (!res.didCancel)
                      setselectedImage({selectedImage: res.uri});
                  },
                );
              }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/Images/camera.png')}
                style={{
                  height: 18,
                  width: 20,
                  tintColor: colors.darkGray,
                  marginRight: 24,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={require('../../assets/Images/smile.png')}
                style={{
                  height: 18,
                  width: 20,
                  tintColor: colors.darkGray,
                  marginRight: 24,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={require('../../assets/Images/send.png')}
                style={{
                  height: 18,
                  width: 20,
                  tintColor: colors.primary,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </MainContainer>
  );
}
