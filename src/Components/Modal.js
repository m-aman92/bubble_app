import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {colors} from '../utils/Theme';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const MyModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {title,text,image} = props.data;
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: width*0.08,
              width: '90%',
              backgroundColor: 'white',
              borderRadius: 10,
              maxHeight:'90%',
            }}>
            <Text style={styles.heading}>{title}</Text>
            <Image
              resizeMode={'contain'}
              style={{
                width: height*0.15,
                height:height*0.15,
                alignSelf: 'center',
                marginVertical: '8%'
              }}
              source={image}/>
            <ScrollView >
            <View
              style={{
                backgroundColor: '#F8F8F8',
                padding: '5%',
                borderRadius: 10,
                flex:1
              }}>
              <Text style={{fontWeight: '300',textAlign:'center',fontSize:height*0.02,}}>
                {text}
              </Text>
            </View>
            </ScrollView>
            <TouchableOpacity
              style={{...styles.openButton, marginTop: '5%'}}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text onPress={() => setModalVisible(!modalVisible)}>
        {props.children}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.9,
    alignSelf: 'center',
  },
  openButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '100%',
    minHeight: 40,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:height*0.02,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:height*0.02,
  },
  heading: {
    fontSize:height*0.03,
    color: colors.primary,
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default MyModal;
