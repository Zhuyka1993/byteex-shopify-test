import './HeroReview.css'
import { urlFor } from '../../sanity/image'

function HeroReview({ review }) {
  if (!review) return null

  return (
    <div className="hero-review">
      <div className="hero-review__header">
          <img
    src={urlFor(review.avatar).width(48).height(48).url()}
    alt={review.avatar?.alt || ''}
    className="hero-review__avatar"
  />

        <div className="hero-review__author">
          {review.author}
        </div>

        <div className="hero-review__rating">
          {'★'.repeat(review.rating)}
        </div>

        <span className="hero-review__count">
          One of 500+ 5 Star Reviews Online
        </span>
      </div>

      <p className="hero-review__text">
        {review.text}
      </p>
    </div>
  )
}

export default HeroReview