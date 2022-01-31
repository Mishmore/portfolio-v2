import tw from 'twin.macro'
import useThemeContext from '@/hooks/useThemeContext'

const Button = tw.button`p-3 fixed lg:top-2/4 right-0 transform -rotate-90
uppercase bottom-0 lg:bottom-auto text-center uppercase font-light`

export const ThemeButton = () => {
  const { toggleTheme, isLightTheme } = useThemeContext()

  return (
    <Button type="button" onClick={toggleTheme}>
      <span tw="hidden lg:block">
        {isLightTheme ? 'Light mode' : 'Dark mode'}
      </span>
      <span tw="lg:hidden">*</span>
    </Button>
  )
}
