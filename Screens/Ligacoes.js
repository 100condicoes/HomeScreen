import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Emergencia extends Component {
  
      fazerLigacao = (telefone) =>{
        const url= telefone
        Linking.openURL(url)
      }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.containerDenuncias}>
                <View style={styles.containerPhoneDenuncias}>
                        <View style={{flexDirection:"column", alignItems:"center", marginRight: 10}}>
                        <Text>{`Disque \n Denúcia `}</Text>
                        <Text> 181 </Text>
                        </View>
                        <TouchableOpacity style={styles.phoneCall}
                        onPress={()=> this.fazerLigacao('tel://100')}>
                        <Ionicons style={styles.appIcon}
                            name="call"
                            size= {60}
                            color={"white"}
                            />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerPhoneDenuncias}>
                        <View style={{flexDirection:"column", alignItems:"center", marginRight: 10}}>
                        <Text>{`Conselho \n Tutelar `}</Text>
                        <Text> 125 </Text>
                        </View>
                        <TouchableOpacity style={styles.phoneCall}
                        onPress={()=> this.fazerLigacao('tel://125')}>
                        <Ionicons style={styles.appIcon}
                            name="call"
                            size= {60}
                            color={"white"}
                            />
                    </TouchableOpacity>
                </View>

                
                </View>

                <View style={styles.containerDenuncias}>

                <View style={styles.containerPhoneDenuncias}>
                        <View style={{flexDirection:"column", alignItems:"center", marginRight: 10}}>
                        <Text>{`Direitos \n Humanos `}</Text>
                        <Text> 100 </Text>
                        </View>
                        <TouchableOpacity style={styles.phoneCall}
                        onPress={()=> this.fazerLigacao('tel://100')}>
                        <Ionicons style={styles.appIcon}
                            name="call"
                            size= {60}
                            color={"white"}
                            />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerPhoneDenuncias}>
                        <View style={{flexDirection:"column", alignItems:"center", marginRight: 10}}>
                        <Text> Procon </Text>
                        <Text> 151 </Text>
                        </View>
                        <TouchableOpacity style={styles.phoneCall}
                        onPress={()=> this.fazerLigacao('tel://151')}>
                        <Ionicons style={styles.appIcon}
                            name="call"
                            size= {60}
                            color={"white"}
                            />
                    </TouchableOpacity>
                </View>

                </View>
                <View style={styles.containerPolicia}>
                    
                  <View style={styles.containerPhone}>
                    <View style={{flexDirection:"column", alignItems:"center", marginRight: 30}}>
                    <Text> Polícia </Text>
                    <Text> 190 </Text>
                    </View>
                    <TouchableOpacity style={styles.phoneCall}
                    onPress={()=> this.fazerLigacao('tel://190')}>
                    <Ionicons style={styles.appIcon}
                        name="call"
                        size= {60}
                        color={"white"}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerPhone}>
                    <View style={{flexDirection:"column", alignItems:"center", marginRight: 10}}>
                    <Text> {`Polícia \n Rodiviária `}</Text>
                    <Text> 191 </Text>
                    </View>
                    <TouchableOpacity style={styles.phoneCall}
                    onPress={()=> this.fazerLigacao('tel://191')}>
                    <Ionicons style={styles.appIcon}
                        name="call"
                        size= {60}
                        color={"white"}
                        />
                    </TouchableOpacity>
                </View>
                
                </View>

                <View style={styles.containerAmbulancia}>
                    <View style={styles.containerPhone}>
                        <View style={{flexDirection:"column", alignItems:"center", marginRight: 10}}>
                        <Text> Ambulancia</Text>
                        <Text> 192 </Text>
                        </View>
                        <TouchableOpacity style={styles.phoneCall}
                        onPress={()=> this.fazerLigacao('tel://192')}>
                        <Ionicons style={styles.appIcon}
                            name="call"
                            size= {60}
                            color={"white"}
                            />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerPhone}>
                        <View style={{flexDirection:"column", alignItems:"center", marginRight: 10}}>
                        <Text> {`Corpo de\n Bombeiros`} </Text>
                        <Text> 193 </Text>
                        </View>
                        <TouchableOpacity style={styles.phoneCall}
                        onPress={()=> this.fazerLigacao('tel://193')}>
                        <Ionicons style={styles.appIcon}
                            name="call"
                            size= {60}
                            color={"white"}
                            />
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column", 
      },
      containerDenuncias:{
        paddingTop:40,
        flex: 2,
        backgroundColor: "#958D8D",
        width: "100%",
        flexDirection:"row", 
      },
      containerPolicia:{
        flex: 2,
        backgroundColor: "#3164F4",
        width: "100%",
        flexDirection:"row", 
      },
      containerAmbulancia: {
        flex: 2,
        backgroundColor: "#ED0E0E",
        width: "100%",
        flexDirection:"row"
      },
      phoneCall:{
        backgroundColor: "#F0FD01",
      },
      containerPhone:{
        padding: 10, 
        backgroundColor: "white", 
        flexDirection:"row", 
        margin: 20, 
        justifyContent: "center", 
        width:"40%",
        height:85,
        flex:2
      },
      containerPhoneDenuncias:{
        
        padding: 10, 
        backgroundColor: "white", 
        flexDirection:"row", 
        marginTop:20, 
        marginLeft:20,
        justifyContent: "center", 
        width:"30%",
        height:85,
        flex:2
      },


     
})