import './FiveStarReviews.css'
import star from '../../assets/star.svg'

function FiveStarReviews() {
    return (
        <div className="five-star-reviews">
            <div className="five-star-reviews__rating">
                {Array.from({ length: 5 }).map((_, index) => (
                    <img
                        key={index}
                        src={star}
                        alt=""
                    />
                ))}
            </div>

            <span>Over 500+ 5 Star Reviews Online</span>
        </div>
    )
}

export default FiveStarReviews