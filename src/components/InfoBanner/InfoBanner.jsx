import './InfoBanner.css'

import co2Icon from '../../assets/info-banner/co2.svg'
import waterIcon from '../../assets/info-banner/water.svg'
import energyIcon from '../../assets/info-banner/energy.svg'

function InfoBanner() {
    return (
        <section className="info-banner">
            <h2>Our total green impact</h2>

            <div className="info-banner__items">
                <div className="info-banner__item">
                    <div className="info-banner__icon">
                        <img src={co2Icon} alt="" />
                    </div>

                    <strong>3,927 kg</strong>
                    <span>of CO2 saved</span>
                </div>

                <div className="info-banner__divider" />

                <div className="info-banner__item">
                    <div className="info-banner__icon">
                        <img src={waterIcon} alt="" />
                    </div>

                    <strong>2,546,167 days</strong>
                    <span>of drinking water saved</span>
                </div>

                <div className="info-banner__divider" />

                <div className="info-banner__item">
                    <div className="info-banner__icon">
                        <img src={energyIcon} alt="" />
                    </div>

                    <strong>7,321 kWh</strong>
                    <span>of energy saved</span>
                </div>
            </div>
        </section>
    )
}

export default InfoBanner