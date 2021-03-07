import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import styled, { useTheme } from "styled-components/native";
import Text from '../components/Text'
import useArticles from '../hooks/useArticles';

export default function Articles({ route, navigation }) {

    const { Query } = route.params
    const { Articles, loading } = useArticles(Query)
    const theme = useTheme()


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
                <HeaderText size={18} bold>
                    Welcome to articles
                </HeaderText>
            </FirstSection>
            <ArticlesSection>
             { loading ? (
                 <Block>
                     <ActivityIndicator size="large" color={theme.pallete.primary} />
                 </Block>
             ) : !Articles ? (
                 <Block>
                    <Text size={20} bold>No result found</Text>
                 </Block>
             ) : (
                    <FlatList
                        contentContainerStyle=""
                        data={Articles}
                        renderItem={renderItem}
                    />
                )
              }
            </ArticlesSection>
        </ArticlessContainer>
    )
}

const ArticlessContainer = styled.SafeAreaView`
    background: ${({ theme }) => theme.bg.main }
    flex: 1;
`

const HeaderText = styled(Text)`
    padding-vertical: 8px;
    border-bottom-width: 2px;
    border-bottom-color: gray;
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
    shadow-radius: 4px;
`

const Block = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`