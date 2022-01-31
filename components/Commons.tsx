import tw from 'twin.macro'

export const Container = tw.div`container mx-auto px-4`

export const TitleLight = tw.h1`text-4xl lg:text-9xl font-light`

export const TitleBold = tw(TitleLight)`font-bold`

export const TitleSection = tw.h2`text-2xl lg:text-7xl`

export const Text = tw.p`text-sm lg:text-3xl mb-5`
