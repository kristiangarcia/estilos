import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'

export default function App() {
  useFonts({
    "StoryScript": require("./assets/StoryScript-Regular.ttf")
  })
  return (
    <View style={styles.contenedor}>
      <View style={[styles.botonGenerico, styles.boton1]}>
        <Text style={styles.texto}>Botón 1</Text>
      </View>
      <View style={[styles.botonGenerico, styles.boton2]}>
        <Text style={styles.texto}>Botón 2</Text>
      </View>
      <View>
        <LinearGradient
          colors={['#01C7A0', '#40F680']}
          start={{x: 0.93, y: 0.75}}
          end={{x: 0.07, y: 0.25}}
          style={[styles.botonGenerico, styles.boton3]}
        >
          <Text style={styles.texto}>Botón 3</Text>
        </LinearGradient>
      </View>
      <View style={[styles.botonGenerico, styles.boton4]}>
        <Text style={styles.texto}>
          Botón 4 {" "}
          <MaterialIcons name={"download"} size={24} color={"white"} />
        </Text>
      </View>
      <View style={[styles.botonGenerico, styles.boton5]}>
        <Text style={styles.texto5}>Botón 5</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    marginTop:200,
    marginLeft: 100
  },
  texto:{
    margin:'auto',
    fontSize:20
  },
  botonGenerico:{
    width:200,
    height:50,
    marginBottom:80
  },
  boton1:{
    backgroundColor:'#e7e3f2',
    borderColor:'#ef1438',
    borderStyle:'solid',
    borderWidth:3,
    borderRadius:15
  },
  boton2:{
    backgroundColor:'#ffd067',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  boton3:{
    borderRadius:30
  },
  boton4:{
    backgroundColor:'#4d83f5',
    borderRadius:10
  },
  boton5:{
    height:200,
    backgroundColor:'#f25d79',
    borderRadius:'50%'
  },
  texto5:{
    fontFamily:'StoryScript',
    fontSize:50,
    margin:'auto'
  }
})