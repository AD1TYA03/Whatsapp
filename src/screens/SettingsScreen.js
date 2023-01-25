import {View , Button ,StyleSheet} from 'react-native'
import React from 'react'
import {Auth}from 'aws-amplify';

function SettingsScreen() {
  return (
    <View style={styles.container}>
        <Button onPress={()=>Auth.signOut()} title= "Sign Out"/>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flex:1,
        justifyContent:"center",
    }
});