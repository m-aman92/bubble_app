import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../Components/Button';
import Chip from '../../Components/Chip';
import MainContainer from '../../Components/MainContainer';
import {colors, fontSize, shadow} from '../../utils/Theme';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        id: 2,
        label: 'Add Poll',
      },
      selectedImage: '',
      selectedCat: 0,
      selectedBubble: 0,
      answer: ['', ''],
    };
  }

  renderAddButtons = (label, image, isActive, onPress) => {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: isActive ? colors.primary : colors.black,
          backgroundColor: colors.background,
          ...shadow.low,
        }}
        onPress={onPress}>
        <Image
          style={{
            width: 15,
            aspectRatio: 1,
            resizeMode: 'contain',
            marginRight: 4,
            tintColor: isActive ? colors.primary : colors.black,
          }}
          source={image}
        />
        <Text
          style={{
            fontSize: fontSize.text,
            color: isActive ? colors.primary : colors.black,
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  renderBubble = (image, isActive, onPress) => {
    return (
      <TouchableOpacity
        style={{
          width: 40,
          aspectRatio: 1,
          borderRadius: 20,
          overflow: 'hidden',
          marginRight: 12,

          ...(isActive ? {borderWidth: 1, borderColor: colors.primary} : {}),
        }}
        onPress={onPress}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={image}
        />
      </TouchableOpacity>
    );
  };

  renderInput = (height) => {
    return (
      <TextInput
        multiline
        style={{
          height: height * 0.4,
          backgroundColor: colors.primaryTrans,
          borderRadius: 20,
          marginTop: 12,
          textAlignVertical: 'top',
          paddingHorizontal: 20,
        }}
        placeholder="Add Text"
      />
    );
  };
  renderImage = (image, height) => {
    return (
      <View
        style={{
          height: height * 0.4,
          backgroundColor: colors.primaryTrans,
          borderRadius: 20,
          marginTop: 12,
          width: '100%',
          padding: 20,
        }}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          source={image}
        />
      </View>
    );
  };

  renderPoll = (height) => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: height * 0.4,
          backgroundColor: colors.primaryTrans,
          borderRadius: 20,
          marginTop: 12,
          width: '100%',
        }}
        contentContainerStyle={{padding: 20}}
        nestedScrollEnabled>
        <View
          style={{
            padding: 12,
            paddingVertical: 8,
            backgroundColor: colors.background,
            borderRadius: 10,
            width: '100%',
          }}>
          <Text style={{fontSize: fontSize.text, color: colors.secondary}}>
            Enter Question
          </Text>
          <TextInput
            style={{fontSize: fontSize.text + 2, padding: 2, margin: 0}}
          />
        </View>
        {this.state.answer.map((ans, index) => {
          return (
            <View
              style={{
                padding: 12,
                paddingVertical: 8,
                backgroundColor: colors.background,
                borderRadius: 10,
                width: '100%',
                marginTop: 8,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  fontSize: fontSize.text + 2,
                  padding: 2,
                  margin: 0,
                  flex: 1,
                }}
                placeholder={'Answer ' + (index + 1)}
              />
              <Icon
                name="close"
                size={fontSize.label + 8}
                color="red"
                onPress={() => {
                  let ans = [...this.state.answer];
                  ans.splice(index, 1);
                  this.setState({answer: ans});
                }}
              />
            </View>
          );
        })}
        <TouchableOpacity
          style={{
            width: '100%',
            paddingVertical: 16,
            borderWidth: 1,
            borderColor: colors.primary,
            marginVertical: 12,
            borderRadius: 10,
          }}
          onPress={() => {
            let ans = [...this.state.answer];
            ans.push('');
            this.setState({answer: ans});
          }}>
          <Text
            style={{
              fontSize: fontSize.label,
              color: colors.primary,
              textAlign: 'center',
            }}>
            Add More Answer
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  render() {
    const {height, width} = Dimensions.get('window');
    const {
      state: {selected, selectedImage, selectedCat, selectedBubble},
    } = this;
    return (
      <MainContainer headerComponent="label" headerLabel="Post a Bubble">
        <ScrollView
          style={{marginHorizontal: 16}}
          showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontWeight: 'bold',
              color: colors.black,
              fontSize: fontSize.label,
            }}>
            {selected.label}
          </Text>
          {selected.id === 0 && this.renderInput(height)}
          {selected.id === 1 && this.renderImage({uri: selectedImage}, height)}
          {selected.id === 2 && this.renderPoll(height)}
          <View
            style={{
              width: '100%',
              marginVertical: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 1,
            }}>
            {this.renderAddButtons(
              'Add Text',
              require('../../assets/Images/text.png'),
              selected.id === 0,
              () => {
                this.setState({
                  selected: {
                    id: 0,
                    label: 'Add Text',
                  },
                });
              },
            )}
            {this.renderAddButtons(
              'Add Image',
              require('../../assets/Images/picture.png'),
              selected.id === 1,
              () => {
                this.setState({
                  selected: {
                    id: 1,
                    label: 'Add Image',
                  },
                });
                launchImageLibrary(
                  {mediaType: 'photo', quality: 0.8},
                  (res) => {
                    if (!res.didCancel) this.setState({selectedImage: res.uri});
                  },
                );
              },
            )}
            {this.renderAddButtons(
              'Add Poll',
              require('../../assets/Images/poll.png'),
              selected.id === 2,
              () => {
                this.setState({
                  selected: {
                    id: 2,
                    label: 'Add Poll',
                  },
                });
              },
            )}
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 12,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: fontSize.label,
                color: colors.black,
                marginRight: 8,
              }}>
              Category
            </Text>
            <ScrollView horizontal>
              <Chip
                label="Ask Questions"
                image={require('../../assets/Images/question.png')}
                isActive={selectedCat === 0}
                onPress={() => {
                  this.setState({selectedCat: 0});
                }}
              />
              <Chip
                label="Sports"
                image={require('../../assets/Images/sport.png')}
                isActive={selectedCat === 1}
                onPress={() => {
                  this.setState({selectedCat: 1});
                }}
              />
            </ScrollView>
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 12,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: fontSize.label,
                color: colors.black,
                marginRight: 8,
              }}>
              Bubble
            </Text>
            <ScrollView horizontal>
              {this.renderBubble(
                require('../../assets/Images/blue-bubble.png'),
                selectedBubble === 0,
                () => {
                  this.setState({selectedBubble: 0});
                },
              )}
              {this.renderBubble(
                require('../../assets/Images/green-bubble.png'),
                selectedBubble === 1,
                () => {
                  this.setState({selectedBubble: 1});
                },
              )}
              {this.renderBubble(
                require('../../assets/Images/pink-bubble.png'),
                selectedBubble === 2,
                () => {
                  this.setState({selectedBubble: 2});
                },
              )}
              {this.renderBubble(
                require('../../assets/Images/yellow-bubble.png'),
                selectedBubble === 3,
                () => {
                  this.setState({selectedBubble: 3});
                },
              )}
            </ScrollView>
          </View>
          <Text
            style={{
              textAlign: 'center',
              color: colors.primary,
              opacity: 0.7,
              fontSize: fontSize.label,
            }}>
            Note: Your bubble default expiry date is 48 hours, it will increase
            if users liked it.
          </Text>
          <Button label="Post" style={{width: '100%', marginVertical: 12}} />
        </ScrollView>
      </MainContainer>
    );
  }
}
