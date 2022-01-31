import tw from 'twin.macro'
import { Option } from './Commons'
import useThemeContext from '@/hooks/useThemeContext'

const FooterWrapper = tw.footer`w-full p-4 lg:p-16`

export const Footer = () => {
  const { theme } = useThemeContext()

  return (
    <FooterWrapper>
      <Option
        theme={theme}
        href="https://www.linkedin.com/in/michellemoreflores/"
      >
        LINKEDIN
      </Option>
    </FooterWrapper>
  )
}
