import './Header.css'
import {images} from '../../constants'
import { SubHeading } from '../../components'

function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Crafted with passion, served with elegance" />
        <h1 className="app__header-h1">Authentic Taste in Every Bite</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Fresh ingredients crafted into delicious meals. Every dish is prepared with care, bringing rich flavours and a memorable dining experience.</p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="Ethiopian Special Chicken(Doro Wat)" />
      </div>
    </div>
  )
}

export default Header