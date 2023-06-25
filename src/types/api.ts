export type ContactsContent = {
  title: string
  icon: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type AboutUsContent = {
  title: string
  url: string
}

export type SocialLinksContent = {
  icon: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

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

export type LogoProps = {
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
  button: {
    label: string
    url: string
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
  backgroundDesktop: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
  backgroundMobile: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionBriefingProps = {
  briefingCard: BriefingCards[]
}

export type SectionGetStartedProps = {
  title: string
  button: {
    label: string
    url: string
  }
}

export type FooterProps = {
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
  contacts: ContactsContent[]
  aboutUs: AboutUsContent[]
  socialLinks: SocialLinksContent[]
}

export type LandingPageProps = {
  landingPage: {
    data: {
      attributes: {
        Logo: LogoProps
        Header: HeaderProps
        SectionBriefing: SectionBriefingProps
        SectionGetStarted: SectionGetStartedProps
        Footer: FooterProps
      }
    }
  }
}
