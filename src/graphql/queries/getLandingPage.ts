const GET_LANDING_PAGE = `
  fragment imageData on UploadFileEntityResponse {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }

  fragment buttonComponent on ComponentPagesButton {
    url
    label
  }

  fragment Logo on LandingPage {
    Logo {
      image {
        ...imageData
      }
      button {
        ...buttonComponent
      }
    }
  }

  fragment Header on LandingPage {
    Header {
      title
      description
      button {
        ...buttonComponent
      }
      image {
        ...imageData
      }
      backgroundDesktop {
        ...imageData
      }
      backgroundMobile {
        ...imageData
      }
    }
  }

  fragment SectionBriefing on LandingPage {
    SectionBriefing {
      briefingCard {
        title
        description
        image {
          ...imageData
        }
      }
    }
  }

  fragment SectionGetStarted on LandingPage {
    SectionGetStarted {
      title
      button {
        ...buttonComponent
      }
    }
  }

  fragment Footer on LandingPage {
    Footer {
      image {
        ...imageData
      }
      contacts {
        title
        icon{
          ...imageData
        }
      }
      aboutUs {
        title
        url
      }
      socialLinks {
        icon  {
          ...imageData
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...Logo
          ...Header
          ...SectionBriefing
          ...SectionGetStarted
          ...Footer
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
