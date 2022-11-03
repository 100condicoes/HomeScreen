import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Switch } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,

    };
  }
  toggleSwitch(){
    const previus_state = this.state.isEnabled;
    this.setState({isEnabled: !previus_state, light_theme : previus_state});
  }
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.iconContainer}>
                   <Ionicons style={styles.appIcon}
                    name="notifications"
                    size= {130}
                    color={"black"}
                  />
                    <View style={styles.titleContainer}>
                      <Text style={styles.titleContainerText}> Emergention </Text>
                    </View>

                    <View style={styles.cardContainer}>
                      <Text style={styles.cardContainerText}> Config </Text>
                      <Text style={styles.ContainerText}> Tema </Text>
                      <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={this.toggleSwitch}
                        value={this.state.isEnabled}
                        style={{marginBottom: 50}}
                        />         
                    </View>
                  </View>
                 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
      alignItems: "center",
      height:"100%"
    },
    containerLight: {
      backgroundColor: "white"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
    },
    iconContainer: {
      marginTop: 20,
      backgroundColor:"#807D7D",
      width: "90%",
      height:"90%",
      borderRadius: 20,
      alignItems: 'center'
    },
    appIcon: {
     alignItems: 'center'
    },
    cardContainer: {
      marginTop: 30,
      backgroundColor:"#000",
      width: "90%",
      height:"65%",
      borderRadius: 20,
      alignItems: "center"
    },
    cardContainerText: {  
      color: "#FFF",
      marginTop: 20,
      fontSize: 50,
    },
    ContainerText: {
      color: "#FFF",
      marginRight: 200,
      marginTop: 30,
      fontSize: 30,
    },
    titleContainer: {
      backgroundColor: "#FFF",
      width: "75%",
      height:"10%",
      
    },
    titleContainerText:{
      fontSize: 45,
    },

  });