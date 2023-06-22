const GET_LANDING_PAGE = `
  fragment imageData on UploadFileEntityResponse {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }

  fragment buttonComponent on ComponentPageButton {
    url
    text
  }

  fragment Logo on LandingPage {
    logo {
      image {
        ...imageData
      }
      button {
        ...buttonComponent
      }
    }
  }

  fragment Header on LandingPage {
    header {
      title
      description
      button {
        ...buttonComponent
      }
    }
  }

  fragment SectionBriefing on LandingPage {
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

  fragment SectionGetStarted on LandingPage {
    sectionGetStarted {
      title
      button {
        ...buttonComponent
      }
    }
  }

  fragment Footer on LandingPage {
    footer {
      logo {
        ...imageData
      }
      footerContent {
        description
        url @skip(if: true)
        icon @skip(if: true) {
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
