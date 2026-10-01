import './FinalCTAInfo.css'

import clockIcon from '../../assets/final-cta/clock.svg'
import paymentMethod from '../../assets/final-cta/payment-method.png'
import carIcon from '../../assets/final-cta/car.svg'
import shieldIcon from '../../assets/final-cta/shield.svg'
import curtIcon from '../../assets/final-cta/curt.svg'

function FinalCTAInfo() {
    return (
        <div className="final-cta-info">

            <div className="final-cta-info__shipping">
                <div className="final-cta-info__shipping-row">
                    <img src={clockIcon} alt="" />
                    <span>Ships in 1-2 Days</span>
                </div>

                <div className="final-cta-info__payment">
                    <img
                        src={paymentMethod}
                        alt="Payment methods"
                    />
                </div>
            </div>

            <div className="final-cta-info__benefits">

                <div className="final-cta-info__benefit">
                    <div className="final-cta-info__icon">
                        <img src={carIcon} alt="" />
                    </div>

                    <p>
                        Free Shipping on<br />
                        Orders over $200
                    </p>
                </div>

                <div className="final-cta-info__benefit">
                    <div className="final-cta-info__icon">
                        <img src={shieldIcon} alt="" />
                    </div>

                    <p className='over'>
                        Over 500+ 5 Star<br />
                        Reviews Online
                    </p>
                </div>

                <div className="final-cta-info__benefit">
                    <div className="final-cta-info__icon">
                        <img src={curtIcon} alt="" />
                    </div>

                    <p>
                        Made ethically<br />
                        and responsibly.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default FinalCTAInfo