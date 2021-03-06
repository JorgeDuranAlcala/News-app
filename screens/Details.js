import React from 'react'
import { View, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import styled from "styled-components/native";
import CustomButton from '../components/CustomButton';
import Text from '../components/Text';
import {  } from "expo";

export default function Details({ route, navigation }) {

    const { article } = route.params
    return (
            <DetailsContainer>
                <ScrollView>
                   { article.urlToImage && <Image source={{ uri: article.urlToImage, width: '100%', height: '100%' }}/>}
                    
                    <TitleText bold>
                        { article.title }
                    </TitleText>

                    <PublishedAt bold>
                        Published at: { article.publishedAt }
                    </PublishedAt>

                    <ContentText>
                        { article.content }
                    </ContentText>

                    
                        <GoBackButton size="small" title="Go back" onPress={() => navigation.goBack()}  />

                </ScrollView>
            </DetailsContainer>
    )
}

const DetailsContainer = styled.View`
    background: ${({ theme }) => theme.bg.main }    
    flex: 1;,
    align-items: center;
    justify-content: center;
    padding: 15px;
`

const TitleText = styled(Text)`
    font-size: 16px;
    margin-vertical: 10px;
`

const ContentText = styled(Text)`
    margin-vertical: 10px;
`

const PublishedAt = styled(Text)`
    font-size: 10px;
    margin-vertical: 10px;
`

const GoBackButton = styled(CustomButton)`
    margin-top: 10px;
`
