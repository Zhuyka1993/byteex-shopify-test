import './FinalCTA.css'

import ImageCollage from '../ImageCollage/ImageCollage.jsx'
import CustomizeButton from '../CustomizeButton/CustomizeButton.jsx'
import FiveStarReviews from '../FiveStarReviews/FiveStarReviews.jsx'
import FinalCTAInfo from '../FinalCTAInfo/FinalCTAInfo.jsx'

function FinalCTA() {
    return (
        <section className="final-cta">
            <div className="final-cta__content">
                <h2>Find something you love.</h2>

                <p className="final-cta__description final-cta__description--desktop">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                    lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
                    felis finibus consequat.
                </p>

                <p className="final-cta__description final-cta__description--mobile">
                    Click below to browse our collection!
                </p>

                <ImageCollage variant="final-cta" />

                <div className="final-cta__button">
                    <CustomizeButton />
                </div>

                <FinalCTAInfo />

                <div className="final-cta__mobile-reviews">
                    <FiveStarReviews />
                </div>
            </div>
        </section>
    )
}

export default FinalCTA