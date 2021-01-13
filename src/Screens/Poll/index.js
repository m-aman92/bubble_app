import React, {Component} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {Bar} from 'react-native-progress';
import MainContainer from '../../Components/MainContainer';
import {colors, fontSize} from '../../utils/Theme';

export default class Poll extends Component {
  renderPollButtons = (label, isActive, onPress) => {
    return (
      <TouchableOpacity
        style={{
          width: 25,
          aspectRatio: 1,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: isActive ? colors.primary : colors.black,
          backgroundColor: isActive ? colors.primary : 'transparent',
          marginRight: 16,
        }}>
        <Text
          style={{
            fontSize: fontSize.lable,
            color: isActive ? colors.background : colors.black,
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      props: {
        route: {
          params: {data},
        },
      },
    } = this;
    return (
      <MainContainer
        headerComponent="..."
        style={{backgroundColor: colors.primaryEm}}>
        <View
          style={{
            marginTop: 16,
            backgroundColor: colors.background,
            padding: 8,
            paddingVertical: 24,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: fontSize.label + 4,
              paddingHorizontal: 24,
              marginBottom: 24,
            }}>
            {data.question}
          </Text>

          {data.answer?.map((ans) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                  justifyContent: 'center',
                }}>
                {this.renderPollButtons(ans.alias, ans.id === data.yourAns)}
                <Text
                  style={{
                    fontSize: fontSize.label,
                    marginRight: 12,
                  }}>
                  {ans.label}
                </Text>
                <Bar
                  progress={ans.votes / data.totalVotes}
                  color={colors.primary}
                  style={{height: 12}}
                  height={12}
                  width={Dimensions.get('window').width * 0.3}
                  unfilledColor={colors.secondary}
                />
                <TouchableOpacity
                  style={{
                    width: '20%',
                    backgroundColor:
                      ans.id === data.yourAns
                        ? colors.primary
                        : colors.primaryEm,
                    padding: 8,
                    borderRadius: 20,
                    marginLeft: 16,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: fontSize.label,
                      color:
                        ans.id === data.yourAns
                          ? colors.background
                          : colors.black,
                    }}>
                    {ans.id === data.yourAns ? 'Voted' : 'Vote'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </MainContainer>
    );
  }
}
