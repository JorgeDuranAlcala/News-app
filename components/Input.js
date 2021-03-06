import React from 'react'
import { useState } from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import { getContextState } from '../context'

export default function Input(props) {

    return (
        <Container >
                <InputContainer 
                    defaultValue=""
                    {...props}
                />
      </Container>
    )
}


const Container = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`
const InputContainer = styled.TextInput`
    flex: 1;
    margin-top: 15px;
    padding: 10px;
    border-width: 2px;
    color: ${ ({ theme }) => theme.text.primary};
    border-color: ${ ({ focused }) => focused ? 'blue' : 'gray'};
`
