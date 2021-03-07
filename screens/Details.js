import React from 'react'
import { View, Image, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import styled from "styled-components/native";
import CustomButton from '../components/CustomButton';
import StyledText, { TextTouchable } from '../components/Text';
import * as WebBrowser from "expo-web-browser";
import { format } from "date-fns";

export default function Details({ route, navigation }) {

    const { article } = route.params

    const _handleOpenWebBrower = () => {
        WebBrowser.openBrowserAsync(article.url)
    }

    return (
            <DetailsContainer>
                <ScrollView>
                   { article.urlToImage && <Image source={{ uri: article.urlToImage, width: '100%', height: '100%' }}/>}
                    
                    <TitleText bold>
                        { article.title }
                    </TitleText>

                    <InfoText bold>
                        Author: { article.author }
                    </InfoText>
                    <InfoText bold>
                        Source: { article.source.name }
                    </InfoText>
                    <InfoText bold>
                        Published at: {  format(new Date(article.publishedAt) , 'yyyy-MM-dd') }
                    </InfoText>

                    <ContentText>
                        { article.content }. <SeeMore bold onPress={_handleOpenWebBrower}>See More</SeeMore>
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

const TitleText = styled(StyledText)`
    font-size: 16px;
    margin-vertical: 10px;
`

const ContentText = styled(StyledText)`
    margin-vertical: 10px;
`

const InfoText = styled(StyledText)`
    font-size: 10px;
    margin-vertical: 2px;
`

const SeeMore = styled(TextTouchable)`
 color: rgb(5, 126, 255);
`

const GoBackButton = styled(CustomButton)`
    margin-top: 10px;
`
