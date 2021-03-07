import React from 'react'
import styled from 'styled-components/native'
import CustomButton from '../components/CustomButton'
import Input from '../components/Input'
import Text from '../components/Text'
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
            <WelcomeText bold>
                Home
            </WelcomeText>
            <MainText bold>
                Write a topic below and read articles related to it
            </MainText>
            <Input
                onChangeText={text => { setQuery(text) }}  
                placeholder="Go ahead Type anything" 
                onKeyPress={OnPressEnter} 
            />
            <SearchBtn primary title="Search for articles" onPress={() => navigation.navigate('articles', { Query })}/>
        </HomeContainer>
    )
}

const HomeContainer = styled.View`
    background: ${({ theme }) => theme.bg.main }
    flex: 1;
    padding: 25px;
    justify-content: center;
`

const WelcomeText = styled(Text)`
    font-size: 20px;
    text-align: center;
    padding: 15px;
    border-bottom-width: 2px;
    border-bottom-color: gray;
`

const SearchBtn = styled(CustomButton)`
    margin-top: 10px;
`
const MainText = styled(Text)`
   margin-vertical: 10px;
   font-size: 16px;
   text-align: center;
`
