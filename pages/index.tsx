import type { NextPage } from 'next'
import tw from 'twin.macro'
import Head from 'next/head'
import themesTw from '@/components/Theme'
import useThemeContext from '@/hooks/useThemeContext'
import {
  Container,
  TitleBold,
  TitleLight,
  TitleSection,
  Text,
  TitleWrapper,
} from '@/components/Commons'
import { ThemeButton } from '@/components/ThemeButton'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll'

const Wrapper = tw.div`h-full w-full relative`

const Section = tw.section`py-20 grid grid-cols-1 lg:grid-cols-12 gap-4`

const Main = tw.main`h-screen flex flex-col justify-center`

const Home: NextPage = () => {
  const { theme } = useThemeContext()
  useAnimateOnScroll()

  return (
    <Wrapper className={themesTw[theme]}>
      <Head>
        <title>Michelle More</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {
        // eslint-disable-next-line @next/next/no-page-custom-font
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Lexend:wght@300;500;600;700&family=Red+Hat+Text:ital,wght@0,300;0,600;1,400&family=Spinnaker&display=swap"
          rel="stylesheet"
        />
      }
      <Container className="scroll-container">
        <ThemeButton />
        <Navbar />
        <Main>
          <TitleWrapper>
            <TitleBold tw="lg:w-2/3">
              FRONT-END <br /> DEVELOPER
            </TitleBold>
          </TitleWrapper>
          <TitleWrapper>
            <TitleLight tw="lg:w-2/3">
              & GRAPHIC
              <br />
              DESIGNER
            </TitleLight>
          </TitleWrapper>
        </Main>
        <Section className="js-scroll">
          <TitleSection tw="lg:col-span-3">ABOUT</TitleSection>
          <div tw="lg:col-start-6 lg:col-span-6">
            <Text>
              Front-end developer with 4+ years of experience working in web
              development with React and Vue.
            </Text>
            <Text>
              Knowledge in graphic design, digital marketing, design thinking,
              and lean startup. Experience delivering high-quality projects
              oriented to improve employee performance and client experience,
              from scratch to production.
            </Text>
            <Text>
              Passionate about creating impact and solving problems with
              user-centered solutions and willing to contribute to the growth of
              the company as a remote front-end developer.
            </Text>
          </div>
        </Section>
        <Section>
          <TitleSection tw="lg:col-span-3">CONTACT</TitleSection>
          <div tw="lg:col-start-6 lg:col-span-6">
            <Text>You can reach me at the email michellemore28@gmail.com</Text>
          </div>
        </Section>
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default Home
