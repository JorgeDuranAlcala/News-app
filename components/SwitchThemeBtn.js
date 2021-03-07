import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from "styled-components/native";
import { getContextState } from "../context";

export default function SwitchThemeBtn() {

    const { setCurrenTheme } = getContextState()

    return (
        <ContainerTouchable  onPress={
            () => setCurrenTheme(prev => prev !== 'dark' ? 'dark' : 'light')
            } >
            <IconInside> 💛 </IconInside>
        </ContainerTouchable>
    )
}

const ContainerTouchable = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.pallete.primary };
    position: absolute; 
    bottom: 10px; 
    left: 10px;
    border-radius: 50%;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 4};
    shadow-opacity: 0.8;
    shadow-radius: 5px;
`

const IconInside = styled.Text`
    font-size: 15px;
    padding-vertical: 15px;
    padding-horizontal: 15px;
`
