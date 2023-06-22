import React from 'react'
import { GetStaticProps } from 'next'

import Footer from 'components/Footer'
import Header from 'components/Header'
import SectionBriefing from 'components/SectionBriefing'
import SectionGetStarted from 'components/SectionGetStarted'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

const Index = ({ landingPage }: LandingPageProps) => (
  <>
    <Header />
    <SectionBriefing />
    <SectionGetStarted />
    <Footer />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage }: LandingPageProps = await client.request(
    GET_LANDING_PAGE
  )

  console.dir(landingPage, { depth: null })

  return {
    props: {
      landingPage
    }
  }
}

export default Index
