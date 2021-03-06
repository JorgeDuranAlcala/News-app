import React from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
import styled from "styled-components/native";
import * as api from '../api'
import Text from '../components/Text'

export default function Articles({ route, navigation }) {

    const [Articles, setArticles] = React.useState(null)
    const { Query } = route.params

    React.useEffect(() => {
        const fetchArticles = async () => {
            const data = await api.searchArticles(Query)
            setArticles(data.articles)
            console.log(data.articles)
        }
        fetchArticles()
    }, [])

    const renderItem = ({ item }) => {
        
        return (
            <Item onPress={() => navigation.navigate('details', { article: item })} >
                <Text bold>{ item.title }</Text>
                <Text>
                    { item.description }
                </Text>
            </Item>
        )
    }

    return (
        <ArticlessContainer>
            <FirstSection>
                <HeaderText>
                    Bienvenido a articles
                </HeaderText>
            </FirstSection>
            <ArticlesSection>
             {Articles && <FlatList
                contentContainerStyle=""
                data={Articles}
                renderItem={renderItem}
              />}
            </ArticlesSection>
        </ArticlessContainer>
    )
}

const ArticlessContainer = styled.SafeAreaView`
    background: ${({ theme }) => theme.bg.main }
    flex: 1;
`

const HeaderText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.text.primary}
`

const FirstSection = styled.View`
    flex: 0.2; 
    justify-content: center;
    align-items: center;
`
const ArticlesSection = styled.View`
    flex: 0.8; 
`

const Item = styled.TouchableOpacity`
    padding: 8px; 
    marginVertical: 10px;
    marginHorizontal: 10px;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 4};
    shadow-opacity: 0.4;
    shadow-radius: 4;
`

/* const ItemText = styled.Text`

` */