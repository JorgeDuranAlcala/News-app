import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import styled from "styled-components/native";

/* const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: "blue",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        marginTop: 10
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
}) */

export default function CustomButton({ title, size, primary, secondary, ...rest }) {


    return (
        <ButtonContainer primary={primary} secondary={secondary}  {...rest}> 
            <ButtonText primary={primary} size={size} >
                { title }
            </ButtonText>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${({ primary, secondary, theme }) => primary ? theme.pallete.primary : secondary ? theme.pallete.secondary : "#D1C4E9"};
    border-radius: 10px;
    padding-vertical: 10px;
    padding-horizontal: 12px;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 4};
    shadow-opacity: 0.4;
    shadow-radius: 7px;
`

const ButtonText = styled.Text`
    font-size: ${({ size }) => size !== 'small' ? 18 : 13 }px;
    color: ${({ primary, theme }) => primary ? "#fff" : 'rgba(0,0,0,0.8)'};
    font-weight: bold;
    align-self: center;
    textTransform: uppercase;
`

