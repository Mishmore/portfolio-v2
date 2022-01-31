import tw, { styled } from 'twin.macro'

export const Container = tw.div`container mx-auto px-4`

export const TitleLight = styled.h1`
  ${tw`text-4xl lg:text-9xl font-light`}
  animation: slide-in-right 1.5s ease-in-out both;
`

export const TitleBold = styled(TitleLight)`
  ${tw`font-bold`}
  animation: slide-in-left 1.5s ease-in-out both;
`

export const TitleSection = tw.h2`text-2xl lg:text-7xl`

export const Text = tw.p`text-sm lg:text-3xl mb-5`

export const TitleWrapper = styled.div`
  ${tw`overflow-hidden whitespace-nowrap`}
`
export const Option = styled.a<any>`
  ${tw`text-sm lg:text-xl font-light relative`}
  &:before {
    content: '';
    ${tw`w-full h-0.5 absolute bottom-0 hidden`}
    ${({ theme }): any => (theme === 'dark' ? tw`bg-rose` : tw`bg-brown`)}
  }
  &:hover {
    &:before {
      display: block;
      animation: underline 0.3s ease-in;
    }
  }
`
