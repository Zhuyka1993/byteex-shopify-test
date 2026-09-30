import { useRef, useState } from 'react'
import './ProductGallery.css'

import arrowLeft from '../../assets/describe-top-benefits/arrow-left.svg'
import arrowRight from '../../assets/describe-top-benefits/arrow-right.svg'

import image1 from '../../assets/describe-top-benefits/wide-robe-1.webp'
import image2 from '../../assets/describe-top-benefits/wide-robe-2.webp'
import image3 from '../../assets/describe-top-benefits/wide-robe-3.webp'
import image4 from '../../assets/describe-top-benefits/wide-robe-4.webp'
import image5 from '../../assets/describe-top-benefits/wide-robe-5.webp'
import image6 from '../../assets/describe-top-benefits/wide-robe-6.webp'
import image7 from '../../assets/describe-top-benefits/wide-robe-7.webp'
import image8 from '../../assets/describe-top-benefits/wide-robe-8.webp'

function ProductGallery() {
  const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ]

  const [activeSlide, setActiveSlide] = useState(0)
  const touchStart = useRef(null)

  const goToPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    )
  }

  const goToNext = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    )
  }

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return

    const touchEnd = event.changedTouches[0].clientX
    const distance = touchStart.current - touchEnd

    if (Math.abs(distance) < 50) {
      touchStart.current = null
      return
    }

    if (distance > 0) {
      goToNext()
    } else {
      goToPrevious()
    }

    touchStart.current = null
  }

  return (
    <div className="product-gallery">
      <div
        className="product-gallery__main"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className="product-gallery__arrow product-gallery__arrow--left"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <div className="product-gallery__image-wrapper">
          <img
            key={activeSlide}
            className="product-gallery__image"
            src={slides[activeSlide]}
            alt="White Robe"
          />

          <div className="product-gallery__thumbnails">
            {slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                className={`product-gallery__thumbnail ${
                  activeSlide === index
                    ? 'product-gallery__thumbnail--active'
                    : ''
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show image ${index + 1}`}
              >
                <img src={slide} alt="" />
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="product-gallery__arrow product-gallery__arrow--right"
          onClick={goToNext}
          aria-label="Next image"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      <p className="product-gallery__caption">
        White Robe
      </p>
    </div>
  )
}

export default ProductGallery