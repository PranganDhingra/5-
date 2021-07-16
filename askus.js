import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  Button
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class AskUs extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      requestedBooksList: [],
    };
    this.requestRef = null;
  }

  render() {
    return (
      <View style={styles.view}>
        <MyHeader title="Ask Us " navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.requestedBooksList.length === 0 ? (
            <View style={styles.subContainer}>
              <ScrollView style={{ width: '100%' }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  First 3 mins chat for free free free!!
                </Text>

                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  Every Question Solution Available
                </Text>

                <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 15,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  We provide online tarot readings at affordable prices. Contact
                  us for a consultation.
                </Text>

                <View style={{ padding: 10, color: 'purple' }}>
                  <Button
                    title="Ask Your Questions Now!!"
                    onPress={() =>{
                      Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSd4waipP2ce9hnMoC-tEarUNhCupeV7wOWCb-DfkUV3n4wRPg/viewform')
                    }
                   } />
                </View>
                
                <Text
                  style={{
                    marginBottom: 10,
                    fontWeight: '50',
                    color: '#6600A1',
                  }}>
                  Tired of paying the hefty price? We provide first reading for
                  free to see if it's a good fit! Not everyone has the time,
                  money, or patience to be tutored in-person. If you're looking
                  for an easy way out, we provide first reading for free! Trust
                  us. It's hard to find a someone who will reply back within 24
                  hours these days and we can pretty much guarantee your
                  questions will get answered ASAP since we are so passionate
                  about you all. Promise!!
                </Text>
                
                <Text
                  style={{
                    marginBottom: 15,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  What are you waiting for? Get your question answered today!
                </Text>

                  <View style={{ padding: 10, color: 'purple' }}>
                  <Button
                    title="Find a Slot for Yourself"
                    onPress={() =>{
                      Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSfTyJJnRNpfo1Nq4kMMBMT8MiBugbIXdkJsUJ2pC4ffbYz07w/viewform')
                    }
                   } />
                </View>

                <Text
                  style={{
                    marginBottom: 10,
                    fontWeight: 'bold',
                    color: '#6600A1',
                  }}>
                  
                </Text>

                 <Text
                  style={{
                    marginBottom: 10,
                    fontWeight: '40',
                    color: '#6600A1',
                  }}>
                  Tarot readings are one of the most popular forms of fortune telling in the world. There are numerous free tarot readings sites out there but very few that give accurate and quality reading for people who seek advice on their latest relationship dilemma, career choice or general life direction.
To provide you with a personalised service we offer our first tarot reading for free!
                </Text>

                <Text
                  style={{
                    marginBottom: 10,
                    fontWeight: '50',
                    color: '#6600A1',
                  }}>
                  This blog post is about tarot cards, asking your own
                  questions, and receiving answers. You may be thinking why in
                  the world would you want to ask the deck of cards a question?
                  Well it's all about getting insights as to what is happening
                  in your life from someone who isn't you or anyone else you
                  know. This can help bring clarity on what's going on or give
                  an understanding that makes sense of something that doesn't
                  make any sense at all. It can also help provide advice for a
                  situation that needs some guidance... which basically includes
                  everything! If you're looking for advice on how to best move
                  forward, please ask us via email or find us on our website.
                </Text>

              </ScrollView>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedBooksList}
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
    backgroundColor: '#6600A1',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
