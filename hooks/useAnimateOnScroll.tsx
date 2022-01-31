import { useEffect } from 'react'
import useThemeContext from './useThemeContext'

const useAnimateOnScroll = () => {
  const { toggleTheme } = useThemeContext()
  let handleScrollAnimation: any

  const pageHasLoad =
    typeof window !== 'undefined' && typeof document !== 'undefined'

  if (pageHasLoad) {
    const scrollElements = document.querySelectorAll('.js-scroll')

    const elementInView = (elm: any, percentageScroll = 100) => {
      const elmTop = elm.getBoundingClientRect().top
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight

      return elmTop <= windowHeight * (percentageScroll / 100)
    }

    const animateScrollElm = (elm: any) => {
      // elm.classList.add('scrolled')
      toggleTheme()
    }

    const defaultScrollElement = (elm: any) => {
      // elm.classList.remove('scrolled')
      // toggleTheme()
    }

    handleScrollAnimation = () => {
      scrollElements.forEach((elm: any) => {
        elementInView(elm, 50)
          ? animateScrollElm(elm)
          : defaultScrollElement(elm)
      })
    }
  }

  useEffect(() => {
    if (pageHasLoad) {
      window.addEventListener('scroll', handleScrollAnimation)
    }
  }, [])
}

export default useAnimateOnScroll
