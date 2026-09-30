import { useEffect, useState } from 'react'
import { getReviews } from './sanity/getReviews'
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar.jsx'
import Header from './components/Header/Header.jsx'
import AsSeenIn from './components/AsSeenIn/AsSeenIn.jsx'
import DescribeTopBenefits from './components/DescribeTopBenefits/DescribeTopBenefits.jsx'
import Hero from './components/Hero/Hero'
import FounderBuildConnection from './components/FounderBuildConnection/FounderBuildConnection.jsx'
import './App.css'

function App() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    async function loadReviews() {
      const data = await getReviews()
      setReviews(data)
    }

    loadReviews()
  }, [])

  return (
    <main>
      <AnnouncementBar />
      <Header />

      <Hero />
      <AsSeenIn />
      <DescribeTopBenefits />
      <FounderBuildConnection />
    </main>
  )
}

export default App