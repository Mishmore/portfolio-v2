import tw from 'twin.macro'
import useThemeContext from '@/hooks/useThemeContext'

const Button = tw.button`mb-20 p-3 fixed top-2/4 right-0 transform -rotate-90 uppercase`

export const ThemeButton = () => {
  const { toggleTheme, isLightTheme } = useThemeContext()

  return (
    <Button type="button" onClick={toggleTheme}>
      {isLightTheme ? 'Light mode' : 'Dark mode'}
    </Button>
  )
}
