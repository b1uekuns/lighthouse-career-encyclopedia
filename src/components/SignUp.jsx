import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SignUp = ({ onBack, onSignIn }) => {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await signUp(formData);

    if (result.success) {
      setSuccess(true);
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        onBack();
      }, 2000);
    } else {
      setError(result.error);
    }

    setIsLoading(false);
  };

  const handleSocialLogin = (provider) => {
    // Handle social login (symbolic only)
    console.log(`Sign up with ${provider}`);
  };

  return (
    <div className="signup-page" style={{
      flex: 1,
      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      minHeight: 'calc(100vh - 80px)'
    }}>
      <div className="signup-container" style={{
        display: 'flex',
        maxWidth: '1000px',
        width: '100%',
        gap: '3rem',
        alignItems: 'center'
      }}>
        
        {/* Left Side - Social Login */}
        <div className="social-section" style={{
          flex: 1,
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            lineHeight: '1.2'
          }}>
            Sign up with your social network
          </h2>
          
          <div className="social-buttons" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {/* Facebook */}
            <button
              onClick={() => handleSocialLogin('Facebook')}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: 'none',
                background: '#1877f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>

            {/* Google */}
            <button
              onClick={() => handleSocialLogin('Google')}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: 'none',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>

            {/* Apple */}
            <button
              onClick={() => handleSocialLogin('Apple')}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: 'none',
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
            </button>
          </div>


        </div>

        {/* Vertical Divider with Or */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '400px',
          margin: '0 2rem'
        }}>
          {/* Top line */}
          <div style={{
            width: '1px',
            flex: 1,
            background: 'rgba(255, 255, 255, 0.3)'
          }}></div>

          {/* Or text */}
          <div style={{
            padding: '1rem 0',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.2rem'
          }}>
            Or
          </div>

          {/* Bottom line */}
          <div style={{
            width: '1px',
            flex: 1,
            background: 'rgba(255, 255, 255, 0.3)'
          }}></div>
        </div>

        {/* Right Side - Form */}
        <div className="form-section" style={{
          flex: 1,
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Sign up
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Email */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>
                Your email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                required
              />
            </div>

            {/* First Name and Last Name */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  First name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  Last name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                  required
                />
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  Confirm your password:
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                  required
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1rem 0' }}>
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                style={{ width: '18px', height: '18px' }}
                required
              />
              <label style={{ fontSize: '0.9rem' }}>
                I agree to the <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Terms of Use</span> and <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Privacy Notice</span>
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div style={{
                background: '#fee2e2',
                color: '#dc2626',
                padding: '0.75rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                textAlign: 'center',
                border: '1px solid #fecaca'
              }}>
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div style={{
                background: '#dcfce7',
                color: '#16a34a',
                padding: '0.75rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                textAlign: 'center',
                border: '1px solid #bbf7d0'
              }}>
                Account created successfully! Redirecting to home page...
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || success}
              style={{
                background: isLoading || success ? '#9ca3af' : 'white',
                color: isLoading || success ? 'white' : '#2563eb',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: isLoading || success ? 'not-allowed' : 'pointer',
                alignSelf: 'center',
                transition: 'background-color 0.2s'
              }}
            >
              {isLoading ? 'Creating Account...' : success ? 'Account Created!' : 'Sign up'}
            </button>

            {/* Sign In Link */}
            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
              Already have an account? <span onClick={onSignIn || onBack} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Sign in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
