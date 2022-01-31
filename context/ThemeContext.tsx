import React, { useState } from 'react'

type ITheme = 'light' | 'dark'

interface IThemeContext {
  theme: ITheme
  toggleTheme?: any
  isLightTheme: boolean
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: 'light',
  isLightTheme: true,
})

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ITheme>('light')
  const isLightTheme = theme === 'light'

  const toggleTheme = () => setTheme(isLightTheme ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLightTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
