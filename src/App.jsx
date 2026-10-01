import { useEffect, useState } from 'react'
import { getReviews } from './sanity/getReviews'
import { getFeaturedReview } from './sanity/getFeaturedReview'
import { getUgcGallery } from './sanity/getUgcGallery'
import { getFaq } from './sanity/getFaq'

import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero'
import AsSeenIn from './components/AsSeenIn/AsSeenIn.jsx'
import DescribeTopBenefits from './components/DescribeTopBenefits/DescribeTopBenefits.jsx'
import FounderBuildConnection from './components/FounderBuildConnection/FounderBuildConnection.jsx'
import HowTheProductWorks from './components/HowTheProductWorks/HowTheProductWorks'
import UserGeneratedContent from './components/UserGeneratedContent/UserGeneratedContent.jsx'
import FAQ from './components/FAQ/FAQ.jsx'


import './App.css'

function App() {
  const [reviews, setReviews] = useState([])
  const [featuredReview, setFeaturedReview] = useState(null)
  const [ugcGallery, setUgcGallery] = useState(null)
  const [faq, setFaq] = useState([])

  useEffect(() => {
    getUgcGallery().then(setUgcGallery)

    async function loadReviews() {
      const data = await getReviews()
      setReviews(data)
    }

    async function loadFeaturedReview() {
      const data = await getFeaturedReview()
      setFeaturedReview(data)
    }
    async function loadFaq() {
      const data = await getFaq()
      setFaq(data)
    }

    loadReviews()
    loadFeaturedReview()
    loadFaq()
  }, [])

  return (
    <main>
      <AnnouncementBar />
      <Header />

      <Hero review={featuredReview} />

      <AsSeenIn />

      <DescribeTopBenefits />

      <FounderBuildConnection />

      <HowTheProductWorks />

      <UserGeneratedContent
        gallery={ugcGallery}
        reviews={reviews}
      />
      <FAQ faq={faq} />
    </main>
  )
}

export default App