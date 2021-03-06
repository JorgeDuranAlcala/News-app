import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import CustomButton from '../components/CustomButton'
import Input from '../components/Input'
import { getContextState } from '../context'

export default function Home({ navigation }) {

    const { Query, setQuery } = getContextState()

    const OnPressEnter = e => {
        if(e.key === 'Enter') {
            navigation.navigate('articles', { Query })
        }
    }

    return (
        <HomeContainer>
            <WelcomeText>
                Write a subject to search for!!
            </WelcomeText>
            <Input
                onChangeText={text => { setQuery(text) }}  
                placeholder="Go ahead Type anything" 
                onKeyPress={OnPressEnter} 
            />
            <GoDetailsBtn primary title="Search for articles" onPress={() => navigation.navigate('articles', { Query })}/>
        </HomeContainer>
    )
}

const HomeContainer = styled.View`
    background: ${({ theme }) => theme.bg.main }
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-around;
`

const WelcomeText = styled.Text`
    color: ${ ({ theme }) => theme.text.primary}
    font-size: 15px;
    font-weight: bold;
    text-align: center;
`

const GoDetailsBtn = styled(CustomButton)`
    margin-top: 10;
`
const GoArticlesBtn = styled(CustomButton)`
   margin-top: 10;
`
