import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';
import { RFValue } from 'react-native-responsive-fontsize';

export default class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      receivedBooksList: [],
    };
    this.requestRef = null;
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.book_name}
        subtitle={item.bookStatus}
        leftElement={
          <Image
            style={styles.LiImage}
            source={{
              uri: item.image_link,
            }}
          />
        }
        titleStyle={styles.titlestyle}
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="About Us" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.receivedBooksList.length === 0 ? (
            <View style={styles.subContainer}>
              <ScrollView style={{ width: '100%' }}>
                 <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  Hey Everyone, This is Prangan Dhingra the Tarot Card Reader.
                  We love engaging with people and sharing our expertise. We
                  believe deeply in making every customer happy –after all, it's
                  those customers who are helping us grow and be successful.
                  </Text>
                  <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  bliss. believe. beaming. beautiful. beneficial
                </Text>

                 <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  Why should you trust us?
                  </Text>
                  
                   <Text
                  style={{
                    marginBottom: 10,
                    fontWeight: '20',
                    color: '#6600A1',
                  }}>
                   We have been teaching various cousres
                  of Tarot for years. Our goal is to provide quality education
                  services to our students at affordable prices. We only learn
                  from what other people teach us and want to share the
                  knowledge with others, so that they can also learn things in
                  their own time. We promise 100% customer satisfaction because
                  we are committed in helping every individual who enrolls in
                  our courses. We will do everything within our power not just
                  to help them succeed, but also make sure they have a fun
                  learning experience that makes them feel satisfied with what
                  they have learned.
                </Text>

              </ScrollView>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.receivedBooksList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  LiImage: {
    height: RFValue(50),
    width: RFValue(50),
  },
  titlestyle: {
    color: 'black',
    fontWeight: 'bold',
  },
});
