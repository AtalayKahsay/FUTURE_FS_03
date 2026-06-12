import { useState, useEffect } from 'react';
import { BsCheckCircle } from 'react-icons/bs'
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleSubscribe = () => {
    if (isSubscribed) return;

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setIsSubscribed(true);
    setEmail('');
    setIsSuccess(true);
  };


  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss the latest updates</p> 
      </div>

      <div className="app__newsletter-input flex__center">
        <div className="app__newsletter-input_wrapper">
    <input 
      type="email" 
      name="email" 
      id="email" 
      placeholder="Enter your email address"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        setError('');
        setIsSuccess(false);
      }}
    />
    {error && <p className="newsletter__error">{error}</p>}
    {isSuccess && (
      <p className="newsletter__success">
        Thank you for subscribing! Stay tuned for special offers and updates.
      </p>
    )}
  </div>
        <button
          className={`custom__button ${isSubscribed ? 'subscribed__button' : ''}`}
          onClick={handleSubscribe}
          disabled={isSubscribed}
        >
          {isSubscribed ? (
            <>
              <BsCheckCircle style={{ marginRight: '6px' }} />
              Subscribed
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </div>
    </div>
  )
}

export default Newsletter