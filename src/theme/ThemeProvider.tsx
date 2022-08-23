import React from 'react';
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme'

const DsThemeProvider = ({ theme = defaultTheme, children}: any) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)

export { DsThemeProvider }