import './AboutUs.css'
import { images } from '../../constants'

function AboutUs() {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="About_spoon" className="spoon__img" />
          <p className="p__opensans">
            Nestled in the vibrant heart of Addis Ababa, Golden Fork Restaurant is a celebration of culinary excellence where Ethiopian warmth meets refined dining. We bring together bold, authentic flavours and contemporary presentation, crafting every dish with passion and precision to offer our guests an unforgettable experience.
            </p>
          <button type="button" className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="About_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="About_spoon" className="spoon__img" />
          <p className="p__opensans">
            Founded in 2004 in Addis Ababa, Golden Fork began as a humble vision — to honour Ethiopia's rich culinary heritage while elevating it to a fine dining standard. Over two decades, we have grown from a cherished local favourite into a landmark dining destination, proudly serving generations of families and guests.
            </p>
          <button type="button" className="custom__button">Know More</button>
        </div>

      </div>

    </div>
  )
}

export default AboutUs

