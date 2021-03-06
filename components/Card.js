import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import imagesArr from "../data/images";
import CustomButton from './CustomButton';

export default function Card({ img }) {

  const [CurrentImage, setCurrentImage] = useState('')
  
  const changeImage = () => {
      const randomIndex = Math.round( Math.random() * imagesArr.length );
      setCurrentImage(imagesArr[randomIndex])
  }

    return (
        <View style={styles.CardContainer}>
          <Image style={styles.card_image} source={{uri: !CurrentImage ? img : CurrentImage }} />
          <Text >Hello Folks!!</Text>
          <CustomButton size="small" onPress={changeImage} title="Switch Image"/>
        </View>
    )
}

const styles = StyleSheet.create({
    CardContainer: {
        display: 'flex',
        width: 250,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'gray',
        paddingBottom: 8,
        /* marginVertical: 5 */
      },
      card_image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
      },
      CardBtn: {
        backgroundColor: 'blue',
        fontWeight: 'bold',
        borderRadius: 10,
      }
})
