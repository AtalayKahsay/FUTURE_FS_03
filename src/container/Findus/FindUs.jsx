import { images } from '../../constants'
import { SubHeading } from '../../components'

function FindUs() {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">Bole Road, Brotherhood Business Center, 4th Floor, Addis Ababa, Ethiopia</p>
          <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 10:00 pm</p>
          <p className="p__opensans">Sat - Sun: 09:00 am - 11:00 pm</p>
          <p className="p__opensans" style={{marginTop: '1rem'}}><span style={{color: '#DCCA87'}}>Phone: </span>+251 975 280 394</p>
          <p className="p__opensans"><span style={{color: '#DCCA87'}}>Email: </span>info@goldenfork.com</p>
        </div>
        <button className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>

      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="FindUs" />
      </div>
    </div>
  )
}

export default FindUs
