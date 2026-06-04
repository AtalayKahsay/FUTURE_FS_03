import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import './Footer.css'
import { images } from '../../constants'

function Footer() {
  return (
    <div className="app__footer">
      <FooterOverlay />
      <Newsletter />
      <hr className="app__horLine" />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Bole Road, Brotherhood Business Center, 4th Floor, Addis Ababa, Ethiopia</p>
          <p className="p__opensans">+251 975 280 394</p>
          <p className="p__opensans">+251 000 000 000</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.goldenfork} alt="footer_logo" />
          <p className="p__opensans">&quot;Good food is the foundation of genuine happiness.&quot;</p>
          <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FaXTwitter />
            <FiInstagram />
            <FiYoutube />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">10:00 am - 10:00 pm</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">09:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Golden Fork. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer