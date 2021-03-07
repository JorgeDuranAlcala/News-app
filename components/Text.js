import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export function TextTouchable({ children, onPress, ...props }) {
    return <TouchableOpacity onPress={onPress}>
        <Text {...props }> 
            { children } 
        </Text>
    </TouchableOpacity>
}

export default function StyledText({ children, ...props }) {
    return <Text {...props}>
        { children }
    </Text>
}

const Text = styled.Text`
    color: ${({ theme, color }) => color ? color : theme.text.primary};
    font-weight: ${({ bold }) => bold ? 'bold' : 'normal' };
    font-size: ${({ size }) => size && size }px;
`

