import tw, { styled } from 'twin.macro'
import { Option } from './Commons'
import useThemeContext from '@/hooks/useThemeContext'

const Nav = tw.nav`flex justify-between p-4 lg:p-16 fixed w-full left-0`

export const Navbar = () => {
  const { theme } = useThemeContext()

  return (
    <Nav>
      <Option theme={theme} href="#about">
        ABOUT
      </Option>
      <Option theme={theme} href="#home">
        MICHELLE MORE
      </Option>
      <Option theme={theme} href="#contact">
        CONTACT
      </Option>
    </Nav>
  )
}
