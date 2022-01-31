import tw from 'twin.macro'

const FooterWrapper = tw.footer`w-full p-4 lg:p-16`

const Option = tw.a`text-sm lg:text-xl font-light`

export const Footer = () => (
  <FooterWrapper>
    <Option href="https://www.linkedin.com/in/michellemoreflores/">
      LINKEDIN
    </Option>
  </FooterWrapper>
)
