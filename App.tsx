import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.boton1}>
        <Text style={styles.texto}>Botón 1</Text>
      </View>
      <View style={styles.boton2}>
        <Text style={styles.texto}>Botón 2</Text>
      </View>
      <View style={styles.boton3}>
        <Text style={styles.texto}>Botón 3</Text>
      </View>
      <View style={styles.boton4}>
        <Text style={styles.texto}>Botón 4</Text>
      </View>
      <View style={styles.boton5}>
        <Text style={styles.texto}>Botón 5</Text>
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
    margin:"auto",
    fontSize:20
  },
  boton1:{
  },
  boton2:{
  },
  boton3:{
  },
  boton4:{
  },
  boton5:{
  }
})