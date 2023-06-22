export type BriefingCards = {
  title: string
  description: string
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type FooterContent = {
  description: string
  url: string
  logo: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
    button: {
      text: string
      url: string
    }
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    text: string
    url: string
  }
}

export type SectionBriefingProps = {
  briefingCard: BriefingCards[]
}

export type SectionGetStartedProps = {
  title: string
  button: {
    text: string
    url: string
  }
}

export type FooterProps = {
  logo: {
    url: string
    text: string
  }
  footerContent: FooterContent[]
}

export type LandingPageProps = {
  landingPage: {
    data: {
      attributes: {
        logo: LogoProps
        header: HeaderProps
        sectionBriefing: SectionBriefingProps
        sectionGetStarted: SectionGetStartedProps
        footer: FooterProps
      }
    }
  }
}
