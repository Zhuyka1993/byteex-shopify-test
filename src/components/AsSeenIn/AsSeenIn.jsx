import { useState } from 'react'
import './AsSeenIn.css'

import ecoStylist from '../../assets/as-seen-in/eco-stylist.svg'
import canadianLiving from '../../assets/as-seen-in/canadian-living.svg'
import jillianHarris from '../../assets/as-seen-in/jillian-harris.svg'
import ecoHub from '../../assets/as-seen-in/eco-stylist.svg'
import trendhunter from '../../assets/as-seen-in/trendhunter.svg'

function AsSeenIn() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [touchStart, setTouchStart] = useState(null)

    const logos = [
        { src: ecoStylist, alt: 'Eco-Stylist' },
        { src: canadianLiving, alt: 'Canadian Living' },
        { src: jillianHarris, alt: 'Jillian Harris' },
        { src: ecoHub, alt: 'The Eco Hub' },
        { src: trendhunter, alt: 'TrendHunter' },
    ]

    const slides = [
        logos.slice(0, 3),
        logos.slice(1, 4),
        logos.slice(2, 5),
    ]

    const handleTouchStart = (event) => {
        setTouchStart(event.touches[0].clientX)
    }

    const handleTouchEnd = (event) => {
        if (touchStart === null) return

        const touchEnd = event.changedTouches[0].clientX
        const distance = touchStart - touchEnd

        if (Math.abs(distance) < 50) {
            setTouchStart(null)
            return
        }

        if (distance > 0 && activeSlide < 2) {
            setActiveSlide(activeSlide + 1)
        }

        if (distance < 0 && activeSlide > 0) {
            setActiveSlide(activeSlide - 1)
        }

        setTouchStart(null)
    }

    return (
        <section className="as-seen-in">
            <p className="as-seen-in__title">as seen in</p>

            {/* Desktop */}
            <div className="as-seen-in__desktop-logos">
                {logos.map((logo) => (
                    <img key={logo.alt} src={logo.src} alt={logo.alt} />
                ))}
            </div>

            {/* Mobile */}
            <div className="as-seen-in__mobile-slider">
                <div
                    className="as-seen-in__slider"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="as-seen-in__track"
                        style={{
                            transform: `translateX(-${activeSlide * 33.3333}%)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div className="as-seen-in__slide" key={index}>
                                {slide.map((logo) => (
                                    <img key={logo.alt} src={logo.src} alt={logo.alt} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="as-seen-in__dots">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            type="button"
                            className={activeSlide === index ? 'active' : ''}
                            onClick={() => setActiveSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AsSeenIn
