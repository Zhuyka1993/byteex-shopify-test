import { useState } from 'react'
import './FAQ.css'

import CustomizeButton from '../CustomizeButton/CustomizeButton.jsx'
import FiveStarReviews from '../FiveStarReviews/FiveStarReviews.jsx'
import faqMain1 from '../../assets/main1.webp'
import faqMain2 from '../../assets/main2.webp'
import faqMain3 from '../../assets/main3.webp'

function FAQ({ faq }) {
    const [openIndex, setOpenIndex] = useState(0)

    const toggleQuestion = (index) => {
        setOpenIndex((currentIndex) =>
            currentIndex === index ? null : index
        )
    }

    return (
        <section className="faq">
            <div className="faq__content">
                <h2>Frequently asked questions.</h2>

                <div className="faq__list">
                    {faq.map((item, index) => (
                        <div className="faq__item" key={item._id}>
                            <button
                                className="faq__question"
                                onClick={() => toggleQuestion(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{item.question}</span>

                                <span className="faq__icon">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="faq__answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="faq__images">
                <div className="faq__image-block faq__image-block--top-left" />

                <img
                    src={faqMain3}
                    alt=""
                    className="faq__image faq__image--top-right"
                />

                <img
                    src={faqMain1}
                    alt=""
                    className="faq__image faq__image--main"
                />

                <img
                    src={faqMain2}
                    alt=""
                    className="faq__image faq__image--bottom-left"
                />

                <div className="faq__image-block faq__image-block--bottom-right" />
            </div>

            <CustomizeButton />
            <FiveStarReviews />
        </section>
    )
}

export default FAQ