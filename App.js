/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  Platform,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CustomButton from './native-components/button';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View>
            <Text
              style={styles.text}
            >
              Your current Platform is {Platform.OS + " " + Platform.Version}
            </Text>
          </View>
          <View style={styles.body}>
            <ImageBackground
              style={{ width: "100%", }}
              source={
                require("./images/UGC12951_HubbleShatz_2019.jpg")
              }
            >
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  !!!This is some text!!!
              </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="you can type over here"
                  defaultValue="text_input_default"
                />
                {/* <Image source={reactLogo} /> */}
              </View>
              <View
                style={styles.CustomButton}
              >
                <CustomButton
                
                 />
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const reactLogo = {
  uri: 'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png',
  width: 128,
  height: 128
}


const styles = StyleSheet.create({
  text: {
    color: "green"
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    color: 'yellow',
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    color: 'yellow',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    color: "yellow",
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'yellow'
    //    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  textInput: {
    color: "yellow",
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 1.5
  },
  CustomButton: {
    
  }
});

export default App;
