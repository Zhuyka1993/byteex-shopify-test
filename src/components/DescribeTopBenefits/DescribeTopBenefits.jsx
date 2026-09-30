import './DescribeTopBenefits.css'
import ProductGallery from './ProductGallery'

import icon1 from '../../assets/describe-top-benefits/icon-1.svg'
import icon2 from '../../assets/describe-top-benefits/icon-2.svg'
import icon3 from '../../assets/describe-top-benefits/icon-3.svg'
import icon4 from '../../assets/describe-top-benefits/icon-4.svg'

function DescribeTopBenefits() {
  const features = [
    {
      icon: icon1,
      title: 'Ethically sourced.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
        icon: icon2,
      title: 'Responsibly made.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
        icon: icon3,
      title: 'Made for living in.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
        icon: icon4,
      title: 'Unimaginably comfortable.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
  ]

  return (
    <section className="describe-top-benefits">
      <div className="describe-top-benefits__content">
        <h2 className="describe-top-benefits__title">
          Loungewear you can be proud of.
        </h2>

        <div className="describe-top-benefits__features">
          {features.map((feature) => (
            <article
              className="describe-top-benefits__feature"
              key={feature.title}
            >
              <div className="describe-top-benefits__feature-icon">
                <img src={feature.icon} alt="" />
              </div>

              <div className="describe-top-benefits__feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="describe-top-benefits__gallery">
        <ProductGallery />
      </div>
    </section>
  )
}

export default DescribeTopBenefits