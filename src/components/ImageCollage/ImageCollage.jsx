import './ImageCollage.css'

import hero1 from '../../assets/hero/hero-1.webp'
import hero2 from '../../assets/hero/hero-2.webp'
import hero3 from '../../assets/hero/hero-3.webp'

function ImageCollage({ variant = 'hero' }) {
    return (
        <div className={`image-collage image-collage--${variant}`}>
            <div className="image-collage__gradient" />

            <img src={hero1} alt="" />
            <img src={hero2} alt="" />
            <img src={hero3} alt="" />

            <div className="image-collage__gradient" />
        </div>
    )
}

export default ImageCollage