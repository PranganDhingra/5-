import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  ScrollView,
  Button,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';
import { RFValue } from 'react-native-responsive-fontsize';

export default class ContactUs extends Component {
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
        <MyHeader title="Contact Us" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          <ScrollView style={{ width: '100%' }}>
            {this.state.receivedBooksList.length === 0 ? (
              <View style={styles.subContainer}>
                <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 15,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  The contact page is here to provide feedback, concerns and
                  suggestions for the blog. This is where you can tell us what
                  you like and dislike about the blog as well as your thoughts
                  and ideas on how we can improve. You can also contact us if
                  you have a question or concern that needs answers.
                </Text>

                  <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 15,
                    fontWeight: '60',
                    color: '#6600A1',
                  }}>
                 Reach Us Out
                </Text>

                <View style={{ padding: 10, color: 'purple' }}>
                  <Button
                    title="Our Website"
                    onPress={() =>
                      Linking.openURL('https://prangandhingra.github.io/54-/')
                    }
                  />
                </View>

                <View style={{ padding: 10, color: 'purple' }}>
                  <Button
                    title="Whatsapp Us"
                    onPress={() =>
                      Linking.openURL(
                        'whatsapp://send?text=Hello!&phone=+918950264529'
                      )
                    }
                  />
                </View>

                <View style={{ padding: 10, color: 'purple' }}>
                  <Button
                    title="Email Us"
                    onPress={() =>{
                      Linking.openURL('mailto:prangandhingra18@gmail.com')
                    }
                   } />
                </View>

                <View style={{ padding: 10, color: 'purple' }}>
                  <Button
                    title="Review Us"
                    onPress={() =>
                      Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLScZpIoLp57ZkYSJiNj6IpqBszl_ljAiUkxgRFXPFnSFH7aHIw/viewform'
                      )
                    }
                  />
                </View>
                  
              </View>
            ) : (
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.receivedBooksList}
                renderItem={this.renderItem}
              />
            )}
          </ScrollView>
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
