import React from "react";
import { StatusBar, View, Image } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import bg from '../assets/bg.png';
import logo from '../assets/rata.png';



export default class HomeScreen extends React.Component {
  render() {
    return (
                    <Image source={bg} style={styles.imageContainer}>
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          

            <View style={{alignItems: 'center', marginTop: 50, backgroundColor: 'transparent'}}>
            <Text >IT Info</Text>
            </View>
            <View style={styles.logoContainer}>
            <Image 
            resizeMode="contain"
            source={logo}
            style={styles.logo}
            />
            </View>


          
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text>Chat con tus compañeros</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text>Ir al Mapa</Text>
          </Button>
        </Content>
      </Container>
      
                  </Image>
    );
  }
}


import { StyleSheet, Dimensions, Platform } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: null,
        height: null
    },
    logoContainer: {
//        flex: 1,
        marginTop: deviceHeight / 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
//        flexDirection: 'row'
    },
    logo: {
//        position: 'absolute',
//        left: (Platform.OS === 'android') ? 40 : 50,
//        top: (Platform.OS === 'android') ? 35 : 60,
//        width: deviceWidth / 5,
        height: 300,
//        flex: 1,
//        width: 150
        
        
    },
    text: {
        color: '#D8D8D8',
        bottom: 6,
        fontSize: 45
    }
    
});
