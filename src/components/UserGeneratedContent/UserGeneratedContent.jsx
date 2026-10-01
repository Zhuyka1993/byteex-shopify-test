import { useEffect, useRef, useState } from 'react'
import './UserGeneratedContent.css'
import { urlFor } from '../../sanity/image'
import CustomizeButton from '../CustomizeButton/CustomizeButton.jsx'
import star from '../../assets/star.svg'

function UserGeneratedContent({ gallery, reviews }) {
    const galleryRef = useRef(null)
    const touchStartX = useRef(null)

    const [visibleImagesCount, setVisibleImagesCount] = useState(0)
    const [galleryColumns, setGalleryColumns] = useState(0)
    const [activeReview, setActiveReview] = useState(0)

    useEffect(() => {
        const updateVisibleImages = () => {
            if (!galleryRef.current || !gallery?.images?.length) return

            const galleryWidth = galleryRef.current.clientWidth
            const imageSize = window.innerWidth <= 520 ? 102 : 145
            const gap = 4

            const columnsByWidth = Math.floor(
                (galleryWidth + gap) / (imageSize + gap)
            )

            const columnsByImages = Math.floor(gallery.images.length / 2)

            const columns = Math.min(
                columnsByWidth,
                columnsByImages
            )

            setGalleryColumns(columns)
            setVisibleImagesCount(columns * 2)
        }

        updateVisibleImages()

        window.addEventListener('resize', updateVisibleImages)

        return () => {
            window.removeEventListener('resize', updateVisibleImages)
        }
    }, [gallery?.images?.length])

    const nextReview = () => {
        if (!reviews?.length) return

        setActiveReview((current) =>
            current === reviews.length - 1 ? 0 : current + 1
        )
    }

    const prevReview = () => {
        if (!reviews?.length) return

        setActiveReview((current) =>
            current === 0 ? reviews.length - 1 : current - 1
        )
    }

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX
    }

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return

        const touchEndX = event.changedTouches[0].clientX
        const difference = touchStartX.current - touchEndX

        if (Math.abs(difference) > 50) {
            if (difference > 0) {
                nextReview()
            } else {
                prevReview()
            }
        }

        touchStartX.current = null
    }

    return (
        <section className="user-generated-content">
            <h2>What are our fans saying?</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat. Fusce non nibh luctus.
            </p>

            <div
                ref={galleryRef}
                className="user-generated-content__gallery"
                style={{
                    gridTemplateColumns: `repeat(${galleryColumns}, ${window.innerWidth <= 520 ? 102 : 145
                        }px)`,
                }}
            >
                {gallery?.images
                    ?.slice(0, visibleImagesCount)
                    .map((image, index) => (
                        <img
                            key={index}
                            src={urlFor(image).width(400).url()}
                            alt={image.alt || ''}
                        />
                    ))}
            </div>

            <div className="user-generated-content__reviews">
                <button
                    className="user-generated-content__reviews-arrow user-generated-content__reviews-arrow--left"
                    onClick={prevReview}
                    aria-label="Previous review"
                >
                    <span className="user-generated-content__arrow-icon" />
                </button>

                <div
                    className="user-generated-content__reviews-track"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {reviews?.length > 0 &&
                        [-1, 0, 1].map((offset) => {
                            const index =
                                (activeReview + offset + reviews.length) %
                                reviews.length

                            const review = reviews[index]

                            return (
                                <article
                                    key={`${review._id}-${offset}`}
                                    className={`user-generated-content__review ${offset === 0
                                        ? 'user-generated-content__review--active'
                                        : ''
                                        }`}
                                >
                                    <div className="user-generated-content__review-header">
                                        <img
                                            src={urlFor(review.avatar)
                                                .width(80)
                                                .height(80)
                                                .url()}
                                            alt={review.avatar?.alt || ''}
                                            className="user-generated-content__review-avatar"
                                        />

                                        <div className="user-generated-content__review-info">
                                            <div className="user-generated-content__review-rating">
                                                {Array.from({ length: review.rating }).map((_, index) => (
                                                    <img
                                                        key={index}
                                                        src={star}
                                                        alt=""
                                                        className="user-generated-content__star"
                                                    />
                                                ))}
                                            </div>

                                            <div className="user-generated-content__review-author">
                                                {review.author}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="user-generated-content__review-text">
                                        {review.text}
                                    </p>
                                </article>
                            )
                        })}
                </div>

                <button
                    className="user-generated-content__reviews-arrow user-generated-content__reviews-arrow--right"
                    onClick={nextReview}
                    aria-label="Next review"
                >
                    <span className="user-generated-content__arrow-icon" />
                </button>
            </div>

            <div className="user-generated-content__review-dots">
                {reviews?.map((_, index) => (
                    <button
                        key={index}
                        className={`user-generated-content__review-dot ${index === activeReview
                            ? 'user-generated-content__review-dot--active'
                            : ''
                            }`}
                        onClick={() => setActiveReview(index)}
                        aria-label={`Go to review ${index + 1}`}
                    />
                ))}
            </div>
            <CustomizeButton />

            <div className="user-generated-content__reviews-summary">
                <div className="user-generated-content__reviews-summary-rating">
                    <div className="user-generated-content__reviews-summary-rating">
    {Array.from({ length: 5 }).map((_, index) => (
        <img
            key={index}
            src={star}
            alt=""
            className="user-generated-content__star"
        />
    ))}
</div>
                </div>

                <span>Over 500+ 5 Star Reviews Online</span>
            </div>
        </section>
    )
}

export default UserGeneratedContent