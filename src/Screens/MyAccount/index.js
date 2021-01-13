import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../Components/Button';
import MainContainer from '../../Components/MainContainer';
import {colors, fontSize, iconSize} from '../../utils/Theme';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserInputs: false,
    };
  }

  render() {
    return (
      <MainContainer headerComponent="back">
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: fontSize.label + 4,
            color: colors.primary,
            paddingHorizontal: 20,
          }}>
          My Account
        </Text>
        <ScrollView style={{paddingHorizontal: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontSize.text,
              color: colors.black,
              marginRight: 8,
              marginTop: 12,
            }}>
            Username & Password
          </Text>
          {this.state.showUserInputs ? (
            <>
              <View
                style={{
                  padding: 8,
                  alignSelf: 'center',
                  borderRadius: 10,
                  width: '100%',
                  marginTop: 12,
                }}>
                <Text style={{fontSize: fontSize.text - 2, marginBottom: 2}}>
                  Username
                </Text>
                <TextInput
                  style={{fontSize: fontSize.text, margin: 0, padding: 0}}
                />
              </View>
              <View
                style={{
                  padding: 8,
                  alignSelf: 'center',
                  borderRadius: 10,
                  width: '100%',
                  marginTop: 0,
                }}>
                <Text style={{fontSize: fontSize.text - 2, marginBottom: 2}}>
                  Password
                </Text>
                <TextInput
                  style={{fontSize: fontSize.text, margin: 0, padding: 0}}
                  secureTextEntry
                />
              </View>
            </>
          ) : (
            <Button
              label="Generate Username & Password"
              type="unfilled"
              style={{width: '100%', marginVertical: 12}}
              onPress={() => {
                this.setState({showUserInputs: true});
              }}
            />
          )}
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontSize.text,
              color: colors.black,
              marginRight: 8,
              marginTop: 12,
            }}>
            Language
          </Text>
          <TouchableOpacity
            style={{
              padding: 12,
              alignItems: 'center',
              justifyContent: 'space-between',
              alignSelf: 'center',
              borderRadius: 10,
              width: '100%',
              marginVertical: 12,
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: fontSize.text}}>English Language</Text>
            <Icon
              name="chevron-down"
              size={fontSize.label}
              color={colors.black}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fontSize.text,
              color: colors.black,
              marginRight: 8,
              marginTop: 12,
            }}>
            Age & Gender
          </Text>
          <TouchableOpacity
            style={{
              padding: 12,
              alignSelf: 'center',
              borderRadius: 10,
              width: '100%',
              marginTop: 12,
            }}>
            <Text style={{fontSize: fontSize.text - 2, marginBottom: 2}}>
              Age
            </Text>
            <Text style={{fontSize: fontSize.text}}>18 Years</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 12,
              alignSelf: 'center',
              borderRadius: 10,
              width: '100%',
              marginVertical: 4,
            }}>
            <Text style={{fontSize: fontSize.text - 2, marginBottom: 2}}>
              Gender
            </Text>
            <Text style={{fontSize: fontSize.text}}>Male</Text>
          </TouchableOpacity>

          <Text
            style={{
              textAlign: 'center',
              color: colors.primary,
              opacity: 0.7,
              fontSize: fontSize.text + 2,
            }}>
            Note: No one will see these information except you. These will be
            used to show you more personalized posts from your area.
          </Text>
          <Button label="Save" style={{marginVertical: 12, width: '100%'}} />
        </ScrollView>
      </MainContainer>
    );
  }
}
