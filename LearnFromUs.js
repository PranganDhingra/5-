import React, { Component, useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
  Picker,
  Button,
  Linking,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import { SearchBar, ListItem, Input } from 'react-native-elements';
import MyHeader from '../components/MyHeader';

export default class AboutUsScreen extends Component {
  state = { user: '' };
  updateUser = (user) => {
    this.setState({ user: user });
  };

  //render Items  functionto render the books from api

  render() {
    if (this.state.IsBookRequestActive === true) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.1,
            }}>
            <MyHeader title="Book Status" navigation={this.props.navigation} />
          </View>
          <View style={styles.ImageView}>
            <Image
              source={{ uri: this.state.requestedImageLink }}
              style={styles.imageStyle}
            />
          </View>

          <View style={styles.bookstatus}>
            <Text
              style={{
                fontSize: RFValue(20),
              }}>
              Name of the book
            </Text>
            <Text style={styles.requestedbookName}>
              {this.state.requestedBookName}
            </Text>
            <Text style={styles.status}>Status</Text>
            <Text style={styles.bookStatus}>{this.state.bookStatus}</Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.sendNotification();
                this.updateBookRequestStatus();
                this.receivedBooks(this.state.requestedBookName);
              }}>
              <Text style={styles.buttontext}>Book Recived</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}>
          <MyHeader title="Learn From Us" navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 0.9 }}>
          <ScrollView style={{ width: '100%' }}>
            <View>
              <Text
                style={{
                  marginTop: 20,
                  marginBottom: 15,
                  fontWeight: 'bold',
                  color: '#6600A1',
                }}>
                Coures We Offer
              </Text>
            </View>
            <View>
              <Picker
                selectedValue={this.state.user}
                onValueChange={this.updateUser}>
                <Picker.Item label="Basic" value="Basic" />
                <Picker.Item label="Advance" value="Advance" />
                <Picker.Item label="Professional" value="Professional" />
              </Picker>
              <Text style={styles.text}>{this.state.user}</Text>

              <View>
                <Text
                  style={{
                    marginTop: 5,
                    marginBottom: 15,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  WHAT YOU WILL LEARN:-
                </Text>

                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  Basic
                </Text>

                <Text
                  style={{
                    fontWeight: '40',
                    color: '#6600A1',
                  }}>
                  What is Tarot? How it works and Basic Introduction to it and
                  explanation of all the cards.
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  Advance
                </Text>

                <Text
                  style={{
                    fontWeight: '40',
                    color: '#6600A1',
                  }}>
                  Brief explanation and hidden meaning of each card.
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  Professional
                </Text>

                <Text
                  style={{
                    marginTop: 0,
                    fontWeight: '40',
                    color: '#6600A1',
                  }}>
                  How to predict time with Tarot and how Tarot is related to
                  numerology and astrology and how Tarot affect numerology and
                  astrology.
                </Text>

              </View>
            </View>
            {this.state.showFlatlist ? (
              <FlatList
                data={this.state.dataSource}
                renderItem={this.renderItem}
                enableEmptySections={true}
                style={{ marginTop: RFValue(10) }}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  style={[styles.button, { marginTop: RFValue(30) }]}
                  onPress={() => {
                    alert('Request Added Successfully');
                  }}>
                  <Text style={styles.requestbuttontext}>Request</Text>
                </TouchableOpacity>

                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  Fill this Google Form to Learn From Us
                </Text>

                 <View style={{ padding: 10, color: 'purple' }}>
                  <Button
                    title="Learn From us"
                    onPress={() =>
                      Linking.openURL(
                        'https://docs.google.com/forms/d/e/1FAIpQLSeC41Ft8gB83JlGEyLaYOBIhybaRYAoOLXJGMtxhwnG0lW7Vg/viewform'
                      )
                    }
                  />
                </View>

                <Text
                  style={{
                    marginTop: 20,
                    marginBottom: 15,
                    fontWeight: '20',
                    color: '#6600A1',
                  }}>
                  With the help of our websites and apps you can learn
                  practically anything at your own pace and in the comfort of
                  your own home. It’s hard to imagine how much easier it can
                  possibly be. Online Tarot reading is available here at the
                  Psychic Source. If you enjoy reading tarot cards and would
                  like to learn more about the cards, read through our spread
                  along with other related topics. For those who are not
                  interested in learning how to read tarot cards, we still
                  provide online readings for a variety of issues such as:
                  relationships, career, work life balance etc.
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  What is Tarot? How does it Works and How to Learn Tarot Cards
                  Online?
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontWeight: '50',
                    color: '#6600A1',
                  }}>
                  Tarot is a set of wooden or cardboard cards with pictures on
                  one side and symbolic illustrations on the other. Often used
                  for fortune telling. So, We are here to provide anything you
                  could possibly want to know about the cards, including how
                  each card represents a different element of spiritual energy
                  and change, what symbols are found in each court card, what
                  readings can be performed using each card's assigned number or
                  suit signifying its subject matter. Tarot can be found in any
                  form of literature, from mythology to history. The oldest
                  known mention of a Tarot card is the 16th century. The Tarot
                  deck contains 78 cards and is divided into four suits: Cups,
                  Pentacles, Swords and Wands. The suits are derived from the
                  four elements: cups represent water; pentacles represent earth
                  or metal; swords represent air or fire; and wands represent
                  wood or life. There is a minor suit of cards called the court
                  cards, which depict people known for their wisdom and virtue.
                  The reader/crafter counts downwards from 22 (the Ace) to 11
                  (the Minor Arcana). The origin of the Tarot is generally
                  considered to be in Renaissance Italy, and some historians
                  assert that it was invented there, although there is also
                  evidence of earlier use. In actual fact, the exact history of
                  Tarot cards is obscure. There are many books on the topic of
                  card reading and Tarot readings in general. If this activity
                  interests you, you can learn how to engage in it online or
                  work with a live psychic who will be able to tell you more
                  about what your future holds using more than just any old deck
                  of cards. The information below is written for beginners who
                  are looking to learn how to use the cards as a divination
                  tool. Tarot reading is often referred to as fortune telling,
                  because it can predict your future or answer questions about
                  your past. There are many reasons why you might want to do
                  this, but in short, you will be able to determine what phase
                  of life you are in and what elements you need to be working on
                  in order for the transition to be favorable. In other words, a
                  Tarot reading tells you the past and present that have led up
                  to that moment, and then it helps make that there will not be
                  any negative side effects or problems from occurring during
                  that phase of your life.
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formTextInput: {
    width: '75%',
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
  },
  ImageView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imageStyle: {
    height: RFValue(150),
    width: RFValue(150),
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: RFValue(10),
  },
  bookstatus: {
    flex: 0.4,
    alignItems: 'center',
  },
  requestedbookName: {
    fontSize: RFValue(30),
    fontWeight: '500',
    padding: RFValue(10),
    fontWeight: 'bold',
    alignItems: 'center',
    marginLeft: RFValue(60),
  },
  status: {
    fontSize: RFValue(20),
    marginTop: RFValue(30),
  },
  bookStatus: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
    marginTop: RFValue(10),
  },
  buttonView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: '#fff',
  },
  touchableopacity: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '90%',
  },
  requestbuttontext: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
  button: {
    width: '75%',
    height: RFValue(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(50),
    backgroundColor: '#6600A1',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
