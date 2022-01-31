import tw from 'twin.macro'

const Nav = tw.nav`flex justify-between p-4 lg:p-16 fixed w-full left-0`

const Option = tw.a`text-sm lg:text-xl font-light`

export const Navbar = () => {
  return (
    <Nav>
      <Option href="#about">ABOUT</Option>
      <Option href="#home">MICHELLE MORE</Option>
      <Option href="#contact">CONTACT</Option>
    </Nav>
  )
}
