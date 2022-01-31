import tw from 'twin.macro'

export const Container = tw.div`container mx-auto`

export const TitleLight = tw.h1`lg:text-9xl font-light`

export const TitleBold = tw(TitleLight)`font-bold`

export const TitleSection = tw.h2`lg:text-7xl`

export const Text = tw.p`lg:text-3xl mb-5`
