import { useEffect, useState } from 'react'
import { getReviews } from './sanity/getReviews'
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar.jsx'
import Header from './components/Header/Header.jsx'

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
      <Header/>
      <h1>Reviews</h1>

      {reviews.map((review) => (
        <article key={review._id}>
          <h2>{review.author}</h2>
          <p>{review.text}</p>
          <p>Rating: {review.rating}</p>
        </article>
      ))}
    </main>
  )
}

export default App