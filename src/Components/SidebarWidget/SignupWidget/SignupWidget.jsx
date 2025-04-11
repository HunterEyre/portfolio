"use client"; // Ensures the component runs on the client side

import './SignupWidget.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    try {
      setBusy(true);
      // Wait 2 seconds (simulating a network request)
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage('Thanks for subscribing!');
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="sidebar">
    <form data-testid={'signupWidget'} className={'signup-widget'} onSubmit={handleSubmit} autoComplete={'false'}>

      <div className="signup-widget-header">
      <img src="/emailIcon.svg" alt="Email Icon" className="email-icon"/>
      <h2 data-testid={'signupWidgetTitle'}>{title}</h2>
      </div>

      {isSubscribed && (
        <p data-testid={'signupWidgetMessage'} className={'message'}>
          {message}
        </p>
      )}
      {!isSubscribed && (
        <>
          <p data-testid={'signupWidgetContent'}>{content}</p>
          <div className={'input-row'}>
            <input
              data-testid={'signupWidgetInput'}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={async (e) => {
                setEmail(e.target.value);
                await input(e.target, e.target.value);
              }}
              required
              disabled={busy}
            />
            {error && <p className="error-message">{error}</p>}
            <button data-testid={'signupWidgetButton'} type="submit" disabled={busy}>
              {busy ? 'Joining...' : 'Join'}
            </button>
          </div>
        </>
      )}
    </form>
    </div>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
