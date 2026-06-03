import { useRef } from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Gallery.css'

const galleryImages = [
  images.gallery00,
  images.gallery01, 
  images.gallery02, 
  images.gallery03, 
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07
];

function Gallery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const cardWidth = current.firstChild?.offsetWidth || 300;

    current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="From Our Kitchen" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color: '#AAA', marginTop: '2rem'}}>
          Explore our world of flavour and elegance. Every plate tells a story of tradition, passion, and the rich culinary heritage of Ethiopian fine dining.
        </p>
        <button type="button" className="custom__button">Explore More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt={`Golden Fork gallery ${index + 1}`} />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery