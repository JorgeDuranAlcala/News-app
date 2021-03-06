import React from 'react'
import styled from 'styled-components/native'

export default function Text({ children, ...props }) {
    return <StyledText {...props}>
        { children }
    </StyledText>
}

const StyledText = styled.Text`
    color: ${({ theme }) => theme.text.primary};
    font-weight: ${({ bold }) => bold ? 'bold' : 'normal' };
`
