import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Chef.css'

function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding" id="chef">
      <div className="app__wrapper_img app__wrapper_img_reverse">
        <img src={images.chef} alt="Chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Cooking is not just a craft — it is our deepest expression of love.
            </p>
          </div>
          <p className="p__opensans">
            Every dish carries the soul of Ethiopian tradition, prepared with the finest local ingredients. At Golden Fork, great food is built on honesty, patience, and deep respect for flavour.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Dawit Bekele</p>
          <p className="p__opensans">Executive Chef</p>
          <img src={images.sign} alt="sign" />
        </div>

      </div>
    </div>
  )
}

export default Chef
