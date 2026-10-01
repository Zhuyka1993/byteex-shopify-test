import './Hero.css'

import feature1 from '../../assets/hero/feature-1.svg'
import feature2 from '../../assets/hero/feature-2.svg'
import feature3 from '../../assets/hero/feature-3.svg'

import CustomizeButton from '../CustomizeButton/CustomizeButton.jsx'
import HeroReview from '../HeroReview/HeroReview.jsx'
import ImageCollage from '../ImageCollage/ImageCollage.jsx'

function Hero({ review }) {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">
                    Don't apologize for being comfortable.
                </h1>

                <div className="hero__features">
                    <div className="hero__feature">
                        <div className="hero__feature-icon">
                            <img src={feature1} alt="" />
                        </div>

                        <p>
                            Beautiful, comfortable, long wear for day or night.
                        </p>
                    </div>

                    <div className="hero__feature">
                        <div className="hero__feature-icon">
                            <img src={feature2} alt="" />
                        </div>

                        <p>
                            No wasteful extras, like tags or plastic packaging.
                        </p>
                    </div>

                    <div className="hero__feature">
                        <div className="hero__feature-icon">
                            <img src={feature3} alt="" />
                        </div>

                        <p>
                            Our signature fabric is incredibly comfortable, unlike anything
                            you've ever felt.
                        </p>
                    </div>
                </div>

                <CustomizeButton />

                <HeroReview review={review} />
            </div>

            <ImageCollage />
        </section>
    )
}

export default Hero