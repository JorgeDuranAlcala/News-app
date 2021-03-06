import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components/native'

const MainContext = createContext(null)

const theme = {
    pallete: {
        primary: "#4B0082",
        secondary: "#E6E6FA"
    },
    text: {
        primary: "#212121"
    }
}

const lightTheme = {
    ...theme,
    bg: {
        main: "#fff",
    },
}

const darkTheme = {
    ...theme,
    bg: {
        main: "rgba(0, 0, 0, 0.8)",
    },
    text: {
        primary: '#fff'
    },
}

export const ContextProvider = ({ children }) => {

    const [Query, setQuery] = useState('')
    const [CurrenTheme, setCurrenTheme] = useState('light')

    const value = { Query, setQuery, CurrenTheme, setCurrenTheme }

      return  (
          <ThemeProvider theme={CurrenTheme !== 'dark' ? lightTheme : darkTheme} >
            <MainContext.Provider 
                value={value} >
                { children }
            </MainContext.Provider>
          </ThemeProvider>
    )
}

export const getContextState = () => useContext(MainContext)