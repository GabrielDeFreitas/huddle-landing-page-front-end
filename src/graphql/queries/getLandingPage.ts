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

  fragment logo on LandingPage {
    logo {
      image {
        ...imageData
      }
      button {
        ...buttonComponent
      }
    }
  }

  fragment header on LandingPage {
    header {
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

  fragment sectionBriefing on LandingPage {
    sectionBriefing {
      briefingCard {
        title
        description
        image {
          ...imageData
        }
      }
    }
  }

  fragment sectionGetStarted on LandingPage {
    sectionGetStarted {
      title
      button {
        ...buttonComponent
      }
    }
  }

  fragment footer on LandingPage {
    footer {
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
          ...logo
          ...header
          ...sectionBriefing
          ...sectionGetStarted
          ...footer
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
