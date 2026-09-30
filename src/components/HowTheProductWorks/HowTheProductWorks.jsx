import { useState } from 'react'
import './HowTheProductWorks.css'
import CustomizeButton from '../CustomizeButton/CustomizeButton'
import icon1 from '../../assets/how-the-product-works/icon-1.svg'
import icon2 from '../../assets/how-the-product-works/icon-2.svg'
import icon3 from '../../assets/how-the-product-works/Icon-3.svg'

function HowTheProductWorks() {
    const cards = [
        {
            icon: icon1,
            title: 'You save.',
            text: 'Browse our comfort sets and save 15% when you bundle.',
        },
        {
            icon: icon2,
            title: 'We ship.',
            text: 'We ship your items within 1-2 days of receiving your order.',
        },
        {
            icon: icon3,
            title: 'You enjoy!',
            text: 'Wear hernest around the house, out on the town, or in bed.',
        },
    ]

    const [activeSlide, setActiveSlide] = useState(0)
    const [touchStartX, setTouchStartX] = useState(null)

    const goToPrevious = () => {
        setActiveSlide((current) =>
            current === 0 ? cards.length - 1 : current - 1
        )
    }

    const goToNext = () => {
        setActiveSlide((current) =>
            current === cards.length - 1 ? 0 : current + 1
        )
    }

    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX)
    }

    const handleTouchEnd = (event) => {
        if (touchStartX === null) return

        const touchEndX = event.changedTouches[0].clientX
        const distance = touchStartX - touchEndX

        if (Math.abs(distance) < 50) {
            setTouchStartX(null)
            return
        }

        if (distance > 0) {
            goToNext()
        } else {
            goToPrevious()
        }

        setTouchStartX(null)
    }

    return (
        <section className="how-the-product-works">

            <h2 className="how-the-product-works__title">
                Comfort made easy
            </h2>

            <div
                className="how-the-product-works__cards"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <button
                    type="button"
                    className="how-the-product-works__arrow how-the-product-works__arrow--left"
                    onClick={goToPrevious}
                    aria-label="Previous card"
                >
                    ‹
                </button>

                {cards.map((card, index) => (
                    <article
                        key={card.title}
                        className={`how-the-product-works__card ${index === 1
                                ? 'how-the-product-works__card--center'
                                : ''
                            } ${activeSlide === index
                                ? 'how-the-product-works__card--active'
                                : ''
                            }`}
                    >
                        <div className="how-the-product-works__icon">
                            <img src={card.icon} alt="" />
                        </div>

                        <h3>{card.title}</h3>

                        <p>{card.text}</p>
                    </article>
                ))}

                <button
                    type="button"
                    className="how-the-product-works__arrow how-the-product-works__arrow--right"
                    onClick={goToNext}
                    aria-label="Next card"
                >
                    ›
                </button>
            </div>

            <CustomizeButton />

            <div className="how-the-product-works__reviews">
                <span>★★★★★</span>
                <small>Over 500+ 5 Star Reviews Online</small>
            </div>

        </section>
    )
}

export default HowTheProductWorks